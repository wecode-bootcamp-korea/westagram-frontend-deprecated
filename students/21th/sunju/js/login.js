const loginId = document.getElementsByClassName('id')[0];
const loginPassword = document.getElementsByClassName('password')[0];
const loginButton = document.getElementsByClassName('button')[0];


function keyUpId(event){
    const inputId = event.target.value;
    inputId!='' && loginPassword.value != '' ? loginButton.disabled = false : loginButton.disabled = true
}

function keyUpPassword(event){
    const inputPassword = event.target.value;
    loginId.value != '' && inputPassword != '' ? loginButton.disabled = false : loginButton.disabled = true
}


loginId.addEventListener('keyup',keyUpId);
loginPassword.addEventListener('keyup',keyUpPassword);