'use strinct'

const loginForm = document.querySelector('.loginForm');
const inputLogin = document.querySelectorAll('input');

const inputID = document.querySelectorAll('input')[0];
const inputPW = document.querySelectorAll('input')[1];
const loginBtn = document.querySelector('.login.btn');

const showBtn = document.querySelector('.hidden')

//로그인 설명 자리 이동
const idDes = document.querySelectorAll('.form-description')[0];
const pwDes = document.querySelectorAll('.form-description')[1];

inputID.addEventListener('input', () => {   
    if (inputID.value) {
        idDes.classList.add('focused');
        inputID.classList.add('entered');
    } else {
        idDes.classList.remove('focused');
        inputID.classList.remove('entered');
    }
})

inputPW.addEventListener('input', () => {   
    if (inputPW.value) {
        pwDes.classList.add('focused');
        inputPW.classList.add('entered');
    } else {
        pwDes.classList.remove('focused');
        inputPW.classList.remove('entered');
    }
})

//버튼 활성화
function active() {
    if (inputID.value && inputPW.value) {
        loginBtn.toggleAttribute('disabled');
        loginBtn.style.backgroundColor = 'rgb(0, 149, 246)';
    } else {
        loginBtn.toggleAttribute('disabled');
        loginBtn.style.backgroundColor = 'rgb(179,223,252)';
    }
};
//-> inline style로 하기보다는, class로 부여하기!!!

inputID.addEventListener('input', active);
inputPW.addEventListener('input', active);

