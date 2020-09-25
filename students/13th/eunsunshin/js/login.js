let id = document.getElementById('inputId');
let pwd = document.getElementById('inputPwd');

let btnAct = function (){
    let idVal = id.value;
    let idLength = id.value.length;
    let pwdLength = pwd.value.length;
    let at = idVal.indexOf("@");
    let logInBtn = document.getElementById('logInBtn');
    
    if(at === -1 || pwdLength < 5) {
        logInBtn.disabled = true;
        logInBtn.style.backgroundColor = "#B9DFFC";
        return;
    };

    if((at !== -1 && idLength > 0) && pwdLength >= 5 ){
        logInBtn.disabled = false;
        logInBtn.style.backgroundColor = "#009DF9";
        return;
    } 
};

id.addEventListener('keyup', btnAct);
pwd.addEventListener('keyup', btnAct);  
