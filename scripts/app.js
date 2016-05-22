var video = document.getElementById('video');
//var videoControls = document.getElementById('video-controls');
//var controlsButtons = document.getElementById('controls-buttons');
var progress = document.getElementById('progress');
var progressbar = document.getElementById('progress-bar');
var playpause = document.getElementById('playpause');
var volume = document.getElementById('volume');
var fullscreen = document.getElementById('fullscreen');
var timer = document.getElementById('timer');
var endTime = document.getElementById('end-time');



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

/*

// *** PROGRESS BAR CLICK ***

function convertPercent() {
	var progressPercent = Math.floor(this/100);

}

function goToTime() {
	console.log(convertPercent(progress.value));
	//gets time of point clicked
	var clickPoint;
	//advances video to that time in the 
	//currentTime = clickPoint
}

progress.addEventListener("click", goToTime);


// *** HIGHLIGHTING CAPTIONS *** //

//constructor function to create object for each caption?
//object for captions with id, start time, end time
//event listener on spans in captions
	//if currentTime is greater than starttime 
	//and less than end time 
	//caption gets class
//class should change background color of the span

*/

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








