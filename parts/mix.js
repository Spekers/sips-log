// Fills the phone's/car's "Now Playing" info with the mix cover, mix title and
// current track. The audio plays inside Mixcloud's cross-origin iframe, so
// browsers would show Mixcloud's info. Browsers take the metadata from the
// top-most frame that is playing media, so we loop a silent clip on this page
// while the mix plays.
(function () {
	const iframe = document.querySelector(".mix-embed");
	if (!iframe || !window.Mixcloud || !("mediaSession" in navigator)) return;

	const mixTitle = document.querySelector(".mix-page .title-bar-text").textContent.trim();
	const cover = document.querySelector(".mix-page img.cover").src;

	const tracks = Array.from(document.querySelectorAll(".tracklist li")).map((li) => {
		const [ts, name] = li.querySelectorAll("span");
		const start = ts.textContent.split(":").reduce((acc, n) => acc * 60 + Number(n), 0);
		return { start, name: name.textContent.trim() };
	});

	// Chrome ignores media shorter than 5 seconds, so make the clip longer.
	function silentWav(seconds) {
		const rate = 8000;
		const n = rate * seconds;
		const buf = new ArrayBuffer(44 + n);
		const v = new DataView(buf);
		const str = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
		str(0, "RIFF"); v.setUint32(4, 36 + n, true); str(8, "WAVE");
		str(12, "fmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
		v.setUint32(24, rate, true); v.setUint32(28, rate, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true);
		str(36, "data"); v.setUint32(40, n, true);
		new Uint8Array(buf, 44).fill(128);
		return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
	}

	const silence = new Audio(silentWav(10));
	silence.loop = true;

	let playing = false;
	let position = 0;
	let duration = 0;
	let currentTrack = -2;

	function startSilence() {
		silence.play().catch(() => {
			// No user activation reached this page (e.g. Safari); retry on the next tap.
			document.addEventListener("pointerdown", () => { if (playing) silence.play().catch(() => {}); }, { once: true });
		});
	}

	function trackAt(pos) {
		let i = -1;
		while (i + 1 < tracks.length && tracks[i + 1].start <= pos) i++;
		return i;
	}

	function updateMetadata() {
		const i = trackAt(position);
		if (i === currentTrack) return;
		currentTrack = i;
		navigator.mediaSession.metadata = new MediaMetadata({
			title: i >= 0 ? tracks[i].name : mixTitle,
			artist: mixTitle,
			album: "Sip’s Log",
			artwork: [{ src: cover, sizes: "1024x1024" }],
		});
	}

	function updatePosition() {
		if (!duration || !navigator.mediaSession.setPositionState) return;
		try {
			navigator.mediaSession.setPositionState({ duration, position: Math.min(position, duration), playbackRate: 1 });
		} catch (e) {}
	}

	const widget = Mixcloud.PlayerWidget(iframe);
	widget.ready.then(() => {
		widget.events.play.on(() => {
			playing = true;
			startSilence();
			updateMetadata();
			navigator.mediaSession.playbackState = "playing";
		});
		widget.events.pause.on(() => {
			playing = false;
			silence.pause();
			navigator.mediaSession.playbackState = "paused";
		});
		widget.events.ended.on(() => {
			playing = false;
			silence.pause();
			navigator.mediaSession.playbackState = "none";
		});
		widget.events.progress.on((pos, dur) => {
			position = pos;
			duration = dur;
			updateMetadata();
			updatePosition();
		});

		const handlers = {
			play: () => { widget.play(); startSilence(); },
			pause: () => widget.pause(),
			seekto: (d) => { widget.seek(d.seekTime); },
			previoustrack: () => {
				const i = trackAt(position);
				// Like a CD player: restart the current track unless we're at its start.
				const target = i >= 0 && position - tracks[i].start > 3 ? i : i - 1;
				widget.seek(target >= 0 ? tracks[target].start : 0);
			},
			nexttrack: () => {
				const next = tracks[trackAt(position) + 1];
				if (next) widget.seek(next.start);
			},
		};
		for (const [action, fn] of Object.entries(handlers)) {
			try { navigator.mediaSession.setActionHandler(action, fn); } catch (e) {}
		}
	});
})();
