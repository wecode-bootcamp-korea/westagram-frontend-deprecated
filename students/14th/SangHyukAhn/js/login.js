const locationInputId = document.querySelector('.InputId');
const locationInputPw = document.querySelector('.InputPw');
const locationLoginButton = document.querySelector('.loginButton');
const locationErrorMsg = document.querySelector('.errorMsg');

locationLoginButton.addEventListener('click', loginFunction);
function loginFunction() {
  if (locationInputId.value === 'xedni' && locationInputPw.value === '123') {
    window.open('../main.html', '_self');
  } else if (
    locationInputId.value !== 'xedni' &&
    locationInputPw.value === '123'
  ) {
    locationErrorMsg.innerText = '계정을 잘못 입력 했잖아';
  } else if (
    locationInputId.value === 'xedni' &&
    locationInputPw.value !== '123'
  ) {
    locationErrorMsg.innerText = '비밀번호를 틀렸어';
  } else if (
    locationInputId.value !== 'xedni' &&
    locationInputPw.value !== '123'
  ) {
    locationErrorMsg.innerText = '아이디가 없거나 비밀번호가 잘못 되었어';
  }
}
