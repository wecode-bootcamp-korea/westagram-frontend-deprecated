const loginID = document.querySelector('.login-id')
const loginPW = document.querySelector('.login-pw')
const loginBT = document.querySelector('.login-button')

function activateLoginBtn(){
 const isButtonActive = loginID.value.length > 1 || loginPW.value.length > 1
    ? loginBT.style.backgroundColor = "blue"
    :loginBT.style.backgroundColor = "#C4E0FB"
}

document.addEventListener('keyup',activateLoginBtn)