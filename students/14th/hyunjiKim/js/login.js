const input_id = document.querySelector('.user-id');
const input_pw = document.querySelector('.user-pw');

function isValidEmail(value) {
  let email_format = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return email_format.test(value); //정규표현식...이걸 어케 ㅇ외우죠?
}

function isValidPassword(value) {
  let pw_format = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,16}$/; //  5 ~ 16자 영문, 숫자 조합
  return pw_format.test(value);
}

function check_input_length() {
  const login_btn = document.querySelector('.login-btn');
  const id_value = input_id.value.trim();
  const pw_value = input_pw.value.trim();
  //check value's length
  if (id_value.length > 0 && pw_value.length > 0) {
    login_btn.style.backgroundColor = '#0095f6';
  } else {
    login_btn.style.backgroundColor = '#c0e0fe';
  }
}

function controll_login_btn() {
  input_id.addEventListener('keyup', () => {
    check_input_length();
    const id_warning = document.querySelector('.user-id-warning');
    isValidEmail(input_id.value.trim()) ? (id_warning.style.display = 'none') : (id_warning.style.display = 'inline');
  });
  input_pw.addEventListener('keyup', () => {
    check_input_length();
    const pw_warning = document.querySelector('.user-pw-warning');
    isValidPassword(input_pw.value.trim())
      ? (pw_warning.style.display = 'none')
      : (pw_warning.style.display = 'inline');
  });
}

function init() {
  controll_login_btn();
}

init();
