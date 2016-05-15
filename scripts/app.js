var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');

var playpause = document.getElementById('playpause');
var volume = document.getElementById('volume');
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');
var fullscreen = document.getElementById('fullscreen');

function playPause() {
	if (video.paused) {
		console.log("play");
		video.play();
	} else {
		console.log("pause");
		video.pause();
	}
}

function muteVideo() {
	console.log("mute");
	video.muted();
}

playpause.addEventListener("click", playPause);

volume.addEventListener("click", muteVideo);












