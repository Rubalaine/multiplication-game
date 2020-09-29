const messageBox = document.getElementById('message');
const messagePlace = document.getElementById('message-text');
export const resetMessage = ()=>{
    messageBox.style.display = 'none';
    messageBox.classList.remove(`message--end`);
}
export const message = (color)=>{
    if(color==='right')
        messagePlace.innerText = 'Right answer';
    else
        messagePlace.innerText = 'Wrong answer';
    showMessage(color);
    setTimeout(()=>{ 
        hideMessage(color);
    }, 1000)
}
const showMessage = (color)=>{
    messageBox.classList.add(`message--${color}`);
    messageBox.style.display = 'block';
}
const hideMessage = (color)=>{
    messageBox.style.display = 'none';
    messageBox.classList.remove(`message--${color}`);
}

export const showScore = (score)=>{
    messagePlace.innerText =   `your score is ${score}`;
    messageBox.classList.add('message--end');
    messageBox.style.display = 'block';
}