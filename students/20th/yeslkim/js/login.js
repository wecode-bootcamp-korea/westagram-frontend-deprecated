const inputBox = document.querySelector('.js-input-box');
    

function active() {
    const btn = document.querySelector('.js-login-btn'),
        userId = document.querySelector('.js-input-id').value,
        userPw = document.querySelector('.js-input-pw').value;
    
    btn.disabled = userId.length < 1 ? true : (userPw.length < 6 ? true : false);
}

inputBox.addEventListener('keyup', active);