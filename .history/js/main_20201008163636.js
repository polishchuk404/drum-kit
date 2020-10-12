function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.toggle('playing');
}

function playSound(dataKey) {
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  const key = document.querySelector(`.key[data-key="${dataKey}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle('playing');
}

function handleKeydown(event) {
  const keyCode = event.which || event.keyCode;
  playSound(keyCode);
}

function handleClick(e) {
  const dataKey = this.getAttribute('data-key');
  playSound(dataKey);
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', handleClick);
});
window.addEventListener('keydown', handleKeydown);