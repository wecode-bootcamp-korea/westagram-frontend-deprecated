const account = document.querySelector(".account");
const password = document.querySelector(".password");
const login = document.querySelector(".login");

function controlbutton() {
    let passValue = password.value;
    let accValue = account.value;

    if(accValue && passValue.length >= 6) {
        login.style.backgroundColor = "#0095f6";
        login.removeAttribute('disabled');
        login.style.cursor ='pointer';
    } 
    else {
        login.style.backgroundColor = "#B9E0FC";
        login.setAttribute('disabled', "");
        login.style.cursor ='auto'; 
    }
}


function init() {
    password.addEventListener('keyup',controlbutton);
    account.addEventListener('keyup',controlbutton);
}

init();