
  // window.addEventListener('keyup', (e) => {
  //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   if (!sound) return;
  //   sound.currentTime = 0;
  //   sound.play();
  //   key.classList.toggle('playing');
  // });
  // window.addEventListener('keydown', (e) => {
  //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   key.classList.toggle('playing')
  // }); 

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

  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    key.addEventListener('transition', removeTransition);
    key.addEventListener('click', handleClick);
  });
  window.addEventListener('keydown', handleKeydown);