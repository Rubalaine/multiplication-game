let timeLeft = 30;
const container = document.getElementById('cont');
const countdown = ()=>{
    if(timeLeft === -1){
        clearTimeout(timer);
    }else{
        container.innerHTML = timeLeft + ' Seconds Left';
        timeLeft--;
    }
}
const timer  = setInterval(countdown, 1000);

const start = document.getElementById('start');
start.addEventListener('click', event=>{
    event.preventDefault();
    clearTimeout(timer);
    setInterval(countdown, 1000);
})