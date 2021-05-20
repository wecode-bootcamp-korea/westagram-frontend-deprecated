const inputTag = document.getElementsByTagName("input");
const buttonArray = document.getElementsByTagName("button");

const inputId = inputTag[0]; //아이디 입력창(input 태그의 0번째)
const inputPassword = inputTag[1]; //비밀번호 입력창

const ordinaryButton = buttonArray[0];
const facebookLoginButton = buttonArray[1];

inputPassword.addEventListener("keyup", () => {
    if(inputId.value){
        ordinaryButton.classList.remove("unactivatedLoginColor");
        ordinaryButton.classList.add("activatedLoginColor");
    }
    if(!inputPassword.value){
        ordinaryButton.classList.remove("activatedLoginColor");
        ordinaryButton.classList.add("unactivatedLoginColor");
    }
})

ordinaryButton.addEventListener('click', () => {
    if(inputId.value === "guy2895" && inputPassword.value === "guy2895"){
        alert("로그인 성공");
        

         }else {
        alert("로그인 실패");
    }
    
})
