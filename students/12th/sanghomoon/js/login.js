const loginForm = document.querySelector('.loginForm');
const idInput = document.querySelector('.idInput');
const passwordInput = document.querySelector('.passwordInput');
const loginBtn = document.querySelector('.loginBtn');

const btnActive = function() {
    const isValid = idInput.value && passwordInput.value.length > 5;
    
    if (isValid) {
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.style.cursor = "pointer";
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.style.backgroundColor = "#B9E0FC";
        loginBtn.style.cursor = "default";
        loginBtn.setAttribute("disabled", "");
    }
}

// 준식님 git session 듣고 코드 위치를 btnActive 상단으로 올려봤으나 실행 안됐었음
// hoisting에 대해 찾아본 결과 변수(상수) 안에 담긴 함수는 hoisting 되지 않는다고 함
loginForm.addEventListener('keyup', btnActive);

loginBtn.addEventListener('click', function() {
    location.href = "./main.html";
});

