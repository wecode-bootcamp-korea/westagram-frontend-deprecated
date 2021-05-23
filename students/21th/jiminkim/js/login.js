const textLoginId = document.getElementById('txtLoginId');
const textLoginPw = document.getElementById('txtLoginPw');
const buttonLogin = document.getElementById('buttonLogin');

// 로그인 버튼 활성화 이벤트
const setLoginButtonActive = (event) => {

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
const clickLoginButton = () => {

    const txtLoginId = textLoginId.value;
    const txtLoginPw = textLoginPw.value;

    if (txtLoginId === '') {
        alert('Id를 입력해 주세요.');
        textLoginId.focus();
        return;
    }
    if (txtLoginPw === '') {
        alert('패스워드를 입력해 주세요.');
        textLoginPw.focus();
        return;
    }

    // email 주소 유효성 체크 - 정규식으로
    const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-])+(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(txtLoginId)) {
        alert('e-mail 양식이 유효하지 않습니다.');
        textLoginId.focus();
        return;
    }

    // 패스워드 유효성 체크
    if (txtLoginPw.length < 5) {
        alert('패스워드는 5글자 이상 입력해 주세요.');
        textLoginPw.focus();
        return;
    }

    location.href = './main.html';
}

textLoginId.addEventListener('keyup', setLoginButtonActive);
textLoginPw.addEventListener('keyup', setLoginButtonActive);
buttonLogin.addEventListener('click', clickLoginButton);