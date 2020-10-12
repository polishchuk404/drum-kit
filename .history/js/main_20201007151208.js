  window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing');
    key.click().classList.toggle('playing');
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
  });
  window.addEventListener('keyup', (e) => document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing')); 

  

  