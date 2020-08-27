const thisIsId = document.getElementById('inputId');
const thisIsPwd = document.getElementById('inputPwd');
const loginBtn = document.getElementById('loginButton');
const toMain = document.getElementById('mainLink');

const buttonEvent = function(event) {
    if (thisIsId.value && thisIsPwd.value) {
        loginBtn.disabled = false;
        toMain.href = "main.html";
        loginBtn.style.opacity= "100%";
    }
    else {
        loginBtn.disabled = true;
        toMain.href = "#none";
    }
}

thisIsId.addEventListener('keyup',buttonEvent)

thisIsPwd.addEventListener('keyup',buttonEvent)





