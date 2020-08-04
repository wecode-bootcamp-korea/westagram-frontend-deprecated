const loginBT = document.querySelector('.loginButton');
const loginInputID = document.querySelector('#loginID');
const loginInputPW = document.querySelector('#loginPW');

loginInputID.addEventListener('keyup',function () {
  let loginIDValue = document.querySelector('#loginID').value;
  let loginPWValue = document.querySelector('#loginPW').value;

  if (loginIDValue && loginPWValue) {
    loginBT.disabled = false;
    loginBT.style.background = "#0095F6";
  } 
})

loginInputPW.addEventListener('keyup',function () {
  let loginIDValue = document.querySelector('#loginID').value;
  let loginPWValue = document.querySelector('#loginPW').value;

  if (loginIDValue && loginPWValue) {
    loginBT.disabled = false;
    loginBT.style.background = "#0095F6";
  } 
})

loginInputID.addEventListener('keyup',function () {
  let loginIDValue = document.querySelector('#loginID').value;
  let loginPWValue = document.querySelector('#loginPW').value;

  if (!loginIDValue || !loginPWValue) {
    loginBT.disabled = 'disabled';
    loginBT.style.background = "#C0DFFD";
  } 
})

loginInputPW.addEventListener('keyup',function () {
  let loginIDValue = document.querySelector('#loginID').value;
  let loginPWValue = document.querySelector('#loginPW').value;

  if (!loginIDValue || !loginPWValue) {
    loginBT.disabled = 'disabled';
    loginBT.style.background = "#C0DFFD";
  } 
})