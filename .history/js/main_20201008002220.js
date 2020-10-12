//   window.addEventListener('keydown', (e) => {
//     document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing');
//     document.querySelector(`audio[data-key="${e.keyCode}"]`).play();
//   });

//   window.addEventListener('keyup', (e) => document.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle('playing')); 
  
//   $(".key").click(function() {
//     const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
//     console.log(audio);
//     audio.play();
//   });

  
//   $(".key").click(function() {
//     var key = $(this).data('key');
//     var audio = $('audio[data-key='+key+']');
//     audio[0].play();
//    });


// function playSound(e)
// {
//   const key = querySelector('.key');
//   key.click(function(e) {
//   const audio = document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
//   audio.play();
//   });
  
//   const audio = document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
//   audio.play();
// }

$(".key").click(function() {
  var key = $(this).data('key');
  var audio = $('audio[data-key='+key+']');
  audio[0].play();
 });