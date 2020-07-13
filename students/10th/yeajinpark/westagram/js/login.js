document.addEventListener("keyup", function() {
    const pw = document.getElementById('id').value;
    const id = document.getElementById('pw').value;

    if (pw!=="" && id!=="") {
        const loginButton = document.getElementsByClassName('login-btn')[0];
        loginButton.style.backgroundColor = '#3e95ef';
    }
        else if (pw=="" && id=="") {

        const loginButton = document.getElementsByClassName('login-btn')[0];
        loginButton.style.backgroundColor = '#c5dffa';
        }
    
    });

// keyup (누르고 난 후에 값이 입력됨.)
// const는 함수 밖에 선언을 하면 id, pw가 다 빈값임.
