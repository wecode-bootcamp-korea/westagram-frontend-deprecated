const idInput = document.querySelector('#id-input');
const pwInput = document.querySelector('#pw-input');
const loginBtn = document.querySelector('form button');
const loginBox = document.querySelector('.login-container');
const vldBox = document.querySelector('.vld-container');

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
    vldBox.classList.add('active');
    setTimeout(() => {
      vldBox.classList.remove('active')
    }, 2500)
  } else {
    const wrap = document.querySelector('.wrap');
    const div = document.createElement('div');
    
    div.classList.add('login-success');
    wrap.appendChild(div);
    div.innerHTML = `<p>로그인 성공</p>`
    setTimeout(() => {
      wrap.removeChild(div)
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