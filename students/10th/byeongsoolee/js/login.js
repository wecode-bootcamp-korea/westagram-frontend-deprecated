const loginBtn = document.getElementsByClassName('btn')[0];
const loginInfoBox = document.getElementsByClassName('loginInfoBox')[0];

loginInfoBox.addEventListener('keyup',function() {
    const identification = document.getElementsByClassName('id')[0].value;
    const password = document.getElementsByClassName('pwd')[0].value;
    loginBtn.style.backgroundColor = ( ((identification.length !== 0) && (password.length !==0)) ? "blue" :"rgb(178,223,252)" )
  })