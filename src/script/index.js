let timeLeft = 30;
let isPlaying = false;
let score;
let timeRemaining;
let action;
// const correctAnswer;
const timerBoard = document.getElementById('cont');
const scoreBoard = document.getElementById('score');
const contestBoard = document.getElementById('contest');
const count = document.getElementById('count');
const countShow = document.getElementById('count-show');

const start = document.getElementById('start');
start.addEventListener('click', event=>{
    event.preventDefault();
    if (isPlaying === true)
    location.reload();
    else{
        isPlaying = true;
        score = 0;
        scoreBoard.innerText = `Score: ${score}`;
        generateQuestion();
        startCountdown();
        
    }
})

const generateQuestion = ()=>{
    let randomNumber1 = Math.floor(Math.random()*10)+1;
    let randomNumber2 = Math.floor(Math.random()*10)+1;
    contestBoard.innerText = `${randomNumber1} X ${randomNumber2}`

}
const startCountdown = ()=>{
    action = setInterval(()=>{
        timeLeft -=1;
        timerBoard.innerText = ` ${timeLeft} Seconds Left`
        if(timeLeft === 0){
            stopCountdown();
            isPlaying = false;
            timerBoard.innerText = `time is over`;
        }
    }, 1000)
    
}
const stopCountdown = ()=>{
    clearInterval(action);
}
