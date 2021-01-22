const loginBtn = document.querySelector('input[type="submit"]');
const inputs = document.querySelectorAll('input');
const input = document.querySelector('input[type="submit"]');

function activateBtn() {
  loginBtn.disabled = false;
  loginBtn.classList.add('active');
}

inputs.forEach((input) => input.addEventListener('change', activateBtn));

function validate(e) {
  e.preventDefault();
  const valEmail = document.querySelector('.email').value;
  const valPwd = document.querySelector('.password').value;
  console.log(valPwd);

  if (valEmail) {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    valEmail.match(regExp)
      ? alert('유효한 이메일 주소입니다.')
      : alert('올바른 이메일 주소를 입력해주세요');

    if (valPwd) {
      // 5자이상 숫자 또는 영자
      const regExp = '^[a-zA-Z0-9]{5,}$';
      valPwd.match(regExp)
        ? alert('유효한 패스워드 입니다.')
        : alert('올바른 패스워드를 입력해주세요');
    }
  } else {
    alert('이메일 주소를 입력해주세요.');
  }
}

input.addEventListener('click', validate);
