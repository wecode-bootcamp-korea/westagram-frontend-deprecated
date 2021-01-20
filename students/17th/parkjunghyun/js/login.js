const loginBtn = document.querySelector('input[type="submit"]');
const inputs = document.querySelectorAll('input');

function activateBtn() {
  // loginBtn.disabled ? false : true;
  loginBtn.disabled = false;
  loginBtn.style.backgroundColor = '#1e90ff';
}

inputs.forEach((input) => input.addEventListener('change', activateBtn));

const input = document.querySelector('input[type="submit"]');

function validate(e) {
  e.preventDefault();
  const valEmail = document.querySelector('input[type="text"]').value;
  const valPwd = document.querySelector('input[type="password"]').value;

  if (valEmail) {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (valEmail.match(regExp)) {
      alert('유효한 이메일 주소입니다.');
    } else {
      alert('올바른 이메일 주소를 입력해주세요');
    }

    if (valPwd) {
      // 5자이상 & 최소 하나이상의 숫자 및 문자
      const regExp = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{5,}$';
      if (valPwd.match(regExp)) {
        alert('유효한 패스워드 입니다.');
      } else {
        alert('올바른 패스워드를 입력해주세요');
      }
    }
  } else {
    alert('이메일 주소를 입력해주세요.');
  }
}

input.addEventListener('click', validate);
