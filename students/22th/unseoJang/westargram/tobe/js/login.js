const userId = document.getElementById('userId');
const userPw = document.getElementById('userPassWord');
const btnLogin = document.getElementsByClassName('btn-login')[0];

function login(){
    let idValue = userId.value;
    let pwValue = userPw.value;
    if (idValue.length > 0 && pwValue.length > 0){
        console.log('a');
        btnLogin.disabled = false;
    }else{
        console.log('b');
        btnLogin.disabled = true;
    }
}

userId.addEventListener('keyup',login);
userPw.addEventListener('keyup',login);

// 1. input,button 값 변수화
// 2. 로그인 함수 생성
// 3. 로그인창에 keyup이벤트 생성
// 4. id,pw length값을 비교해서 0 보다 클때 버튼 속성 변경