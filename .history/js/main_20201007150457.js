  window.addEventListener('keydown', (e) => {
    document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing');
    document.querySelector(`audio[data-key="${e.keyCode}"]`).play();
  });
  window.addEventListener('keyup', (e) => document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing')); 

  

  $(".key").click(function(e) {
    const audio = document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
    console.log(audio);
    audio.play();
    // or using jQuery
    // const audio = $(`audio[data-key="${$(this).attr('data-key')');
    // audio[0].play();
  
  });