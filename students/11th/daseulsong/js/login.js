'user strict';

const loginBox = document.querySelector('.login__main__idPw');
const id = document.querySelector('.login__idPw--id');
const pw = document.querySelector('.login__idPw--pw');
loginBtn = document.querySelector('.login__btn--blue');
[id, pw].forEach((item) => {
  console.log(item);
  item.addEventListener('keyup', (event) => {
    console.log(event);
    if (id.value !== '' && pw.value !== '') {
      // 뭔가 입력되었을 때
      loginBtn.style.backgroundColor = 'darkblue';
    } else if (id.value === '' && pw.value === '') {
      // 입력창에 아무것도 없을 때
      console.log('working');
      loginBtn.style.backgroundColor = 'rgb(95, 171, 243)';
    }
  });
});
