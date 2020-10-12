  window.addEventListener('keydown', (e) => {
    document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing');
    document.querySelector(`audio[data-key="${e.keyCode}"]`).play();
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); 
  });
  window.addEventListener('keyup', (e) => document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing')); 

  

  