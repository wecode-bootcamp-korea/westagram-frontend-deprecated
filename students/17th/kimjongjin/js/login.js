const userId = document.querySelector(".userID");
const userPW = document.querySelector(".userPW");
const loginBtn = document.querySelector(".loginBtn");

function changeColor(){
    if(userId.value.length !== 0 && userPW.value.length >= 6){
        loginBtn.classList.add("active")
    }else 
        loginBtn.classList.remove("active")
    }

userId.addEventListener("keyup", changeColor);
userPW.addEventListener("keyup", changeColor);