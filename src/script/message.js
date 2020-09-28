const messageBox = document.getElementById('message');

export const message = (color)=>{
    const messagePlace = document.getElementById('message-text');
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