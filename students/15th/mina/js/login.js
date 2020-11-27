const loginId = document.getElementsByClassName('login_id')[0];
const loginPassword = document.getElementsByClassName('login_password')[0];
const loginButton = document.getElementsByClassName('login_btn')[0];
const inputwrap = document.getElementsByClassName('inputwrap')[0];

function buttonChangeColor(){    
    if( loginId.value && loginPassword.value ){
        console.log(loginPassword.value)
        loginButton.removeAttribute('disabled');
        loginButton.style.backgroundColor = '#0095F6';
    }
}
buttonChangeColor();

inputwrap.addEventListener('keyup',buttonChangeColor);







