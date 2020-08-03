// login page id/pw 입력 시 login 버튼 활성화
const loginContent = document.querySelector('.login_content');
const loginId = document.querySelector('.login_input-id');
const loginPw = document.querySelector('.login_input-pw');
const loginBtn = document.querySelector('.login_btn');

loginContent.addEventListener('keyup', () => {
  let idValue = loginId.value;
  let pwValue = loginPw.value;
  const painBtn = 'login_paintBtn';

  if (idValue && pwValue) {
    loginBtn.classList.add(painBtn);
  } else {
    loginBtn.classList.remove(painBtn);
  }
})