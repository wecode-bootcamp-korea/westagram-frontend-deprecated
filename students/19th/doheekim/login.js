const userId = document.body.querySelector(".id");
const userPw = document.body.querySelector(".password");
const loginBtn = document.body.querySelector("button");

userId.addEventListener("keyup",() => idKeyUp());
userPw.addEventListener("keyup",() => pwKeyUp());
loginBtn.addEventListener("click", () => pwEightNum());

function idKeyUp() {
    console.log("idkeyup")
    const resultId = userId.value;
    const resultPw = userPw.value;

    resultId && resultPw
    ? (loginBtn.style.backgroundColor = "#0094f6")
    : (loginBtn.style.backgroundColor = "#0094f64b");
};

function pwKeyUp() {
    const resultId = userId.value;
    const resultPw = userPw.value;

    resultId && resultPw
    ? (loginBtn.style.backgroundColor = "#0094f6")
    : (loginBtn.style.backgroundColor = "#0094f64b");
};

function pwEightNum() {
    const resultPw = userPw.value;

    if(resultPw.length < 8){
        alert("8자리 이상 입력해주세요 :(");
    }else{
        alert("로그인 성공!");
    }
};

