const LoginBox = document.getElementsByClassName("box")[0];
const InputId = document.getElementsByClassName("id_input")[0];
const InputPw = document.getElementsByClassName("pw_input")[0];
const LoginBtn = document.getElementById("LoginBtn");

LoginBtn.addEventListener('click',function(e){// 아이디,비밀번호 상자 입력할때마다 검사
    alert(access_permission()); //로그인함수
})

LoginBox.addEventListener('keyup',function(){
    check_id_pw();
})

// InputId.addEventListener('keyup',function(e){   //아이디입력칸 타자칠때마다 길이체크
//     check_id_pw(); //로그인버튼 온오프함수
// });

// InputPw.addEventListener('keyup',function(e){
//     check_id_pw();
// });

function access_permission(){
    return InputId.value === InputPw.value ? "로그인 되었습니다" : "비밀번호가 틀렸습니다";
}

function check_id_pw(){  
    LoginBtn.style.backgroundColor = ((InputId.value===InputPw.value && (InputId.value.includes("@") && InputPw.value.length>4)) ? "#3A34FF" :"#C5E1FC");
}