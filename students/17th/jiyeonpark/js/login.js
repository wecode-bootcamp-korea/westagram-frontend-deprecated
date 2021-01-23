const loginForm = document.getElementsByClassName('login_form')[0];

loginForm.addEventListener('change', function(){
  const idInput = document.getElementsByClassName('id_input')[0].value;
  const pwInput = document.getElementsByClassName('password_input')[0].value;
  const loginBtn = document.getElementsByClassName('login_btn')[0];
  if(idInput.length != 0 && pwInput.length != 0){
    loginBtn.className = "active_btn login_btn";
  }else{
    loginBtn.className = "inactive_btn login_btn";
  }
});