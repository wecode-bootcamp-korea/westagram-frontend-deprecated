document.addEventListener("keyup", function() {
    const pw = document.getElementById('id').value;
    const id = document.getElementById('pw').value;

    if (pw !== "" && id!=="") {
        const loginButton = document.getElementsByClassName('login-btn')[0];
        loginButton.style.color = '#3e95ef';
    }
});

// keyup (누르고 난 후에 값이 입력됨.)
// const는 함수 밖에 선언을 하면 id, pw가 다 빈값임.
