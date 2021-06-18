const userId = document.getElementById('userId');
const userPw = document.getElementById('userPassWord');
const loginInput = document.getElementsByClassName('login-box')[0];
const btnLogin = document.getElementsByClassName('btn-login')[0];

// function login(){
//     let idValue = userId.value;
//     let pwValue = userPw.value;

//     if (idValue.length > 0 && pwValue.length >= 5){
//         console.log('a');
//         btnLogin.disabled = false;
//     }else if(){
//         console.log('b');
//         btnLogin.disabled = true;
//     }
// }

function idChek(){
    let hasAt = userId.value.indexOf('@');//indexOf로 @의 유무를 체크 없으면 -1를 반환
    return hasAt != -1 ? true : false;//삼항연산자, hasAt가 -1을 반환할때 -1이 아닌 값은 모두 true
}

function pwChek(){
    let pwValue = userPw.value;
    return pwValue.length >= 5 ? true : false; //삼항연산자, pwValue의 갯수가 5와 같거나 클때 참을 반환
}

loginInput.addEventListener('keyup',function(){
    let loginBoxInput = (idChek() && pwChek());
    console.log(idChek());
    btnLogin.disabled = loginBoxInput ? false : true;
    //console.log(btnLogin.disabled);
})




//userId.addEventListener('keyup',login);
// userPw.addEventListener('keyup',login);

// 1. input,button 값 변수화
// 2. 로그인 함수 생성
// 3. 로그인창에 keyup이벤트 생성
// 4. id,pw length값을 비교해서 0 보다 클때 버튼 속성 변경

//유효성검사 추가