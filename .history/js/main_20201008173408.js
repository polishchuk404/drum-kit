
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

  // });
  

  // document.addEventListener("keydown", function(event) {
  //   document.getElementById(event.code).play();
  // });
  document.addEventListener("click", function(event) {
    const key = event.document.querySelector(`div[data-key]`);
    console.log(key);
    // + event.target.id).play()
  });