const loginContainer = document.getElementById('login__wrap');
const userId = document.querySelector('.user__name');
const userPassword = document.querySelector('.user__password')
const onBtnabled = document.querySelector('.on__Submit');

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