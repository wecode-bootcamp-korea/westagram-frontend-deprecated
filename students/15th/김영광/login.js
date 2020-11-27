
const thisIsBtn = document.querySelector('.logBtn');
const thisIsId = document.getElementById('loginEmail');
const thisIsPw = document.getElementById('loginPw');
const myId = 'yongjl12@naver.com';
const myPw = '123456789';

function BtnChange(){
    const idValue = thisIsId.value;
    const pwValue = thisIsPw.value;
    const userInfo = idValue.includes('@') && pwValue.length >=5;
    
    const canChange = (userInfo) ? thisIsBtn.style.backgroundColor = "royalblue" :
    thisIsBtn.style.backgroundColor = "#ccdefc";
}

thisIsId.addEventListener('keyup', BtnChange)
thisIsPw.addEventListener('keyup', BtnChange)


thisIsBtn.addEventListener('click', (e)=> {
    if(thisIsId.value === myId && thisIsPw.value === myPw){
        alert('로그인 성공');
    } else {
        alert('실패');
    }
})