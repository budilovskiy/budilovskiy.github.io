var audio = document.getElementsByTagName('audio')[0];
var playBtn = document.getElementById('playbutton');
var controls = document.getElementById('controls');
var body = document.getElementsByTagName('body')[0];

playBtn.addEventListener('click', playPause, true);
body.addEventListener(
  'touchend',
  function () {
    if (!audio.paused) {
      pause();
    }
  },
  true
);

function playPause() {
  audio.paused ? play() : pause();
}

function play() {
  audio.play();
  toggleHidden(true);
  playBtn.classList.toggle('paused');
  playBtn.classList.toggle('playing');
  goFullscreen(true);
}

function pause() {
  goNormalScreen();
  audio.pause();
  toggleHidden(false);
  playBtn.classList.toggle('paused');
  playBtn.classList.toggle('playing');
}

function toggleHidden(hide) {
  if (hide) {
    !audio.paused && controls.classList.add('hidden');
  } else {
    controls.classList.remove('hidden');
  }
}

function goFullscreen() {
  document.body
    .requestFullscreen()
    .then(() => screen.orientation.lock('landscape'))
    .catch(() => {});
}

function goNormalScreen() {
  document
    .exitFullscreen()
    .then(() => screen.orientation.unlock)
    .catch(() => {});
}
