var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');
var progress = document.getElementById('progress');
var progressbar = document.getElementById('progress-bar');
var playpause = document.getElementById('playpause');
var volume = document.getElementById('volume');
var fullscreen = document.getElementById('fullscreen');


// *** PLAYPAUSE BUTTON ***

//styles playpause button to pause state
function pauseIcon() {
	playpause.style.width = "18px";
	playpause.style.height = "24px";
	playpause.style.background = "url('./icons/pause-icon.png')";
}

//styles playpause button to play state
function playIcon() {
	playpause.style.width = "22px";
	playpause.style.height = "26px";
	playpause.style.background = "url('./icons/play-icon.png')";
}

//playpause button functionality
function playPause() {
	if (video.paused) {
		video.play();
		pauseIcon();
	} else {
		video.pause();
		playIcon();
	}
}

// *** VOLUME BUTTON ***

function onIcon() {
	volume.style.background = "url('./icons/volume-on-icon.png')";
}

function offIcon() {
	volume.style.background = "url('./icons/volume-off-icon.png')";
}

function muteVideo() {
	if (!video.muted) {
		video.muted = true;
		offIcon();
	} else {
		video.muted = false;
		onIcon();
	}
}

playpause.addEventListener("click", playPause);

volume.addEventListener("click", muteVideo);


// *** PROGRESS BAR *** //

video.addEventListener('timeupdate', function() {
	var percent = Math.floor((100 / video.duration) * video.currentTime);
	progress.value = percent;
	progressbar.innerHTML = percent;
	timer.innerHTML = progress.value;
	}, false);

// *** TIMER ***
// get progress.value
// convert seconds to MM:SS format
// display in #timer
// #timer should also display video.duration in MM:SS format

// *** PROGRESS BAR CLICK ***

function goToTime() {
	//gets time of point clicked
	//advances video to that time in the video
}

progress.addEventListener("click", goToTime);

// *** FULLSCREEN BUTTON ***

function fullScreen() {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
}

fullscreen.addEventListener("click", fullScreen);








