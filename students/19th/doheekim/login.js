const userId = document.body.querySelector(".id");
const userPw = document.body.querySelector(".password");
const loginBtn = document.body.querySelector("button");

/* let result = () => {
    let resultId = userId.value;
    let resultPw = userPw.value;
    console.log('userId keyup function')

    resultId && resultPw
    ? (loginBtn.style.backgroundColor = "#0094f6")
    : (loginBtn.style.backgroundColor = "#0094f64b");
}

userId.addEventListener("keyup",result);
userPw.addEventListener("keyup",result); */

userId.addEventListener("keyup", function () {
    let resultId = userId.value;
    let resultPw = userPw.value;
    console.log('userId keyup function')

    resultId && resultPw
    ? (loginBtn.style.backgroundColor = "#0094f6")
    : (loginBtn.style.backgroundColor = "#0094f64b");
});

userPw.addEventListener("keyup", function () {
    let resultId = userId.value;
    let resultPw = userPw.value;

    resultId && resultPw
    ? (loginBtn.style.backgroundColor = "#0094f6")
    : (loginBtn.style.backgroundColor = "#0094f64b");
});

loginBtn.addEventListener("click", function () {
    let resultPw = userPw.value;

    if(resultPw.length < 8){
        alert("8자리 이상 입력해주세요 :(");
    }else{
        alert("로그인성공");
    }
})

