const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stopit = document.getElementById('stop');
const heading = document.getElementById('heading');
const reset = document.getElementById('reset');
const alarm  = new Audio('alarm_sound.wav');
let interval = null;

start.addEventListener('click', ()=>{
    start.style.display="none";
    stopit.style.width = "250px";
    if (interval == null){
        interval = setInterval( function (){
            let [hours,minutes,seconds] = timer.innerHTML.split(":").map(Number);
            if (hours === 0 && minutes === 0 && seconds === 0) {
                reset.style.display = "flex";
                heading.innerHTML="Drink water";
                alarm.play();
                clearInterval(interval);
                interval = null;
                start.style.display = "inline-block";
                stopit.style.width = "120px";
                return;
            }
            if (seconds === 0){
                if (minutes === 0) {
                    hours = hours-1;
                    minutes = 59;
                    seconds =59;
                }
                else{
                minutes -=1;
                seconds = 59;
                }
            }
            else {
                seconds --;
            }
            timer.innerHTML = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    }
    , 1000);
    }
});

stopit.addEventListener('click', ()=>{
    stopit.style.width = "120px";
    start.style.display="inline-block";
    start.innerHTML='Resume';
    clearInterval(interval);
    interval=null;
});

reset.addEventListener('click', ()=>{
    timer.innerHTML="02:00:00";
    heading.innerHTML = "Hydrate Alarm";
    reset.style.display = "none";
});