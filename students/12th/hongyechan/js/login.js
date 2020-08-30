const loginButton = document.querySelector(".loginButton");
const customerInfo = document.querySelector(".information");
const userAccount = document.querySelector("#userAccount");
const userPassWord = document.querySelector("#userPassWord");

customerInfo.addEventListener('keyup', function(e){
    if(userAccount.value.length >= 5 && userPassWord.value.length >= 5) {
        loginButton.disabled = false;
        loginButton.style.backgroundColor = "rgba(var(--d69,0,149,246),1";
    }if(userAccount.value.length < 5 || userPassWord.value.length < 5){
        loginButton.disabled = true;
        loginButton.style.backgroundColor = "rgba(var(--d69,0,149,246),.3)";
    }
});