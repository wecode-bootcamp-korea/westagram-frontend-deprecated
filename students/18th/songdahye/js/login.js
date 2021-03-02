const loginBtn = document.getElementsByClassName('login_btn')[0];
const idField = document.getElementsByClassName('id_field')[0];
const pwField = document.getElementsByClassName('pw_field')[0];

document.addEventListener('keyup', function() { 
  //키 입력 후 발생되는 이벤트
  if(idField.value.length > 0 && pwField.value.length > 0){
      return loginBtn.style.backgroundColor = "#3897F0";
  }
  else {
    return loginBtn.style.backgroundColor = "#C4E1FC";
  }
});



