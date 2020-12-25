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