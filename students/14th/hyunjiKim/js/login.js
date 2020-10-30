const input_id = document.querySelector('.user-id');
const input_pw = document.querySelector('.user-pw');
const id_warning = document.querySelector('.user-id-warning');
const pw_warning = document.querySelector('.user-pw-warning');

function is_valid_email(value) {
  if (!value) return true;
  let email_format = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return email_format.test(value);
}

function is_valid_password(value) {
  if (!value) return true;
  let pw_format = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,16}$/;
  return pw_format.test(value);
}

function check_input_length() {
  const login_btn = document.querySelector('.login-btn');
  const id_value = input_id.value.trim();
  const pw_value = input_pw.value.trim();
  if (id_value.length > 0 && pw_value.length > 0) {
    login_btn.classList.remove('btn-light-blue');
    login_btn.classList.add('btn-blue');
  } else {
    login_btn.classList.remove('btn-blue');
    login_btn.classList.add('btn-light-blue');
  }
}

function controll_login_btn() {
  input_id.addEventListener('keyup', () => {
    check_input_length();
    is_valid_email(input_id.value.trim())
      ? id_warning.classList.add('warning-invisible')
      : id_warning.classList.remove('warning-invisible');
  });
  input_pw.addEventListener('keyup', () => {
    check_input_length();
    is_valid_password(input_pw.value.trim())
      ? pw_warning.classList.add('warning-invisible')
      : pw_warning.classList.remove('warning-invisible');
  });
}

function init() {
  controll_login_btn();
}

init();
