const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function(){
    const userId = document.getElementById('userId-input');
    const password = document.getElementById('passwd-input');

    if (!userId) {
        alert('id를 입력해주세요!');
        return;
    }
    
    if (!password) {
        alert('비밀번호를 입력해주세요!');
        return;
    }
    
    alert('입력은 해도 로그인 체크가 안 되요..');
});