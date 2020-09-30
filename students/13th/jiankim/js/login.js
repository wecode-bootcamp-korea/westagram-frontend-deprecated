//로그인 버튼 색깔 바꾸기
const idInfo = document.getElementById('userID');
const pwInfo = document.getElementById('userPW');
const btnColor = document.getElementById('loginBtn');
const form = document.querySelector('form')

form.addEventListener('keyup',function() {
    idInfo.value.length >= 1 && pwInfo.value.length >=1? btnColor.style.backgroundColor = "#0095F6":btnColor.style.backgroundColor = "#C1DFFC";
});
