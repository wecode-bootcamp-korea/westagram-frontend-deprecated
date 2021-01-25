const loginContainer =  document.querySelector(".login-container");

loginContainer.addEventListener("keydown", function() {
  const loginBtn = document.querySelector(".login-btn");
  const id = document.querySelector(".id-input").value;
  const pw = document.querySelector(".pw-input").value;
  
  if(id && pw) {
    loginBtn.disabled = false;
    loginBtn.style.opacity = "1";
  } else if(!id || !pw ) {
    loginBtn.disabled = true;
    loginBtn.style.opacity = "0.3";
  }
});