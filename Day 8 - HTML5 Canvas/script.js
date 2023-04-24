const canvas=document.querySelector('#canvas')
const brush=document.querySelector('.brush')
const erase=document.querySelector('.erase')
const ctx=canvas.getContext('2d')
// ctx.strokeStyle=""
canvas.width=window.innerWidth-50;
canvas.height=window.innerHeight-80;
ctx.lineJoin='round';
ctx.lineCap='round';
let lastX=0;
let lastY=0;
let isDrawing=false;
let isRemove=false;
ctx.lineWidth=10;
let isInc=true;
let hue=0;
function Draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle=`hsl(${hue},100%,50%)`
    if(isRemove) {
        ctx.strokeStyle='#fff'
    }
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY]=[e.offsetX,e.offsetY];
    hue++;
    if(ctx.lineWidth>=75 || ctx.lineWidth<=1){
        isInc=!isInc;
    }
    if(isRemove) ctx.lineWidth=50
    else if(isInc) ctx.lineWidth++;
    else ctx.lineWidth--;
}
brush.addEventListener('click',()=>{
    isRemove=false
    console.log('brush')
})
erase.addEventListener('click',()=>{
    isRemove=true
    console.log('erase')
})
window.addEventListener('mousedown',(e)=>{
    [lastX,lastY]=[e.offsetX,e.offsetY];
    isDrawing=true;
})
window.addEventListener('mousemove',Draw)
window.addEventListener('mouseup',()=>isDrawing=false)
window.addEventListener('mouseout',()=>isDrawing=false)