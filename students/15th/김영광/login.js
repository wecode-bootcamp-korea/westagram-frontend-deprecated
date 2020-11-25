
const thisIsBtn = document.querySelector('.logBtn');
// console.log(thisIsBtn)
const thisIsId = document.getElementById('loginEmail');
const thisIsPw = document.getElementById('loginPw');
const myId = 'yongjl12@naver.com';
const myPw = '123456789';


thisIsPw.addEventListener('keyup', (e)=> {
    idValue = thisIsId.value;
    pwValue = thisIsPw.value;

    console.log(idValue,pwValue)
    if((idValue.includes('@')) &&(pwValue.length >= 5)) {
        thisIsBtn.style.backgroundColor = "royalblue";
    } else {
        thisIsBtn.style.backgroundColor = "#ccdefc";
    }

})




thisIsBtn.addEventListener('click', (e)=> {
    if(thisIsId.value === myId && thisIsPw.value === myPw){
        alert('로그인 성공');
    } else {
        alert('실패');
    }
})