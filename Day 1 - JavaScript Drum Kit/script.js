function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(e)
    if(!audio) return;
    keys.forEach(key=>key.classList.remove('playing'))
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
}
function endTransition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('playing');
}

const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',endTransition));
window.addEventListener('keydown',playSound);