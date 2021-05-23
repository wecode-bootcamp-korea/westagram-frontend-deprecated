const userId = document.querySelector('.userId');
const userPassword = document.querySelector('.userPassword')
const loginButton = document.querySelector('.loginButton')

const login = () => {
    const inputId = userId.value;
    const inputPassword = userPassword.value;


    if(inputId && inputPassword){
        loginButton.removeAttribute('disabled');
    }
    else{
        loginButton.setAttribute('disabled','disabled');
    }
}

userId.addEventListener('keyup',login);
userPassword.addEventListener('keyup',login);
