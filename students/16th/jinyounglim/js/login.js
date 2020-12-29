const loginForm = document.querySelector('.login_form');
const id = document.querySelector('.user_id');
const pw = document.querySelector('.user_pw');
const loginBtn = document.querySelector('.btn_login');

document.addEventListener('keyup', function () {
  id.value && pw.value
    ? loginBtn.classList.add('active')
    : loginBtn.classList.remove('active');
});
