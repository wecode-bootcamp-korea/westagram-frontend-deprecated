const loginButton = document.getElementById('login-button');
let passwdInput = document.getElementById('passwd-input');

window.onload = function(){
    loginButton.disable = false;
}

passwdInput.addEventListener('keydown', function(){
    const userId = document.getElementById('userId-input');
    const password = document.getElementById('passwd-input');

    let idLength = userId.value.length;
    let passwdLength =password.value.length;

    if(idLength === 0 ){
        alert('아이디부터 입력해주세요');
        userId.focus();
        return;
    }

    if(idLength >= 0 && passwdLength >= 0){
        loginButton.style.backgroundColor = 'blue';
        loginButton.disable = false;
    }else{
        loginButton.disable = true;
    }
})


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