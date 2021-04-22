const inputId = document.getElementsByClassName("loginId")[0];
const inputPw = document.getElementsByClassName("loginPw")[0];
const loginBtn = document.getElementsByClassName("loginButton")[0];



function active(){
    if(inputId.value && inputPw.value){
    loginBtn.removeAttribute('disabled');
    loginBtn.style.backgroundColor = "rgba(0, 149, 246)";
    }
}

inputId.addEventListener('keyup', active)
inputPw.addEventListener('keyup', active) 