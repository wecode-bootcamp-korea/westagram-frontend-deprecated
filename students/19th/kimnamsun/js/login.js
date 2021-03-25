const input = document.querySelectorAll('input');
const loginBtn = document.querySelector('.login-btn');

const enabledBtn = () => {
    const idValue = document.querySelector('.id-input').value;
    const pwValue = document.querySelector('.pw-input').value;

    if ((idValue.length > 0 && idValue.indexOf('@') > -1)
        && pwValue.length >= 5) {
        loginBtn.disabled = false;
        loginBtn.classList.remove('disabled-btn');
        loginBtn.classList.add('enabled-btn');
    } else {
        loginBtn.classList.add('disabled-btn');
        loginBtn.classList.remove('enabled-btn');
    }
}

repeatFunction(input, enabledBtn, 'keyup');

//메인으로 가기
const goToMain = () => {
    window.location.href = 'main.html';
}

loginBtn.addEventListener('click', goToMain);