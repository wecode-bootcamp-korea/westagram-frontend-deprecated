const locationInputId = document.querySelector('.inputId');
const locationInputPw = document.querySelector('.inputPw');
const locationLoginButton = document.querySelector('.loginButton');
const locationErrorMsg = document.querySelector('.errorMsg');

locationLoginButton.addEventListener('click', loginFunction);

function loginFunction() {
  let isUserInfoValid = {
    id: 'xedni',
    passWord: '123',
  };
  let isUserInputId = locationInputId.value;
  let isUserInputPw = locationInputPw.value;
  console.log(isUserInputPw);
  if (
    isUserInputId === isUserInfoValid.id &&
    isUserInputPw === isUserInfoValid.passWord
  ) {
    window.open('../main.html', '_self');
  } else if (
    isUserInputId !== isUserInfoValid.id &&
    isUserInputPw === isUserInfoValid.passWord
  ) {
    locationErrorMsg.innerText = '계정을 잘못 입력 했잖아';
  } else if (
    isUserInputId === isUserInfoValid.id &&
    isUserInputPw !== isUserInfoValid.passWord
  ) {
    locationErrorMsg.innerText = '비밀번호를 틀렸어';
  } else if (
    isUserInputId !== isUserInfoValid.id &&
    isUserInputPw !== isUserInfoValid.passWord
  ) {
    locationErrorMsg.innerText = '아이디가 없거나 비밀번호가 잘못 되었어';
  }
}
