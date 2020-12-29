const inputId = document.getElementById('firstInput');
const inputPassword = document.getElementById('secondInput');
const inputBtn = document.getElementById('btn');

function login(){
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if(idValue.length>0 && passwordValue.length>0){
    inputBtn.style.cursor = "pointer";
    inputBtn.style.backgroundColor = "#0069c0";
  }
  else{
    inputBtn.style.backgroundColor = "#64b5f6";
  }
  return;
}
inputId.addEventListener('keyup',login);
inputPassword.addEventListener('keyup', login);
