
  window.addEventListener('keyup', (e) => {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.toggle('playing');
  });
  window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.toggle('playing')
  }); 

  window.addEventListener('mouseup', (e) => {
    const dataKey = this.getAttribute('data-key');

    // const sound = document.querySelector(`audio[data-key="${keyAt}"]`);
    console.log(dataKey);

    // if (!sound) return;
    // sound.currentTime = 0;
    // sound.play();
    // key.classList.toggle('playing');
  });
  