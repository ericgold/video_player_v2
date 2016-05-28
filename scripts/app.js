var video = document.getElementById('video');
//var videoControls = document.getElementById('video-controls');
//var controlsButtons = document.getElementById('controls-buttons');
var progress = document.getElementById('progress');
var progressbar = document.getElementById('progress-bar');
var playpause = document.getElementById('playpause');
var cc = document.getElementById('cc');
var volume = document.getElementById('volume');
var volumeslider = document.getElementById('volumeslider');
var fullscreen = document.getElementById('fullscreen');
var timer = document.getElementById('timer');
var endTime = document.getElementById('end-time');
var captionTrack = document.getElementsByTagName('track');
var caption = document.getElementsByClassName('caption');




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

// *** VOLUME SLIDER ***

function setVolume() {
	video.volume = volumeslider.value / 100;
}

volumeslider.addEventListener('click', setVolume);

// *** PROGRESS BAR *** 

function progressPopulate() {
	var videoTime = ((video.currentTime / video.duration) * 100);
	progress.value = videoTime;
	progressbar.innerHTML = videoTime;
}

video.addEventListener('playing', setInterval(progressPopulate, 100));




// *** TIMER ***

//function on 200 ms interval, calculate mins and secs
//and display in html element as MM:SS

function showTimer() {
	var playedMinutes = parseInt(video.currentTime / 60, 10);
	var playedSeconds = parseInt(video.currentTime % 60);
	//tests to add leading 0 to short times
	if (playedMinutes < 10) {
		playedMinutes = "0" + playedMinutes;
	};
	if (playedSeconds < 10) {
		playedSeconds = "0" + playedSeconds;
	};
	timer.innerHTML = playedMinutes + ":" + playedSeconds;
}

video.addEventListener('canplay', setInterval(showTimer, 1000));



// *** VIDEO LENGTH DISPLAY *** //

function showLength() {
	var totalMinutes = parseInt(video.duration / 60, 10);
	var totalSeconds = parseInt(video.duration % 60);
	//tests to add leading 0 to short times
	if (totalMinutes < 10) {
		totalMinutes = "0" + totalMinutes;
	};
	if (totalSeconds < 10) {
		totalSeconds = "0" + totalSeconds;
	};
	endTime.innerHTML = "\/" + totalMinutes + ":" + totalSeconds;
}

video.addEventListener('canplay', showLength);


// *** CLOSED CAPTIONING BUTTON ***

function toggleCaptions() {
	if (video.textTracks[0].mode === "showing") {
		video.textTracks[0].mode = "hidden";
	} else if (video.textTracks[0].mode === "hidden") {
		video.textTracks[0].mode = "showing";
	}
}

cc.addEventListener('click', toggleCaptions);

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


// *** PROGRESS BAR CLICK ***
/*
function convertPercent() {
	var progressPercent = Math.floor(this/100);

}

function goToTime() {
	var gothere = video.duration * (progressbar.value / 100);
	video.currentTime = gothere;
}

progress.addEventListener("click", goToTime);
*/

// *** HIGHLIGHTING CAPTIONS *** 
function highlighter() {
	for (var i = 0; i < caption.length; i++) {
		if (video.currentTime >= caption[i].getAttribute('data-start')
			&& video.currentTime <= caption[i].getAttribute('data-end')) {
			caption[i].classList.add("highlight");
		} else if (video.currentTime >= caption[i].getAttribute('data-end')
			|| video.currentTime <= caption[i].getAttribute('data-start')) {
			caption[i].classList.remove("highlight");
		}
	}; 
}

video.addEventListener("playing", setInterval(highlighter, 100));


//event listener on spans in captions
	//if currentTime is greater than starttime 
	//and less than end time 
	//caption gets class
//class should change background color of the span


// *** CAPTION CLICK NAVIGATION ***

function captionJump() {
	var startTime = this.getAttribute('data-start');
	video.currentTime = startTime;
}

for (var i = 0; i < caption.length; i++) {
	caption[i].addEventListener("click", captionJump);
}







