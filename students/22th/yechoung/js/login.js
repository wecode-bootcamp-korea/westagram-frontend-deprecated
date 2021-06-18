"use strict"

const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const loginBtn = document.querySelector('form button');
const loginBox = document.getElementsByClassName('login-container')[0];

let loginInfo = {
  userId: '',
  userPw: ''
};

const saveLoginInfo = (e) => {
  e.target.id === 'id-input' 
  ? loginInfo.userId = e.target.value
  : loginInfo.userPw = e.target.value
};

const activeLoginBtn = () => {
  loginInfo.userId && loginInfo.userPw 
  ? loginBtn.classList.add('active')
  : loginBtn.classList.remove('active')
};

const handleLogin = (e) => {
  e.preventDefault();
  if(!loginInfo.userId || !loginInfo.userPw) return;

  const vldCheckResult = checkValidation();

  if(!vldCheckResult) {
    const section = document.createElement('SECTION');

    loginBox.appendChild(section);
    section.classList.add('vld-container', 'grey-letter');

    section.innerHTML = `
      <i class="fas fa-exclamation-circle"></i>
      <p>아이디는 '@'를 포함해 5글자 이상이며 특수문자는 '_'와 '.'만 사용 가능합니다<br />비밀번호는 영문과 숫자를 포함해 6글자 이상이어야 합니다</p>    
    `;

    setTimeout(() => {
          section.remove()
        }, 2500)
  } else {
    // 로그인 성공 확인을 위한 임시 코드
    const div = document.createElement('div');
    
    div.classList.add('login-success');
    loginBox.appendChild(div);
    
    div.innerHTML = `<p>로그인 성공</p>`
    setTimeout(() => {
      div.remove()
    }, 500)
  }
};

const checkValidation = () => {
  const checkIdVld = /^(?=.*[@])[a-z0-9_.@]{5,}$/gi;
  const checkedId = checkIdVld.test(loginInfo.userId);
  const checkPwVld = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const checkedPW = checkPwVld.test(loginInfo.userPw);

  return (checkedId && checkedPW)
  ? true
  : false
}


(function() {
  idInput.addEventListener('keyup', e => {
    saveLoginInfo(e);
    activeLoginBtn();
  });
  pwInput.addEventListener('keyup', e => {
    saveLoginInfo(e);
    activeLoginBtn();
  });
  loginBtn.addEventListener('click', (e) => {
    handleLogin(e);
  });
})();