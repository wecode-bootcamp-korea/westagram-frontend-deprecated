// 로그인시 버튼 활성화 기능

const loginId = document.querySelector('.loginId');
const loginPw = document.getElementsByClassName('loginInput')[0];
const loginBtn = document.getElementsByClassName('loginBtn')[0];

loginId.addEventListener('keyup', function(){
    if(loginId.value.length > 0 && loginPw.value.length > 0){
        loginBtn.style.backgroundColor = "#0095f6";
    }
});

loginPw.addEventListener('keyup', function(){
    if(loginId.value.length > 0 && loginPw.value.length > 0){
        loginBtn.style.backgroundColor = "#0095f6";
    }
    
});



