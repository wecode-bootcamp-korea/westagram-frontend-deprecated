let id = document.getElementById('inputId');
let pwd = document.getElementById('inputPwd');

let btnAct = function (){
    let idVal = id.value;
    let idLength = id.value.length;
    let pwdLength = pwd.value.length;
    let at = idVal.indexOf("@");
    let logInBtn = document.getElementById('logInBtn');

    if(idLength > 0 && pwdLength > 0 ){
        logInBtn.style.backgroundColor = "#009DF9";
    } else if(at !== -1 || pwdLength < 5){
        logInBtn.style.backgroundColor = "#B9DFFC";
    }
    
    if (idLength === 0 || pwdLength === 0){
        logInBtn.style.backgroundColor = "#B9DFFC";
        return;
    } 
};

id.addEventListener('keyup', btnAct);
pwd.addEventListener('keyup', btnAct);  