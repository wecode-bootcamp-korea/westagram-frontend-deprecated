const loginId = document.getElementById("loginId");
const passWord = document.getElementById("passWord");
const btnLogin = document.querySelector(".btnLogin");


function checkInputs(id, pwd){
    if(id && pwd){
        btnLogin.classList.add("enable");
        // console.log(id,pwd);
    }else{
        btnLogin.classList.remove("enable");
    }
}
loginId.addEventListener("keyup", function(e){
    // console.log(`loginID: ${loginId.value}`);
    checkInputs(loginId.value, passWord.value);
})

passWord.addEventListener("keyup", function(e){
    checkInputs(loginId.value, passWord.value);
    // console.log(`passWord: ${passWord.value}`);
})