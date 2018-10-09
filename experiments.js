document.getElementById('clap').addEventListener('click', function() {
	const clapAudio = document.getElementById('clap-sound');
	clapAudio.currentTime = 0;
	clapAudio.play();
});

document.getElementById('hihat').addEventListener('click', function() {
	const hihatAudio = document.getElementById('hihat-sound');
	hihatAudio.currentTime = 0;
	hihatAudio.play();
});

document.getElementById('kick').addEventListener('click', function() {
	const kickAudio = document.getElementById('kick-sound');
	kickAudio.currentTime = 0;
	kickAudio.play();
});

document.getElementById('openhat').addEventListener('click', function() {
	const openhatAudio = document.getElementById('openhat-sound');
	openhatAudio.currentTime = 0;
	openhatAudio.play();
});

document.getElementById('boom').addEventListener('click', function() {
	const boomAudio = document.getElementById('boom-sound');
	boomAudio.currentTime = 0;
	boomAudio.play();
});

document.getElementById('ride').addEventListener('click', function() {
	const rideAudio = document.getElementById('ride-sound');
	rideAudio.currentTime = 0;
	rideAudio.play();
});

document.getElementById('snare').addEventListener('click', function() {
	const snareAudio = document.getElementById('snare-sound');
	snareAudio.currentTime = 0;
	snareAudio.play();
});

document.getElementById('tink').addEventListener('click', function() {
	const tinkAudio = document.getElementById('tink-sound');
	tinkAudio.currentTime = 0;
	tinkAudio.play();
});
// Add Class
function addTransition() {
	this.classList.add('playing');
}

const keysstart = document.querySelectorAll('.key');
keysstart.forEach(key => key.addEventListener('click', addTransition));

// Remove Class
function removeTransition() {
	this.classList.remove('playing');
}
const keysend = document.querySelectorAll('.key');
keysend.forEach(key => key.addEventListener('transitionend', removeTransition));
