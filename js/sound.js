var audio = document.getElementsByClassName('p-sketch-outline')[0];
var body = document.getElementsByTagName('body')[0];

audio.addEventListener(
  'playing',
  function () {
    audio.classList.toggle('hidden');
    audio.classList.toggle('visible');
    goFullscreen();
  },
  true
);

body.addEventListener(
  'click',
  function () {
    audio.classList.toggle('hidden');
    audio.classList.toggle('visible');
  },
  true
);

function goFullscreen() {
  document.body
    .requestFullscreen()
    .then(() => screen.orientation.lock('landscape'));
}
