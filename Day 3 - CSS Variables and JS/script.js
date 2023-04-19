const inputs=document.querySelectorAll('.controls input')
function update(){
    console.log(this.value)
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
    console.log(document.documentElement.style.getPropertyValue(`--${this.name}`))
}
inputs.forEach(input => input.addEventListener('change',update));
// input value is same until change event is triggered
inputs.forEach(input => input.addEventListener('mousemove',update));