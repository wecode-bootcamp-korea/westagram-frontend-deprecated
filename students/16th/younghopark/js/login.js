const userId = document.getElementsByClassName('userId')[0];
const userPw = document.getElementsByClassName('userPw')[0];
const logBtn = document.getElementsByClassName('loginBtn')[0];

function changeColor(){
    if(userId.value && userPw.value){
        logBtn.removeAttribute('disabled');
        logBtn.style.backgroundColor='#0095F6';
    }else{
        logBtn.removeAttribute('abled');
        logBtn.style.backgroundColor='#b2dffc';
    }
}

userId.addEventListener('keyup', changeColor);
userPw.addEventListener('keyup', changeColor);
