
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
    const key = document.querySelector(`.key`);
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.click(key.dataset.key);
    console.log(key);

    // .classList.toggle('playing');
    // sound.play();
	});






// window.onload = function(){

// 	generateBlocks();

// 	document.addEventListener('keydown', (evnt)=>{ playMusic(evnt)});

// 	document.addEventListener('keyup', (evnt)=>{delSelect(evnt)});


// 	//adding listener to on click to div>span+kbd with attr [name]
// 	document.addEventListener('mousedown', (evnt)=>{
// 		//console.log('tag',event.target.tagName);

// 		//let selElement = event.target.tagName;

// 		if(evnt.target.getAttribute("name")){
// 			//console.log('key-', evnt.target.getAttribute("name"));
// 			let selectedKey = evnt.target.getAttribute("name");
			
// 			let selectAudio = document.querySelector(`audio[data-key=${selectedKey}]`);

// 			let selectedDiv=document.querySelector(`div[name=${selectedKey}]`);
// 			selectedDiv.classList.add('selected');
			
// 			selectAudio.currentTime = 0;
// 			selectAudio.play();
// 		}
// 		//console.log(evnt.target.getAttributeNames())
// 	});



// 	document.addEventListener('mouseup', (evnt)=>{
// 		let allDivs = document.querySelectorAll('div.row>div');
// 		//console.log(allDivs);
// 		//bad Practice!! remove selected class from all div's
// 		allDivs.forEach((el)=> el.classList.remove('selected'));
// 	});


// 	function delSelect(evnt){
// 		//get btn unpressed 
// 		let btnKey = evnt.code.replace('Key','').toLowerCase();
// 		let selectedDiv=document.querySelector(`div[name=${btnKey}]`);
// 		//console.log(selectedDiv.className);
// 		selectedDiv.className =	selectedDiv.className.replace(' selected','');
// 	}

// 	function playMusic( evnt ){
		
// 		//console.log('key=',evnt.code.replace('Key','').toLowerCase());
		
// 		//get btn pressed 
// 		let btnKey = evnt.code.replace('Key','').toLowerCase();

// 		let selectAudio=document.querySelector(`audio[data-key=${btnKey}]`);

// 		let selectedDiv=document.querySelector(`div[name=${btnKey}]`);

// 		//console.log(selectAudio);
// 		selectAudio.currentTime = 0;
// 		selectAudio.play();

// 		//console.log(evnt);

// 		selectedDiv.className += ' selected'

// 		//get music val obj
// 		//console.log(someObj[btnKey]);

//   	}
// }
  