/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let volumeBtn=document.getElementById("volumebtn");
let time=0;
toggle.addEventListener("click",()=>{
	if(video.paused || video.ended){
		video.play();
		toggle.textContent="❚ ❚"
	}
	else{
		video.pause();
		toggle.textContent="►"
	}
})

volumeBtn.addEventListener("input",()=>{
	video.volume=volumeBtn.value;
})

video.addEventListener("loadedmetadata",()=>{
	 time=parseInt(video.duration);

})

video.addEventListener("timeupdate",()=>{
    progressBar.style.flexBasis=video.currentTime+"px";
	console.log(video.curre);
	
})