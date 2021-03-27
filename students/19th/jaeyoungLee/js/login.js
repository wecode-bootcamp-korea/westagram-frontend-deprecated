const loginButton = document.querySelector(".loginBt");
const inputtext = document.querySelector(".loginId");
const inputpassword = document.querySelector(".loginPs");

const activationLoginButton = () => {//활성화
    const email= document.querySelector(".loginId").value;
    const password = document.querySelector(".loginPs").value;

    email && password ? loginButton.disabled = false  : 0;
}

const disabledLoginButton= () => {//비 활성화
    const email= document.querySelector(".loginId").value;
    const password = document.querySelector(".loginPs").value;

    email && password ? 0 : loginButton.disabled = true;
}


inputtext.addEventListener('input', activationLoginButton);
inputpassword.addEventListener('input', activationLoginButton);
inputtext.addEventListener('input', disabledLoginButton);
inputpassword.addEventListener('input', disabledLoginButton);