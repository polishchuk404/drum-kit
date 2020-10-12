function playSound(dataKey) {
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  const key = document.querySelector(`.key[data-key="${dataKey}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle('playing');
}

function handleClick(e) {
  const dataKey = this.getAttribute('data-key');
  playSound(dataKey);
}

