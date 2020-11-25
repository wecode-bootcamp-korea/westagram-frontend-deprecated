
const loginBtn = document.querySelector('button');
const inputId = document.querySelector('input.id');
const inputPw = document.querySelector('input.pw');


function abledBtn(){
    let inputIdValue = inputId.value;
    let inputPwValue = inputPw.value;

    if (inputIdValue && inputPwValue){
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#0495F6";
        loginBtn.style.cursor = "pointer";
    } else {
        loginBtn.disabled = true;
    }
}

inputId.addEventListener('keyup', abledBtn);
inputPw.addEventListener('keyup', abledBtn);

// const input = document.querySelector('input');

// function abledBtn (){
// const inputId = document.querySelector('.id').value;
// const inputPw = document.querySelector('.pw').value;
//     if (inputId && inputPw){
//         loginBtn.removeAttribute('disabled')
//         loginBtn.style.backgroundColor = "#0495F6";
//     }
// }

// loginBtnEvent.addEventListener('click', abledBtn);