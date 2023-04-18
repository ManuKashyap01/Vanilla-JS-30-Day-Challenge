const secHand=document.querySelector('.second');
const minHand=document.querySelector('.minute');
const hourHand=document.querySelector('.hour');
function setTime(){
    const now=new Date();

     const seconds=now.getSeconds();
     const secDeg=((seconds/60)*360)+90;
     secHand.style.transform=`rotate(${secDeg}deg)`;

     
     const minutes=now.getMinutes();
     const minDeg=((minutes/60)*360)+90;
     minHand.style.transform=`rotate(${minDeg}deg)`;

     
     const hours=now.getHours();
     const hourDeg=((hours/12)*360)+90;
     hourHand.style.transform=`rotate(${hourDeg}deg)`;
     console.log({seconds,minutes,hours});
}
setInterval(setTime,1000); //we are calling the setTime function after 1 second of interval and update the clock accordingly