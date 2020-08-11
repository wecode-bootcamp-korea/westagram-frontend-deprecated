const signIn = document.querySelector('.loginFormWrap');
let inputId = document.querySelector('.inputId');
let inputPw = document.querySelector('.inputPw');
let btn = document.querySelector('.loginBoxBtn');

// 버튼 제어 //
const btnOn = () => {
    if (inputId.value && inputPw.value) {
        btn.disabled = false; 
        btn.classList ='btnActive';
        btn.classList.remove = 'btnOff';
    }
    else if (!inputId.value || !inputPw.value) {
        btn.disabled = 'disabled';
        btn.classList = 'btnOff';
        btn.classList.remove = 'btnActive';
    }
};

signIn.addEventListener('keyup', btnOn);