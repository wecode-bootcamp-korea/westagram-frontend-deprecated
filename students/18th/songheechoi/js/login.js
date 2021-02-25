const loginId = document.getElementById("loginId");
const passWord = document.getElementById("passWord");
const btnLogin = document.querySelector(".btnLogin");


function checkInputs(id, pwd){
    if(id && pwd.length>5){
        btnLogin.classList.add("enable");
        btnLogin.removeAttribute("disabled");
        return true;
        // console.log(id,pwd);
    }else{
        btnLogin.classList.remove("enable");
        btnLogin.setAttribute("disabled","");
        return false;
    }
}
function checkValidation(id, pwd){
    // console.log(id.indexOf("@"), pwd.length);
    if(id.indexOf("@")>-1 && pwd.length>5){
        location.href= "./main.html"
    }
    else{
        alert("아이디와 비밀번호 확인 후 재시도");
        return;
    }

}
loginId.addEventListener("keyup", function(e){
    // console.log(`loginID: ${loginId.value}`);
    checkInputs(loginId.value, passWord.value);
})

document.addEventListener("keyup",function(e){
    if(checkInputs(loginId.value, passWord.value)){
        if(e.keyCode === 13){
            btnLogin.click();
        }
    }
})


btnLogin.addEventListener("click", function(){
    checkValidation(loginId.value, passWord.value);

})