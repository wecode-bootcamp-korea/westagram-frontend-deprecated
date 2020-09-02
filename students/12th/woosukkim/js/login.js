const account = document.querySelector(".account");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".login");

function handleBtn() {
    const passValue = password.value;
    const accValue = account.value;

    if(accValue && passValue.length >= 6) {
        loginBtn.style.backgroundColor = "#0095f6";
        loginBtn.removeAttribute('disabled');
        loginBtn.style.cursor ='pointer';
    } 
    else {
        loginBtn.style.backgroundColor = "#B9E0FC";
        loginBtn.setAttribute('disabled', "");
        loginBtn.style.cursor ='auto'; 
    }
}


function init() {
    password.addEventListener('keyup',handleBtn);
    account.addEventListener('keyup',handleBtn);
}

init();