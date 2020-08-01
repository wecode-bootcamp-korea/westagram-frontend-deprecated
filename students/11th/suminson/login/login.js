let userId = document.querySelector('.user-id');
let userPw = document.querySelector('.user-pw');
let btnLogin = document.querySelector('.button-login');

userId.focus();

document.addEventListener('keyup', function () {
    if (userId.value.length >= 1 && userPw.value.length >= 1) {
        btnLogin.disabled = "";
        btnLogin.style.backgroundColor = "blue";
    } else {
        btnLogin.disabled = "true";
        btnLogin.style.backgroundColor = "#B2DFFC"
    }

});

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    if (userId.value.includes("@") && userPw.value.length > 4) {
        alert("로그인 성공!");
    } else {
        alert("로그인 실패");
    }
    userId.value = "";
    userPw.value = "";
});
