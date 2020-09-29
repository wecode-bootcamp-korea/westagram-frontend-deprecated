let id = document.getElementById('inputId');
let pwd = document.getElementById('inputPwd');
let logInInfo = document.querySelector('main div');

const btnAct = () => {
    let idVal = id.value;
    let idLength = idVal.length;
    let pwdLength = pwd.value.length;
    let at = idVal.indexOf("@");
    let logInBtn = document.getElementById('logInBtn');
  
    if((at !== -1 && idLength > 0) && pwdLength >= 5 ){
        logInBtn.disabled = false;
        logInBtn.style.backgroundColor = "#009DF9";
    } else {
        logInBtn.disabled = true;
        logInBtn.style.backgroundColor = "#B9DFFC";
    }
};

logInInfo.addEventListener('keyup',btnAct);
