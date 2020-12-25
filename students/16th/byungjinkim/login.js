const check_id = document.querySelector('#id_input'); 
const check_pw = document.querySelector('#pw_input');
const btnLogin = document.querySelector('.btn_login');

// 이벤트 리스너
check_pw.addEventListener('input', activeBtn);
check_id.addEventListener('input', activeBtn);

// 로그인 버튼 활성화
function activeBtn(){
    if(check_id.value != "" && check_pw.value != ""){
        btnLogin.classList.add('active');
    }else{
        btnLogin.classList.remove('active');
    }
}

// ID, PW 유효성 검사
function loginCheck(){
    if(check_id.value == ""){
        alert("ID를 입력해주세요!");
        return false;
    }else if(check_pw.value == ""){
        alert("PW를 입력해주세요!");
        return false;
    }

    if(check_id.value.length < 4){
        alert("ID는 4글자 이상입니다!")
        return false;
    }else if(check_pw.value.length < 4){
        alert("PW는 4자리 이상입니다!")
        return false;
    }

    if(check_id.value.length == 4 && check_pw.value.length ==4){
        alert("로그인 완료!");
        return true;
    }
}
