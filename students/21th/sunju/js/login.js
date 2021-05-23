const loginId = document.querySelector('.id');
const loginPassword = document.querySelector('.password');
const loginButton = document.querySelector('.button');
const loginMain = document.querySelector('main');

function keyUpLogin(){
  const inputId = loginId.value;
  const inputPassword = loginPassword.value;

  if(inputId && inputPassword){
    loginButton.disabled = false;
  }else{
    loginButton.disabled = true;
  }
}

loginMain.addEventListener("keyup", keyUpLogin);
