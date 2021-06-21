const inputId = document.querySelector(".id");
const inputPassword = document.querySelector(".password");
const button = document.querySelector(".button");
// 각각이 아닌 폼 태그로 한번에 가져오면 이벤트가 자동으로 생성된다.


function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    // loginBtn.disabled = !btn ? true : false;
    //   loginBtn.style.opacity = btn ? 1 : 0.5;
    // 3항 연산자 예시
    // true, false 일때는 3항 연산자를 사용하기도 한다.


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


// location.replace("url")
// url로 이동