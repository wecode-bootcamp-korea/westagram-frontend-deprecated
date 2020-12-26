const loginContainer = document.getElementById('login__wrap');
const userId = document.querySelector('.user__name');
const userPassword = document.querySelector('.user__password')
const onBtnabled = document.querySelector('.on__Submit');
const errorMsg = document.querySelector('.user__validation');

loginContainer.addEventListener('keyup',onLogin);

function onLogin(){
  const userIdValue = userId.value;
  const userPasswordValue = userPassword.value;
  if(userIdValue.length > 3 && userPasswordValue.length > 3){
    onBtnabled.style.opacity = "1";
    onBtnabled.disabled = false;
  } else {
    onBtnabled.style.opacity = ".5"; 
    onBtnabled.disabled = true;
  }
}
function onValidation(){
  const user = userId.value;
  const passwod = userPassword.value;
  if(!(user === 'test') && !(passwod === '1234')){
    errorMsg.innerText = '계정 정보가 없습니다.';
    return;
  }
  if(!(user === 'test')){
    errorMsg.innerText = '아이디가 잘못 되었습니다.';
    return;
  }
  if(!(passwod === '1234')){
    errorMsg.innerText = '비밀번호가 잘못 되었습니다.';
    return;
  }
  location.href = '../jaehyunyoo/main.html';
}
onBtnabled.addEventListener('click',(event)=>{
  event.preventDefault();
  onValidation();
});