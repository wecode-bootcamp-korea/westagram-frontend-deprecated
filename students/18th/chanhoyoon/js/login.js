const imgSlide = document.querySelector('.img-slide').children;

const getLoginId = document.querySelector('.login-id');
const getLoginPw = document.querySelector('.login-pw');
const loginBtn = document.querySelector('.login-btn');

const getSpanId = document.querySelector('.span-id');
const getSpanPw = document.querySelector('.span-pw');

let loginId;
let loginPw;

let imgArr = [];
let cnt = 4;

function opacityImg() {
    if (cnt % 4 === 0) {
        imgArr[( imgArr.length - 1 )].classList.remove('img-slide-in');
        imgArr[( imgArr.length - 1 )].classList.add('img-slide-out');
        imgArr[( cnt % 4 )].classList.remove('img-slide-out');
        imgArr[( cnt % 4 )].classList.add('img-slide-in');
    } else {
        imgArr[( cnt % 4 ) - 1].classList.remove('img-slide-in');
        imgArr[( cnt % 4 ) - 1].classList.add('img-slide-out');
        imgArr[( cnt % 4 )].classList.remove('img-slide-out');
        imgArr[( cnt % 4 )].classList.add('img-slide-in');
    }
    cnt++;
}

function checkLoginText() {
    if (loginId && loginPw)
        loginBtn.style.backgroundColor = '#0095f6';
    else
        loginBtn.style.backgroundColor = '#c0dffe';

}

function checkLoginSubmit() {
    if (loginId && loginPw) {

    } else if (!loginId && !loginPw) {
        alert('아이디와 비밀번호를 입력해주세요.');
    } else if (!loginPw) {
        alert('비밀번호를 입력해주세요.');
    } else if (!loginId) {
        alert('아이디를 입력해주세요.');
    } else {
        // login api 전송!!!!!!!
    }
}

function transActionId() {
    if (loginId) {
        getSpanId.classList.add('input-span-transform');
        getLoginId.classList.add('input-move-y');
    } else {
        getSpanId.classList.remove('input-span-transform');
        getLoginId.classList.remove('input-move-y');
    }
}

function transActionPw() {
    if (loginPw) {
        getSpanPw.classList.add('input-span-transform');
        getLoginPw.classList.add('input-move-y');
    } else {
        getSpanPw.classList.remove('input-span-transform');
        getLoginPw.classList.remove('input-move-y');
    }
}


function init() {
    for (let i = 0; i < imgSlide.length; i++) {
        imgArr.push(imgSlide[i]);
        }
    if (imgArr)
        imgArr[( imgArr.length - 1 )].classList.add('img-slide-in');
    setInterval(opacityImg, 2000);
}

init();

getLoginId.addEventListener('keyup', ( e ) => {
    loginId = e.target.value;
    checkLoginText();
    transActionId();
});
getLoginPw.addEventListener('keyup', ( e ) => {
    loginPw = e.target.value;
    checkLoginText();
    transActionPw();
});
loginBtn.addEventListener('click', () => {
    checkLoginSubmit();
});
