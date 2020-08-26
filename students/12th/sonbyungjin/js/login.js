const thisIsLogin = document.getElementsByClassName('login__input__text');
const thisIsButton = document.getElementsByTagName('button')[0];

// 로그인 버튼 활성화(+ 유효성 검사)
// querryselectorAll foreach 가능?
for (const el of thisIsLogin){
    el.addEventListener('keyup', function(){
        ((thisIsLogin[0].value.indexOf('@') !== -1) &&
        (thisIsLogin[1].value.length > 4)) ?
        thisIsButton.style.backgroundColor = '#0095f6' :
        thisIsButton.style.backgroundColor = 'lightblue'
})}
