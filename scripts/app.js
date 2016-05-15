//checks to see if the browser supports the <video> element

//var supportsVideo = !!document.createElement('video').canPlayType;

//if (supportsVideo) {

//}



	//var videoContainer = document.getElementById('videoContainer'); not in markup yet
	var video = document.getElementById('video');
	var videoControls = document.getElementById('video-controls');

	//hide default controls
	video.controls = false;

	//display custom controls
	videoControls.style.display = 'block';

	var playpause = document.getElementById('playpause');
	var volume = document.getElementById('volume');
	var progress = document.getElementById('progress');
	var progressBar = document.getElementById('progress-bar');
	var fullscreen = document.getElementById('fullscreen');

	playpause.addEventListener('click', function(e) {
		if (video.paused || video.ended) video.play();
		else video.pause();
	});

	mute.addEventListener('click', function(e) {
		video.muted = !video.muted;
	});





