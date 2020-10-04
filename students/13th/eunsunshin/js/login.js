"use strict";
const id = document.querySelector('.inputId');
const pwd = document.querySelector('.inputPwd');
const logInInfo = document.querySelector('main div');

const btnAct = () => {
    let idVal = id.value;
    let pwdLength = pwd.value.length;
    let at = idVal.indexOf("@");
    let logInBtn = document.querySelector('logInBtn');
  
    if(at !== -1 && pwdLength >= 5 ){
        logInBtn.disabled = false;
        logInBtn.style.backgroundColor = "#009DF9";
    } else {
        logInBtn.disabled = true;
        logInBtn.style.backgroundColor = "#B9DFFC";
    }
};

logInInfo.addEventListener('keyup', btnAct);