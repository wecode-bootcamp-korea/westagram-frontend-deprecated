const userId = document.querySelector('#user_id');
const password = document.querySelector('#password');
const button = document.getElementById('btn_login');

const isEmail = (userId) => userId.includes('@');

// button

// opacity의 기본값은 0.3 , disabled 이다.
//TODO : 만약 아이디와 비밀번호의 조건이 모두 true일때 로그인의 opacity는 1 , able 로 변경된다.
// (가설) =>
//TODO : 아이디 조건문이 통과 되었을때 opactiy 0.3인 opacity는 0.5 가 되고.
//TODO : 비밀번호 조건문이 통과 되고 opacity의 값이 0.5 일때 (아이디를 통과했을때) opacity가 1이 된다. 버튼은 = 활성화

//? ID if문 : ( userId.value !== "" ) 빈공간이 아니고 && ( userId.value.length > 4) 글자 수가 4보다 많을때.
//?

userId.addEventListener('keydown', function () {
  if (userId.value.length >= 2) {
    button.style.opacity = 0.5;
  } else {
    console.log(`아이디를 다시 입력해주세요.`);
  }
});

password.addEventListener('keydown', function () {
  if (password.value.length > 5 && button.style.opacity == 0.5) {
    button.style.opacity = 1;
    button.removeAttribute('disabled');
  } else {
    console.log('비밀번호 통과');
  }
});
