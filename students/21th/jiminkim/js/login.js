const textLoginId = document.getElementById('txtLoginId');
const textLoginPw = document.getElementById('txtLoginPw');
const buttonLogin = document.getElementById('buttonLogin');

// 로그인 버튼 활성화 이벤트
let setLoginButtonActive = (event) => {

   buttonLogin.className = (textLoginId.value !== '' && textLoginPw.value !== '' ) ? "" : "inactive";

   if (event.key === 'Enter') {
       if (event.target.id === 'txtLoginId') {
           textLoginPw.focus();
       } else {
           clickLoginButton();
       }
   }
} 

// 로그인 버튼 클릭 이벤트
let clickLoginButton = () => {
    if (textLoginId.value === '') {
        alert('Id를 입력해 주세요.');
        textLoginId.focus();
        return;
    }
    if (textLoginPw.value === '') {
        alert('패스워드를 입력해 주세요.');
        textLoginPw.focus();
        return;
    }
    if (textLoginId.value === 'test' && textLoginPw.value === 'password') {
        location.href = './main.html';
    } else {
        alert('회원정보가 없습니다.');
    }
}

textLoginId.addEventListener('keyup', setLoginButtonActive);
textLoginPw.addEventListener('keyup', setLoginButtonActive);
buttonLogin.addEventListener('click', clickLoginButton);