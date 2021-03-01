const imgSlide = document.querySelector('.img-slide').children;
const loginForm = document.querySelector('.login-input-form');
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

function loginActivationCheck() {
  ( loginId && loginPw ) ? loginBtn.style.backgroundColor = '#0095f6' : loginBtn.style.backgroundColor = '#c0dffe';
}

function transActionInput() {
  if (loginId) {
    getSpanId.classList.add('input-span-transform');
    getLoginId.classList.add('input-move-y');
  } else {
    getSpanId.classList.remove('input-span-transform');
    getLoginId.classList.remove('input-move-y');
  }
  if (loginPw) {
    getSpanPw.classList.add('input-span-transform');
    getLoginPw.classList.add('input-move-y');
  } else {
    getSpanPw.classList.remove('input-span-transform');
    getLoginPw.classList.remove('input-move-y');
  }
}

function loignIdPwCheck( e ) {
  if (e.target.className.includes('login-id')) {
    loginId = e.target.value;
    transActionInput();
  }
  if (e.target.className.includes('login-pw')) {
    loginPw = e.target.value;
    transActionInput();
  }
  loginActivationCheck();
}

function loginFormSubmit( e ) {
  const id = e.target[0].value;
  const pw = e.target[1].value;
  const dbTestId = e.target[0].value;
  const dbTestPw = e.target[1].value;
  const idRegExp = /^[A-Za-z0-9_][A-Za-z0-9._]*[@]{1}[a-z]*[.]+[a-z]{1,3}$/;
  const pwRegExp = /^[A-Za-z0-9!@#$%^&*()-_=+?/,.<>][A-Za-z0-9!@#$%^&*()-_=+?/,.<>]{4,}$/;
  if (!idRegExp.test(id)) {
    getLoginId.focus();
    getLoginId.value = null;
    alert('이메일을 정확히 입력해주세요!');
    return;
  }
  if (!pwRegExp.test(pw)) {
    getLoginPw.focus();
    getLoginPw.value = null;
    alert('5글자 이상 입력해야 합니다.');
    return;
  }
  if (id === dbTestId) {
    if (pw === dbTestPw) {
      alert('로그인 성공!');
    } else {
      alert('로그인 실패!');
    }
  }
}

loginForm.addEventListener('keyup', loignIdPwCheck);
loginForm.addEventListener('submit', loginFormSubmit);

function init() {
  for (let i = 0; i < imgSlide.length; i++) {
    imgArr.push(imgSlide[i]);
  }
  if (imgArr)
    imgArr[( imgArr.length - 1 )].classList.add('img-slide-in');
  setInterval(opacityImg, 2000);
}

window.addEventListener('load', init);