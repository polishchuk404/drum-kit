function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSound(dataKey) {
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  const key = document.querySelector(`.key[data-key="${dataKey}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function handleKeydown(event) {
  const keyCode = event.which || event.keyCode;
  playSound(keyCode);
}

function handleClick(e) {
  const dataKey = this.getAttribute('data-key');
  playSound(dataKey);
}

window.addEventListener('keydown', handleKeydown);