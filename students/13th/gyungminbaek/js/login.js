function activateLogin() {
    console.log("activate")
    const loginButton = document.querySelector('.button');
    
    const ID = document.querySelector('.inputID').value;
    const PW = document.querySelector('.inputPW').value;

    (ID.length>=1)&&(PW.length>=6) ?
    loginButton.style.backgroundColor='#0095F6':
    loginButton.style.backgroundColor='#B2dffc';
  }

document.querySelector('.inputID').addEventListener('keyup', function(){
    activateLogin();
})
document.querySelector('.inputPW').addEventListener('keyup', function(){
    activateLogin();
})