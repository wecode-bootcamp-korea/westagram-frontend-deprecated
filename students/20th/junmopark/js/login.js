const inputID = document.getElementsByClassName("inputID")[0];
const inputPW = document.getElementsByClassName("inputPW")[0];
const loginBtn = document.getElementsByClassName("loginBtn")[0];

function active(){
    if(inputID.value && inputPW.value){
        loginBtn.removeAttribute('disabled');
        loginBtn.style.backgroundColor = "rgba(0, 149, 246)";
    } else {
        loginBtn.setAttribute('disabled',"");
        loginBtn.style.backgroundColor = "rgba(0, 149, 246,.3)";
    }
}

inputID.addEventListener('input', active)
inputPW.addEventListener('input', active)