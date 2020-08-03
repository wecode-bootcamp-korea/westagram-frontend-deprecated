/* Login foucs */
const idName = document.getElementsByClassName('idName')[0];
const password = document.getElementsByClassName('password')[0];
const loginBtn = document.getElementsByClassName('loginButton')[0];

function eventBtn(){
  let idValue = idName.value;
  let passwordValue = password.value;

  if(idValue.length >= 1 && passwordValue.length >= 1){
    loginBtn.style.backgroundColor = "#0095f6";
  }else{
    loginBtn.style.backgroundColor = "#b2dffc";
  }
}

idName.addEventListener('keyup', eventBtn);
password.addEventListener('keyup', eventBtn);

/* Login alert */
loginBtn.addEventListener('click', function() {
  let idValue = idName.value;
  let passwordValue = password.value;

  if(!idValue && !passwordValue){
    alert('아이디와 비밀번호를 입력해주세요');
  }else if(!idValue && passwordValue){
    alert('아이디를 입력해주세요');
  }else if(idValue && !passwordValue){
    alert('비밀번호를 입력해주세요');
  }else if (idValue && passwordValue){
    location.href = "main.html";
  }
});