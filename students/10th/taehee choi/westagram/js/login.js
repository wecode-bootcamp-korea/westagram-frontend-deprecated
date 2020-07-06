// 1. id input 태그, pw input 태그 dom 가져오기
// 2. 각각의 dom에 이벤트리스너 달기

const idInput = document.getElementsByClassName("login_id")[0]; //.value 는 string
const pwInput = document.getElementsByClassName("login_pw")[0];
const btn = document.getElementsByClassName("login_button")[0];

idInput.addEventListener("keyup", changeColor);
pwInput.addEventListener("keyup", changeColor);

console.log(idInput.value);


function changeColor() {
    if (idInput.value !== "" && pwInput.value !== "") {
        btn.style.backgroundColor = "green";
        document.querySelector(".login_button").removeAttribute("disabled");
    }
    else {
        btn.style.backgroundColor = "lightblue";
    }
}




// id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
// 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!

//function changeButtonColor() {
//  document.getElementById("myButton").style.backgroundColor = "green";}