



  // window.addEventListener('mouseup', (e) => {
  //   const key = document.querySelector(`.key"${e.attributes["data-key"].value}"`);
  //   // const keyAt = key.attributes[0].value;
  //   // const sound = document.querySelector(`audio[data-key="${keyAt}"]`);
  //   console.log(key);

  //   // if (!sound) return;
  //   // sound.currentTime = 0;
  //   // sound.play();
  //   // key.classList.toggle('playing');
  // });

  function playSound(dataKey) {
    window.addEventListener('keyup', (e) => {
      const key = document.querySelector(`div[data-key="${dataKey}"]`);
      const sound = document.querySelector(`audio[data-key="${dataKey}"]`);
      if (!sound) return;
      sound.currentTime = 0;
      sound.play();
      key.classList.toggle('playing');
    });
    window.addEventListener('keydown', (e) => {
      const key = document.querySelector(`div[data-key="${dataKey}"]`);
      key.classList.toggle('playing')
    }); 
  }

  function handleClick(e) {
    const dataKey = this.getAttribute('data-key');
    playSound(dataKey);
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('click', handleClick);
  });
  window.addEventListener('keydown', handleKeydown);