const getId = document.getElementsByClassName("login_id")[0];
const getPw = document.getElementsByClassName("login_pw")[0];
const getSubmit = document.getElementsByClassName("login_form_submit")[0];
const getLoginform = document.querySelector(".login_form");

getLoginform.addEventListener("keyup", function(){
  const changeColor = getId.value.includes('@') && getPw.value.length > 5;
  getSubmit.disabled = changeColor ? false : true;
})

function moveMain(){
  location.href = 'main.html'
}