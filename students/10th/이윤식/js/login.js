const loginID = document.querySelector('.login-id')
const loginPW = document.querySelector('.login-pw')
const loginBT = document.querySelector('.login-button')


function keyupHandler(){
 if(loginID.value.length > 1 || loginPW.value.length > 1){
    loginBT.style.backgroundColor = "blue"
    } else { 
    loginBT.style.backgroundColor = "#C4E0FB"
    }
}


loginID.addEventListener('keyup',keyupHandler)
loginPW.addEventListener('keyup',keyupHandler)
