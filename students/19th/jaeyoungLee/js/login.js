const loginButton = document.querySelector(".loginBt");
const inputtext = document.querySelector(".loginId");
const inputpassword = document.querySelector(".loginPs");

const loginButtonActivation = () => {//활성화
    const email= document.querySelector(".loginId").value;
    const password = document.querySelector(".loginPs").value;

    email && password ? loginButton.style.backgroundColor = "#2795f6" : 0;
}

const loginButtonDisabled = () => {//비 활성화
    const email= document.querySelector(".loginId").value;
    const password = document.querySelector(".loginPs").value;

    email && password ? 0 : loginButton.style.backgroundColor = "#b2dffc";
}


inputtext.addEventListener('keyup', loginButtonActivation);
inputpassword.addEventListener('keyup', loginButtonActivation);
inputtext.addEventListener('keyup', loginButtonDisabled);
inputpassword.addEventListener('keyup', loginButtonDisabled);