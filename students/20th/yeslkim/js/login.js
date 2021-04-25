const inputBox = document.querySelector('.js-input-box');

function activateBtn() {
    const btn = document.querySelector('.js-login-btn'),
        userId = document.querySelector('.js-input-id').value,
        userPw = document.querySelector('.js-input-pw').value,
        checkId = /^\w[\w\-\.]*@\w+\.\w{2,}/;

    btn.disabled = !(checkId.test(userId) && (userPw.length > 5));
}

inputBox.addEventListener('keyup', activateBtn);