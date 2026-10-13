(function () {
	var pile = document.querySelector('.pile');
	if (!pile || !window.Matter) return;

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce) return;

	var Engine = Matter.Engine, Bodies = Matter.Bodies, Body = Matter.Body;
	var Composite = Matter.Composite, Constraint = Matter.Constraint;

	var DRAG_THRESHOLD = 5;  // px moved before a press counts as a drag, not a click
	var STEP = 1000 / 120;
	var WALL = 200;          // wall thickness, generous so fast throws can't tunnel through

	pile.classList.add('is-live');

	var W = 0, H = 0;
	var engine = Engine.create({ gravity: { y: 1.4 }, positionIterations: 10, velocityIterations: 8 });
	var world = engine.world;
	var walls = [];

	// Walls reach far above the box so icons thrown upward fall back in.
	function placeWalls() {
		W = pile.clientWidth;
		H = pile.clientHeight;
		var tall = H * 6;
		Composite.remove(world, walls);
		walls = [
			Bodies.rectangle(W / 2, H + WALL / 2, W + WALL * 2, WALL, { isStatic: true }),
			Bodies.rectangle(-WALL / 2, H - tall / 2, WALL, tall, { isStatic: true }),
			Bodies.rectangle(W + WALL / 2, H - tall / 2, WALL, tall, { isStatic: true })
		];
		Composite.add(world, walls);
	}
	placeWalls();

	var items = [];
	var els = pile.querySelectorAll('.pile-item');
	for (var i = 0; i < els.length; i++) {
		var el = els[i];
		var w = el.offsetWidth, h = el.offsetHeight;
		var body = Bodies.rectangle(
			W / 2 + (Math.random() - 0.5) * Math.min(W - w, 200),
			-h - i * h * 1.3 - Math.random() * 40,
			w, h,
			{ restitution: 0.35, friction: 0.6, frictionAir: 0.01 }
		);
		Body.setAngle(body, (Math.random() - 0.5) * 0.8);
		Body.setVelocity(body, { x: (Math.random() - 0.5) * 3, y: 0 });
		Composite.add(world, body);
		items.push({ el: el, body: body, w: w, h: h });
		el.draggable = false;
		var img = el.querySelector('img');
		if (img) img.draggable = false;
	}

	var drag = null;

	function itemFor(el) {
		for (var i = 0; i < items.length; i++) if (items[i].el === el) return items[i];
		return null;
	}

	function localPoint(e) {
		var rect = pile.getBoundingClientRect();
		return { x: e.clientX - rect.left, y: e.clientY - rect.top };
	}

	pile.addEventListener('pointerdown', function (e) {
		var el = e.target.closest('.pile-item');
		if (!el || e.button !== 0) return;
		var item = itemFor(el);
		var p = localPoint(e);
		// Hold the icon by the spot that was grabbed, so it swings like a real object.
		var spring = Constraint.create({
			pointA: { x: p.x, y: p.y },
			bodyB: item.body,
			pointB: { x: p.x - item.body.position.x, y: p.y - item.body.position.y },
			length: 0,
			stiffness: 0.2,
			damping: 0.1
		});
		Composite.add(world, spring);
		drag = { item: item, spring: spring, id: e.pointerId, startX: p.x, startY: p.y, moved: false };
		el.setPointerCapture(e.pointerId);
		el.classList.add('is-held');
		e.preventDefault();
	});

	pile.addEventListener('pointermove', function (e) {
		if (!drag || e.pointerId !== drag.id) return;
		var p = localPoint(e);
		if (!drag.moved && Math.hypot(p.x - drag.startX, p.y - drag.startY) > DRAG_THRESHOLD) drag.moved = true;
		drag.spring.pointA.x = Math.min(Math.max(p.x, 0), W);
		drag.spring.pointA.y = Math.min(p.y, H);
	});

	function release(e) {
		if (!drag || e.pointerId !== drag.id) return;
		Composite.remove(world, drag.spring);
		drag.item.el.classList.remove('is-held');
		drag.item.el.dataset.dragged = drag.moved ? '1' : '';
		drag = null;
	}
	pile.addEventListener('pointerup', release);
	pile.addEventListener('pointercancel', release);

	pile.addEventListener('click', function (e) {
		var el = e.target.closest('.pile-item');
		if (el && el.dataset.dragged) {
			e.preventDefault();
			el.dataset.dragged = '';
		}
	});

	function render() {
		for (var i = 0; i < items.length; i++) {
			var it = items[i], b = it.body;
			it.el.style.transform = 'translate(' + (b.position.x - it.w / 2) + 'px,' + (b.position.y - it.h / 2) + 'px) rotate(' + b.angle + 'rad)';
		}
	}

	var last = 0, acc = 0, running = false;
	function frame(t) {
		if (!running) return;
		if (last) acc += Math.min(50, t - last);
		last = t;
		while (acc >= STEP) {
			Engine.update(engine, STEP);
			acc -= STEP;
		}
		render();
		requestAnimationFrame(frame);
	}

	function start() {
		if (running) return;
		running = true;
		last = 0;
		requestAnimationFrame(frame);
	}
	function stop() { running = false; }

	render();
	window.addEventListener('resize', placeWalls);

	// Only simulate (and drop the pile) once it scrolls into view.
	if ('IntersectionObserver' in window) {
		new IntersectionObserver(function (entries) {
			entries[0].isIntersecting ? start() : stop();
		}).observe(pile);
	} else {
		start();
	}
})();
