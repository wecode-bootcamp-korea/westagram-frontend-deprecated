const inputContainer = document.querySelector('.inputContainer');
    

function checkBtnDisabled() {
    const btn = document.querySelector('.loginBtn'),
        userId = document.querySelector('.inputId').value,
        userPw = document.querySelector('.inputPw').value;

    btn.disabled = userId.length < 1 ? true : (userPw.length < 6 ? true : false);
}

function init() {
    inputContainer.addEventListener('keyup', checkBtnDisabled)
}

init();