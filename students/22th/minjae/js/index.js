const inputId = document.querySelector(".id");
const inputPassword = document.querySelector(".password");
const button = document.querySelector(".button");

function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if (idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    } else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
}

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);


// 아래는 콘솔로그 확인용

// inputId.addEventListener('keyup', function(e) {
//     console.log('2');
// })
// inputPassword.addEventListener('keyup', function(e) {
//     console.log('4');
// })
