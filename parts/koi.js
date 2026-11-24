// ASCII koi pond for the home page: two koi wander a top-down pond, and
// clicking scatters a few pellets that the koi notice and swim over to eat.
// The pond is a character grid painted onto a canvas each frame. Each koi is
// a chain of spine nodes; every grid cell near a koi is classified as body,
// fin, or tail by its distance along and across that spine.
(function () {
	var canvas = document.querySelector('canvas.home-pond');
	if (!canvas || !canvas.getContext) return;
	var ctx = canvas.getContext('2d');

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	var N = 16;              // spine nodes per koi
	var MAX_BEND = 0.2;      // radians each spine joint may bend
	var FPS = 30;
	var MAX_PELLETS = 16;
	var PELLET_LIFE = 24;    // seconds a pellet floats before it sinks
	var FONT_STACK = 'Menlo, Consolas, "Liberation Mono", monospace';
	var BG = '#e0d7df';

	// Draw priority: a cell keeps whatever was written to it at the highest layer.
	var L_WATER = 1, L_RIPPLE = 2, L_SHADOW = 3, L_FIN = 4, L_BODY = 5, L_EYE = 6, L_FOOD = 7;

	var PAL = [];
	function color(hex) { PAL.push(hex); return PAL.length - 1; }
	var WATER = color('#d5cbd3'), WATER2 = color('#cdc2cb'), SHADOW = color('#c4b7c1');
	var RIPPLE = color('#a99ba6'), RIPPLE2 = color('#c2b6bf');
	var FIN = color('#f6f0ee'), FIN_EDGE = color('#b4a7b0');
	var EYE = color('#2a2226'), FOOD = color('#7b4a26'), FOOD_FALL = color('#a8805c');
	// Skin shades from the body's edge (index 0) to its spine (index 3).
	var SKIN = {
		white: [color('#9f919c'), color('#f1ebea'), color('#faf7f4'), color('#ffffff')],
		red: [color('#a3432a'), color('#c4532f'), color('#d8643a'), color('#e77a4a')]
	};
	var RAMP = [':', '%', '@', '@'];

	// Fins in body-length units: where they attach, size, angle back from the spine, flap.
	var FINS = [
		{ s: 0.22, len: 0.16, wid: 0.055, spread: 0.95, flap: 0.3 },  // pectoral
		{ s: 0.5, len: 0.08, wid: 0.03, spread: 0.7, flap: 0.15 }     // pelvic
	];

	function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
	function smooth(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
	function angleDiff(from, to) {
		var d = (to - from) % (2 * Math.PI);
		if (d > Math.PI) d -= 2 * Math.PI;
		else if (d < -Math.PI) d += 2 * Math.PI;
		return d;
	}

	// Half-width of the body seen from above, as a fraction of length, at s (0 = snout, 0.8 = tail stalk).
	function bodyHalf(s) {
		if (s <= 0) return 0;
		if (s < 0.1) return 0.115 * Math.sqrt(Math.sin((s / 0.1) * Math.PI / 2));
		if (s < 0.32) return 0.115 + 0.02 * smooth(0.1, 0.32, s);
		return 0.135 - 0.105 * smooth(0.32, 0.8, s);
	}
	// The tail fans out from the stalk to the end of the spine.
	function tailHalf(s) { return 0.03 + 0.15 * Math.pow(smooth(0.8, 1, s), 0.8); }

	// ---- grid ----

	var size = 0, dpr = 1, cw = 6, chh = 10, cols = 0, rows = 0;
	var gChar = [], gCol = new Uint8Array(0), gLay = new Uint8Array(0);
	var buckets = PAL.map(function () { return []; });

	function setCell(c, r, ch, col, layer) {
		if (c < 0 || r < 0 || c >= cols || r >= rows) return;
		var i = r * cols + c;
		if (layer < gLay[i]) return;
		gLay[i] = layer; gChar[i] = ch; gCol[i] = col;
	}
	function setAt(x, y, ch, col, layer) { setCell(Math.floor(x / cw), Math.floor(y / chh), ch, col, layer); }

	function flush() {
		ctx.fillStyle = BG;
		ctx.fillRect(0, 0, size, size);
		var p, i;
		for (p = 0; p < buckets.length; p++) buckets[p].length = 0;
		for (i = 0; i < cols * rows; i++) if (gLay[i]) buckets[gCol[i]].push(i);
		for (p = 0; p < buckets.length; p++) {
			var b = buckets[p];
			if (!b.length) continue;
			ctx.fillStyle = PAL[p];
			for (var j = 0; j < b.length; j++) {
				i = b[j];
				var c = i % cols, r = (i - c) / cols;
				ctx.fillText(gChar[i], (c + 0.5) * cw, (r + 0.5) * chh);
			}
		}
	}

	// ---- state ----

	var now = 0;
	var koi = null;
	var pellets = [];
	var ripples = [];

	// Patches in the koi's second colour: a kohaku (white) gets red patches and a red cap
	// on the head; a red koi gets white spots.
	function makeSpots(base) {
		var kind = base === 'white' ? 'red' : 'white';
		var spots = [];
		if (base === 'white') {
			spots.push({ s: 0.1 + Math.random() * 0.03, u: (Math.random() - 0.5) * 0.3, rs: 0.045 + Math.random() * 0.02, ru: 0.6, kind: kind, seed: Math.random() * 9 });
		}
		var n = 2 + Math.floor(Math.random() * 2);
		for (var i = 0; i < n; i++) {
			spots.push({ s: 0.28 + Math.random() * 0.4, u: (Math.random() - 0.5) * 1.2, rs: 0.04 + Math.random() * 0.05, ru: 0.35 + Math.random() * 0.4, kind: kind, seed: Math.random() * 9 });
		}
		return spots;
	}

	// base is the koi's main skin colour: 'white' for a kohaku, 'red' for a red koi with white spots.
	function makeKoi(lenFrac, x, y, heading, base) {
		var k = {
			lenFrac: lenFrac,
			x: new Float64Array(N), y: new Float64Array(N),    // simulated spine
			rx: new Float64Array(N), ry: new Float64Array(N),  // spine with the swimming wave added
			heading: heading, speed: 0, wander: 0,
			phase: Math.random() * 6, finPhase: Math.random() * 6, beat: 0.5,
			gliding: false, burstEnd: 0,
			noticeAt: 0, target: null, retarget: 0, gulpUntil: 0,
			base: base,
			spots: makeSpots(base)
		};
		var seg = lenFrac * size / (N - 1);
		for (var i = 0; i < N; i++) {
			k.x[i] = x - Math.cos(heading) * seg * i;
			k.y[i] = y - Math.sin(heading) * seg * i;
		}
		return k;
	}

	function skinAt(k, s, u) {
		var kind = k.base;
		for (var i = 0; i < k.spots.length; i++) {
			var p = k.spots[i];
			var ds = (s - p.s) / p.rs, du = (u - p.u) / p.ru;
			// The wobble roughens the patch edges.
			if (ds * ds + du * du < 1 + 0.25 * Math.sin(s * 47 + u * 13 + p.seed)) kind = p.kind;
		}
		return kind;
	}

	// ---- simulation ----

	// Each node trails the one ahead at a fixed spacing, bending at most MAX_BEND per joint.
	function followSpine(k) {
		var seg = k.lenFrac * size / (N - 1);
		var prev = k.heading;
		for (var i = 1; i < N; i++) {
			var ang = Math.atan2(k.y[i - 1] - k.y[i], k.x[i - 1] - k.x[i]);
			ang = prev + clamp(angleDiff(prev, ang), -MAX_BEND, MAX_BEND);
			k.x[i] = k.x[i - 1] - Math.cos(ang) * seg;
			k.y[i] = k.y[i - 1] - Math.sin(ang) * seg;
			prev = ang;
		}
	}

	function nearestPellet(k) {
		var best = null, bestScore = Infinity;
		var fx = Math.cos(k.heading), fy = Math.sin(k.heading);
		for (var i = 0; i < pellets.length; i++) {
			var p = pellets[i];
			if (!p.landed || p.eaten) continue;
			var dx = p.x - k.x[0], dy = p.y - k.y[0];
			var d = Math.sqrt(dx * dx + dy * dy) || 1;
			// Pellets ahead are cheaper to reach than ones behind.
			var score = d * (1.6 - 0.6 * (dx * fx + dy * fy) / d);
			if (score < bestScore) { bestScore = score; best = p; }
		}
		return best;
	}

	function tryEat(k, L) {
		var mx = k.x[0] + Math.cos(k.heading) * L * 0.02;
		var my = k.y[0] + Math.sin(k.heading) * L * 0.02;
		var reach = L * 0.08 + cw;
		for (var i = 0; i < pellets.length; i++) {
			var p = pellets[i];
			if (!p.landed || p.eaten) continue;
			var dx = p.x - mx, dy = p.y - my;
			if (dx * dx + dy * dy < reach * reach) {
				p.eaten = true;
				k.target = null;
				k.gulpUntil = now + 0.35;
				addRipple(p.x, p.y, size * 0.045);
			}
		}
	}

	function updateKoi(k, other, dt) {
		var L = k.lenFrac * size;
		var cruise = size * 0.1, rush = size * 0.28;
		var hx = k.x[0], hy = k.y[0];
		var fx = Math.cos(k.heading), fy = Math.sin(k.heading);
		var vx, vy, turnRate, targetSpeed, beat;

		if (k.noticeAt && now >= k.noticeAt && (!k.target || k.target.eaten || now >= k.retarget)) {
			k.target = nearestPellet(k);
			k.retarget = now + 0.6;
			if (!k.target) k.noticeAt = 0;  // all eaten: back to wandering
		}
		var food = k.noticeAt && k.target && !k.target.eaten ? k.target : null;

		if (food) {
			var dx = food.x - hx, dy = food.y - hy;
			var dist = Math.sqrt(dx * dx + dy * dy) || 1;
			var near = L * 0.6;
			vx = dx / dist * 3;
			vy = dy / dist * 3;
			// Ease off and turn harder on the approach so the koi doesn't circle the pellet.
			targetSpeed = dist > near ? rush : Math.max(cruise * 0.4, rush * dist / near);
			turnRate = dist > near ? 2.4 : 3.6;
			beat = 1.2;
			k.wander *= 0.9;
		} else {
			k.wander = clamp(k.wander + (Math.random() - 0.5) * dt * 3, -0.8, 0.8);
			vx = Math.cos(k.heading + k.wander);
			vy = Math.sin(k.heading + k.wander);
			// Alternate a few tail beats with a long glide.
			if (now >= k.burstEnd) {
				k.gliding = !k.gliding;
				k.burstEnd = now + (k.gliding ? 1.5 + Math.random() * 2.5 : 0.7 + Math.random() * 1.2);
			}
			targetSpeed = k.gliding ? cruise * 0.55 : cruise * 1.15;
			turnRate = 1.0;
			beat = k.gliding ? 0.1 : 0.8;
		}
		if (now < k.gulpUntil) targetSpeed *= 0.4;

		// Steer back toward open water before the snout reaches the edge.
		var look = L * 0.5 + k.speed * 0.5;
		var lx = hx + fx * look, ly = hy + fy * look;
		var m = size * 0.15;
		var ex = (lx < m ? m - lx : lx > size - m ? size - m - lx : 0) / m;
		var ey = (ly < m ? m - ly : ly > size - m ? size - m - ly : 0) / m;
		var edgeW = food ? 0.5 : 2.5;
		vx += ex * edgeW;
		vy += ey * edgeW;
		if (ex || ey) turnRate = Math.max(turnRate, 1.6);

		// Keep the head out of the other koi's body.
		var space = L * 0.25;
		for (var i = 0; i < N; i += 2) {
			var ox = hx - other.x[i], oy = hy - other.y[i];
			var d2 = ox * ox + oy * oy;
			if (d2 < space * space && d2 > 0.01) {
				var d = Math.sqrt(d2), w = (1 - d / space) * (food ? 0.8 : 2);
				vx += ox / d * w;
				vy += oy / d * w;
			}
		}

		k.heading += clamp(angleDiff(k.heading, Math.atan2(vy, vx)), -turnRate * dt, turnRate * dt);
		var rate = targetSpeed > k.speed ? 1.6 : food ? 2.5 : 0.7;
		k.speed += (targetSpeed - k.speed) * Math.min(1, dt * rate);
		k.beat += (beat - k.beat) * Math.min(1, dt * 3);
		k.phase += dt * (2.5 + 6 * k.beat);
		k.finPhase += dt * (food ? 7 : 2.5);

		k.x[0] += Math.cos(k.heading) * k.speed * dt;
		k.y[0] += Math.sin(k.heading) * k.speed * dt;
		followSpine(k);
		if (food) tryEat(k, L);
	}

	function alertKoi(p) {
		for (var i = 0; i < koi.length; i++) {
			var k = koi[i];
			if (k.noticeAt) continue;
			var dx = p.x - k.x[0], dy = p.y - k.y[0];
			// A short, slightly random reaction time; koi further away take longer to notice.
			k.noticeAt = now + 0.3 + Math.random() * 0.7 + Math.sqrt(dx * dx + dy * dy) / size * 0.8;
		}
	}

	function feed(x, y) {
		var n = 3 + Math.floor(Math.random() * 3);
		for (var i = 0; i < n; i++) {
			var a = Math.random() * Math.PI * 2, r = Math.random() * size * 0.05;
			pellets.push({
				x: clamp(x + Math.cos(a) * r, cw, size - cw),
				y: clamp(y + Math.sin(a) * r, chh, size - chh),
				vx: (Math.random() - 0.5) * 4, vy: (Math.random() - 0.5) * 4,
				land: now + 0.12 + Math.random() * 0.35,
				landed: false, eaten: false
			});
		}
		while (pellets.length > MAX_PELLETS) pellets.shift().eaten = true;
	}

	function updatePellets(dt) {
		for (var i = pellets.length - 1; i >= 0; i--) {
			var p = pellets[i];
			if (p.eaten || now - p.land > PELLET_LIFE) {
				p.eaten = true;
				pellets.splice(i, 1);
				continue;
			}
			if (now < p.land) continue;
			if (!p.landed) {
				p.landed = true;
				addRipple(p.x, p.y, size * 0.07);
				alertKoi(p);
			}
			p.x = clamp(p.x + p.vx * dt, cw, size - cw);
			p.y = clamp(p.y + p.vy * dt, chh, size - chh);
			p.vx *= 1 - dt * 0.2;
			p.vy *= 1 - dt * 0.2;
		}
	}

	// A drop is a fainter ripple with a second ring trailing inside the first.
	function addRipple(x, y, max, drop) { ripples.push({ x: x, y: y, r: 0, max: max, drop: !!drop }); }

	var nextDrop = 0.8;
	function updateDrops() {
		if (now < nextDrop) return;
		addRipple(Math.random() * size, Math.random() * size, size * (0.06 + Math.random() * 0.05), true);
		nextDrop = now + 1.6 + Math.random() * 2.2;
	}

	function updateRipples(dt) {
		for (var i = ripples.length - 1; i >= 0; i--) {
			ripples[i].r += size * 0.07 * dt;
			if (ripples[i].r > ripples[i].max) ripples.splice(i, 1);
		}
	}

	function step(dt) {
		now += dt;
		updateDrops();
		updatePellets(dt);
		updateKoi(koi[0], koi[1], dt);
		updateKoi(koi[1], koi[0], dt);
		updateRipples(dt);
	}

	// ---- drawing ----

	function drawWater() {
		for (var r = 0; r < rows; r++) {
			var wr = Math.sin(r * 0.23 + now * 0.21) * 1.7;
			for (var c = 0; c < cols; c++) {
				var v = Math.sin(c * 0.29 + wr + now * 0.45) + Math.sin(r * 0.53 - c * 0.07 - now * 0.33);
				if (v > 1.55) setCell(c, r, '~', WATER2, L_WATER);
				else if (v > 1.3) setCell(c, r, '-', WATER, L_WATER);
			}
		}
	}

	function drawRipples() {
		for (var i = 0; i < ripples.length; i++) {
			var rp = ripples[i], f = rp.r / rp.max;
			drawRing(rp.x, rp.y, rp.r, f < 0.35 ? 'o' : '.', f < 0.6 && !rp.drop ? RIPPLE : RIPPLE2);
			if (rp.drop && f > 0.4) drawRing(rp.x, rp.y, rp.r * 0.5, '.', RIPPLE2);
		}
	}

	function drawRing(x, y, r, ch, col) {
		var n = Math.max(6, Math.ceil(2 * Math.PI * r / (cw * 1.1)));
		for (var j = 0; j < n; j++) {
			var a = j / n * Math.PI * 2;
			setAt(x + Math.cos(a) * r, y + Math.sin(a) * r, ch, col, L_RIPPLE);
		}
	}

	function drawPellets() {
		for (var i = 0; i < pellets.length; i++) {
			var p = pellets[i];
			if (!p.landed) setAt(p.x, p.y, "'", FOOD_FALL, L_FOOD);
			else if (now - p.land > PELLET_LIFE - 4) setAt(p.x, p.y, '.', FOOD_FALL, L_FOOD);
			else setAt(p.x, p.y, 'o', FOOD, L_FOOD);
		}
	}

	// Distance from a fin's ellipse centre, in units of its radius (< 1 is inside), or -1 if outside every fin.
	function finAt(k, s, la) {
		for (var i = 0; i < FINS.length; i++) {
			var f = FINS[i];
			var ang = f.spread + Math.sin(k.finPhase + f.s * 3) * f.flap;
			var da = Math.cos(ang), dl = Math.sin(ang);  // tailward and outward
			var qa = s - (f.s + da * f.len * 0.5);
			var ql = la - (bodyHalf(f.s) * 0.85 + dl * f.len * 0.5);
			var along = qa * da + ql * dl, across = ql * da - qa * dl;
			var e = along * along / (f.len * f.len * 0.25) + across * across / (f.wid * f.wid);
			if (e < 1) return e;
		}
		return -1;
	}

	// Adds the side-to-side swimming wave, which grows toward the tail.
	function bendSpine(k, L) {
		var amp = L * 0.05 * (0.2 + 0.8 * Math.min(1.2, k.beat));
		for (var i = 0; i < N; i++) {
			var s = i / (N - 1);
			var j = i === 0 ? 1 : i;
			var tx = k.x[j - 1] - k.x[j], ty = k.y[j - 1] - k.y[j];
			var tl = Math.sqrt(tx * tx + ty * ty) || 1;
			var off = amp * (0.06 + s * s) * Math.sin(k.phase - s * 5.5);
			k.rx[i] = k.x[i] - ty / tl * off;
			k.ry[i] = k.y[i] + tx / tl * off;
		}
	}

	function paintKoiCell(k, c, r, s, u, la, sdc, sdr) {
		if (s <= 0.8) {
			var hw = bodyHalf(s);
			if (la < hw) {
				var shade = 1 - la / hw;
				var lvl = shade < 0.25 ? 0 : shade < 0.5 ? 1 : shade < 0.75 ? 2 : 3;
				setCell(c, r, RAMP[lvl], SKIN[skinAt(k, s, u * la / hw)][lvl], L_BODY);
				setCell(c + sdc, r + sdr, ':', SHADOW, L_SHADOW);
				return;
			}
		} else {
			var tw = tailHalf(s), v = la / tw;
			// The V notch cuts the middle of the tail's trailing edge.
			if (v < 1 && v >= (s - 0.9) * 5) {
				setCell(c, r, v > 0.7 ? "'" : ':', v > 0.7 ? FIN_EDGE : FIN, L_FIN);
				return;
			}
		}
		if (s > 0.1 && s < 0.65) {
			var e = finAt(k, s, la);
			if (e >= 0) setCell(c, r, e > 0.5 ? '.' : ':', e > 0.5 ? FIN_EDGE : FIN, L_FIN);
		}
	}

	function drawKoi(k) {
		var L = k.lenFrac * size;
		bendSpine(k, L);
		var pad = L * 0.3;
		var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
		var i;
		for (i = 0; i < N; i++) {
			if (k.rx[i] < minX) minX = k.rx[i];
			if (k.rx[i] > maxX) maxX = k.rx[i];
			if (k.ry[i] < minY) minY = k.ry[i];
			if (k.ry[i] > maxY) maxY = k.ry[i];
		}
		var c0 = Math.max(0, Math.floor((minX - pad) / cw)), c1 = Math.min(cols - 1, Math.floor((maxX + pad) / cw));
		var r0 = Math.max(0, Math.floor((minY - pad) / chh)), r1 = Math.min(rows - 1, Math.floor((maxY + pad) / chh));
		var sdc = Math.round(L * 0.04 / cw), sdr = Math.max(1, Math.round(L * 0.05 / chh));

		for (var r = r0; r <= r1; r++) {
			var py = (r + 0.5) * chh;
			for (var c = c0; c <= c1; c++) {
				var px = (c + 0.5) * cw;
				// Nearest point on the spine.
				var best = Infinity, bi = 0, bt = 0;
				for (i = 0; i < N - 1; i++) {
					var ax = k.rx[i], ay = k.ry[i], dx = k.rx[i + 1] - ax, dy = k.ry[i + 1] - ay;
					var t = ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1);
					var tc = t < 0 ? 0 : t > 1 ? 1 : t;
					var qx = ax + dx * tc - px, qy = ay + dy * tc - py;
					var d2 = qx * qx + qy * qy;
					if (d2 < best) { best = d2; bi = i; bt = t; }
				}
				if (best > pad * pad) continue;
				// Only the snout and tail ends may project past the spine; there s leaves [0, 1].
				if (bi > 0 && bt < 0) bt = 0;
				if (bi < N - 2 && bt > 1) bt = 1;
				var s = (bi + bt) / (N - 1);
				if (s < 0 || s > 1) continue;
				var sx = k.rx[bi + 1] - k.rx[bi], sy = k.ry[bi + 1] - k.ry[bi];
				var side = sx * (py - k.ry[bi]) - sy * (px - k.rx[bi]) < 0 ? -1 : 1;
				paintKoiCell(k, c, r, s, side, Math.sqrt(best) / L, sdc, sdr);
			}
		}

		// Eyes, either side of the head.
		var fe = 0.075 * (N - 1), ie = Math.floor(fe), te = fe - ie;
		var exx = k.rx[ie] + (k.rx[ie + 1] - k.rx[ie]) * te;
		var eyy = k.ry[ie] + (k.ry[ie + 1] - k.ry[ie]) * te;
		var tx = k.rx[ie] - k.rx[ie + 1], ty = k.ry[ie] - k.ry[ie + 1];
		var tl = Math.sqrt(tx * tx + ty * ty) || 1;
		var off = bodyHalf(0.075) * L * 0.6 / tl;
		setAt(exx - ty * off, eyy + tx * off, 'o', EYE, L_EYE);
		setAt(exx + ty * off, eyy - tx * off, 'o', EYE, L_EYE);
	}

	function draw() {
		gLay.fill(0);
		drawWater();
		drawRipples();
		drawKoi(koi[0]);
		drawKoi(koi[1]);
		drawPellets();
		flush();
	}

	// ---- setup ----

	function resize() {
		var w = canvas.clientWidth;
		if (!w || w === size) return;
		var scale = size ? w / size : 1;
		size = w;
		dpr = Math.min(window.devicePixelRatio || 1, 2);
		canvas.width = Math.round(size * dpr);
		canvas.height = Math.round(size * dpr);

		cw = clamp(size / 80, 4.5, 7);
		var fontPx = cw / 0.6;  // monospace glyphs are about 0.6em wide
		chh = fontPx * 0.95;
		cols = Math.ceil(size / cw);
		rows = Math.ceil(size / chh);
		gChar = new Array(cols * rows);
		gCol = new Uint8Array(cols * rows);
		gLay = new Uint8Array(cols * rows);

		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.font = 'bold ' + fontPx.toFixed(1) + 'px ' + FONT_STACK;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		if (!koi) {
			koi = [
				makeKoi(0.34, size * 0.3, size * 0.35, Math.random() * Math.PI * 2, 'white'),
				makeKoi(0.3, size * 0.7, size * 0.68, Math.random() * Math.PI * 2, 'red')
			];
			return;
		}
		var i, j;
		for (i = 0; i < koi.length; i++) {
			for (j = 0; j < N; j++) { koi[i].x[j] *= scale; koi[i].y[j] *= scale; }
		}
		for (i = 0; i < pellets.length; i++) { pellets[i].x *= scale; pellets[i].y *= scale; }
		ripples.length = 0;
		if (reduce) draw();
	}

	resize();
	if (!koi) return;

	if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
	else window.addEventListener('resize', resize);

	if (reduce) {
		// A still pond: let the koi settle into a natural pose, then draw once.
		canvas.classList.add('is-static');
		for (var i = 0; i < 240; i++) step(1 / FPS);
		draw();
		return;
	}

	canvas.addEventListener('click', function (e) {
		var rect = canvas.getBoundingClientRect();
		feed(e.clientX - rect.left - canvas.clientLeft, e.clientY - rect.top - canvas.clientTop);
	});

	var visible = true;
	if ('IntersectionObserver' in window) {
		new IntersectionObserver(function (entries) {
			visible = entries[0].isIntersecting;
		}).observe(canvas);
	}

	var last = 0;
	function frame(ts) {
		requestAnimationFrame(frame);
		if (!visible) { last = 0; return; }
		if (last && ts - last < 1000 / FPS - 4) return;
		var dt = last ? Math.min(0.1, (ts - last) / 1000) : 1 / FPS;
		last = ts;
		step(dt);
		draw();
	}
	requestAnimationFrame(frame);
})();
