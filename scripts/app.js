var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');
var progress = document.getElementById('progress');
var progressbar = document.getElementById('progress-bar');
var playpause = document.getElementById('playpause');
var volume = document.getElementById('volume');
var fullscreen = document.getElementById('fullscreen');
var timer = document.getElementById('timer');
var duration = document.getElementById('duration');

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
	}, false);



// *** TIMER ***

// get currentTime
// convert to MM:SS format
function convertSecs() {
	//var minutes = this / 60;
	//var seconds = this % 60;
}

//updates the counter
function timerUpdate() {
	var counter = minutes + ":" + seconds;
}

function timerDisplay() {
	//displays counter in #timer, 
	//followed by video.duration in same MM:SS format
}

//event listener to run above functions when video time is updated
video.addEventListener('timeupdate', function() {
	//timer.innerHTML = convertSecs(this.currentTime);
	timer.innerHTML = this.currentTime;
});

video.addEventListener('canplay', function() {
	duration.innerHTML = "/" + video.duration;
});



// *** PROGRESS BAR CLICK ***

function goToTime() {
	console.log(progress.value);
	//gets time of point clicked
	var clickPoint;
	//advances video to that time in the 
	//currentTime = clickPoint
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








