const inputId = document.querySelector('.input-id');
const inputPw = document.querySelector('.input-pw');
const loginBtn = document.querySelector('.loginForm__btn');

const changeBtnColor = () => {
    const inputIdLength = inputId.value.length;
    const inputPwLength = inputPw.value.length;
    (inputIdLength > 0 && inputPwLength > 5 ? loginBtn.classList.add('change-btn') : loginBtn.classList.remove('change-btn'));
}

inputId.addEventListener('input', changeBtnColor);
inputPw.addEventListener('input', changeBtnColor);