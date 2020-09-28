const messageBox = document.getElementById('message');

export const message = (color)=>{
    const messagePlace = document.getElementById('message-text');
    if(color==='right')
        messagePlace.innerText = 'Right answer';
    else
        messagePlace.innerText = 'Wrong answer';
    showMessage();
    setTimeout(()=>{ 
        hideMessage();
    }, 1000)
}
const showMessage = ()=>{

    messageBox.classList.add(`message--${color}`);
    messageBox.style.display = 'block';
}
const hideMessage = ()=>{
    messageBox.style.display = 'none';
}