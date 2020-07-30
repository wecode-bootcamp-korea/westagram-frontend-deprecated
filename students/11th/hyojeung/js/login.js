/* logion foucs */
const idname = document.getElementById('idname');
const password = document.getElementById('password');

idname.addEventListener('keyup', function(e) {
  let idValue = idname.value;
  let passwordValue = password.value;

  if(idValue.length >= 1 && passwordValue.length >= 1){
    document.getElementById('loginButton').style.backgroundColor = "#0095f6";
  }else{
    document.getElementById('loginButton').style.backgroundColor = "#b2dffc";
  }
});

password.addEventListener('keyup', function(e) {
  let idValue = idname.value;
  let passwordValue = password.value;
  
  if(idValue.length >= 1 && passwordValue.length >= 1){
    document.getElementById('loginButton').style.backgroundColor = "#0095f6";
  }else{
    document.getElementById('loginButton').style.backgroundColor = "#b2dffc";
  }
});

/* login alert */
const loginBtn = document.getElementById('loginButton');

loginBtn.addEventListener('click', function() {
  const idValue = document.getElementById('idname').value;
  const passwordValue = document.getElementById('password').value;

  if(idValue.length == 0 && passwordValue.length == 0){
    alert('아이디와 비밀번호를 입력해주세요');
  }else if(idValue.length == 0 && passwordValue.length !== 0){
    alert('아이디를 입력해주세요');
  }else if(idValue.length !== 0 && passwordValue.length == 0){
    alert('비밀번호를 입력해주세요');
  }else if (idValue.length !== 0 && passwordValue.length !== 0){
    location.href = "main.html";
  }
});


