const loginButton = document.getElementsByTagName("button")[0];
const idInput = document.getElementById("loginId");
const passwordInput = document.getElementById("loginPassword");

// 버튼 색을 진하게, 그리고 클릭 가능하게 만든다.
function setButtonActive () {
    loginButton.style.backgroundColor = "#0095f6";
    loginButton.removeAttribute("disabled");
}

// 버튼 색을 연하게, 그리고 클릭 불가하게 만든다.
function setButtonDeactive () {
    loginButton.style.backgroundColor = "#c4e1fc";
    loginButton.setAttribute("disabled","");
}

function buttonActive () {
    // 입력값을 가져온다.
    const inputId = idInput.value;
    const inputPassword = passwordInput.value;
    (inputId && inputPassword) ? setButtonActive() : setButtonDeactive() ;
}

idInput.addEventListener("keyup",buttonActive);
passwordInput.addEventListener("keyup",buttonActive);
