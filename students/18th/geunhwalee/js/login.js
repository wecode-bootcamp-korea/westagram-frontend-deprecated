//비밀번호 id에 접근해 변수로 선언
const loginChecker = document.getElementById('pswd');

// 비밀번호 input 창에 값을 넣고 키보드를 떼는 순간 함수를 실행
loginChecker.addEventListener('keyup', function() {
    const usernameValue = document.getElementById("username").value;
    const passwordValue = document.getElementById("pswd").value;
    const loginBtnSelector = document.getElementsByClassName("loginBtn")[0];
    
    usernameValue[0] && passwordValue[0] ? loginBtnSelector.style.backgroundColor = '#0080ff' : loginBtnSelector.style.backgroundColor = '#c5e1fa';

})