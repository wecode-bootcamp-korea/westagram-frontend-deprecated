const loginEvent = document.getElementsByClassName("loginbutton")[0];

loginEvent.addEventListener('click',function(){
    const id = document.getElementsByClassName('loginId').value;
    const password = document.getElementsByClassName('loginPw').value;
    if(!id){
        alert('아이디를 입력해주세요!')
        return;
    }  
    if(!password){
        alert('비밀번호를 입력해주세요!');
    }
    }
}
