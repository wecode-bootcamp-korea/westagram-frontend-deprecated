//selectors
const passInput = document.querySelector(".passInput")
const idInput = document.querySelector(".idInput")
const loginBtn = document.querySelector(".button");


//event listeners
const init=()=>{
passInput.addEventListener('keyup', loginBtnActivate);
idInput.addEventListener('keyup', loginBtnActivate);
loginBtn.addEventListener('click', validate);
loginBtn.addEventListener("click", success)
}

init();

//functions
//login button activate
function loginBtnActivate () {
    const idInputValue = idInput.value;
    const pwInputValue = passInput.value;

    if(idInputValue && pwInputValue){
        loginBtn.classList.add("activate")
    }else {
        loginBtn.classList.remove("activate")
    }
}

//id, password validate
function validate(e) {
    e.preventDefault();

    const idInputValue = idInput.value;
    const pwInputValue = passInput.value;

    const idValidator = /@./ //아이디에 @가 포함되어 있는지 검사할 정규식

    if(!idValidator.test(idInputValue) || pwInputValue.length < 5){
        alert("적합하지 않은 이메일 또는 비밀번호 형식입니다.");
    }else if(idValidator.test(idInputValue) && pwInputValue.length >= 5){
        idInput.value = "";
        passInput.value = "";
    };
}

//로그인 기능
function success (){
  location.replace("http://127.0.0.1:5500/students/22th/somihwang/main.html");
}
