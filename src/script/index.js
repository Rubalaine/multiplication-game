import {message, showScore, resetMessage} from './message';
const wrongAnswerSound = document.getElementById('wrongSong');
const rightAnswerSound = document.getElementById('rightSong');

let timeLeft = 11;
let isPlaying = false;
let score;
let action;
let correctAnswer;

// const correctAnswer;
const timerBoard = document.getElementById('cont');
const scoreBoard = document.getElementById('score');
const contestBoard = document.getElementById('contest');
const options = document.querySelectorAll('.options');

const start = document.getElementById('start');
if (start){
    start.addEventListener('click', event=>{
        event.preventDefault();
        if (isPlaying === true)
            location.reload();
        else{
            start.innerText = 'New Game';
            resetMessage();
            isPlaying = true;
            score = 0;
            scoreBoard.innerText = `Score: ${score}`;
            generateQuestion();
            startCountdown();
            
        }
    })
}
const generateQuestion = ()=>{
    let randomNumber1 = Math.floor(Math.random()*10)+1;
    let randomNumber2 = Math.floor(Math.random()*10)+1;
    
    contestBoard.innerText = `${randomNumber1} X ${randomNumber2}`;
    correctAnswer = randomNumber1 * randomNumber2;
    
    let answerOption = Math.floor(Math.random()*4)+1;
    document.getElementById(`option-${answerOption}`).innerText = correctAnswer;
    
    const answers = [correctAnswer];
    
    for(let i = 1; i < 5; i++){
        if(i!=answerOption){
            let wrongAnswer;
            
            do {
                wrongAnswer =  (Math.floor(Math.random()*10)+1) + (Math.floor(Math.random()*10)+1);
            } while (answers.includes(wrongAnswer));
            document.getElementById(`option-${i}`).innerText = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
    
    
}
const startCountdown = ()=>{
    action = setInterval(()=>{
        timeLeft -=1;
        timerBoard.innerText = ` ${timeLeft} Seconds Left`
        if(timeLeft === 0){
            isPlaying = false;
            stopCountdown();
            timerBoard.innerText = `time is over`;
            showScore(score);
        }
    }, 1000)
    
}
const stopCountdown = ()=>{
    clearInterval(action);
    timeLeft = 11;
}
if(options)
options.forEach(option =>{
    option.addEventListener('click', event=>{
        event.preventDefault();
        if(isPlaying === true){
            if(option.innerText == correctAnswer){
                stopCountdown();
                startCountdown();
                score++;
                rightAnswerSound.play();
                scoreBoard.innerText = `Score: ${score}`;
                message('right');
                generateQuestion(); 
            }
            else{
                // message('wrong');
                wrongAnswerSound.play();
                isPlaying = false;
                stopCountdown();
                timerBoard.innerText = `your game is over`;
                showScore(score);
                // generateQuestion();
            }
        }
        
    })
})