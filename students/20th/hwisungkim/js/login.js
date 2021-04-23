const thisIsId = document.getElementsByClassName("id_input")[0];
const thisIsPw = document.getElementsByClassName("pw_input")[0];
const login_btn = document.getElementById("login_btn");

login_btn.addEventListener('click',function(e){// 아이디,비밀번호 상자 입력할때마다 검사
    alert(access_permission()); //로그인함수
})

thisIsId.addEventListener('keyup',function(e){   //아이디입력칸 타자칠때마다 길이체크
    check_id_pw(); //로그인버튼 온오프함수
});

thisIsPw.addEventListener('keyup',function(e){
    check_id_pw();
});

function access_permission(){
    let id=document.getElementById("id_input").value; //입력된 아이디값
    let pw=document.getElementById("pw_input").value; //입력된 비번값
    return (id===pw ? "로그인 되었습니다" : "비밀번호가 틀렸습니다");
}

function check_id_pw(){  
    let id=document.getElementById("id_input").value; //입력된 아이디값
    let pw=document.getElementById("pw_input").value; //입력된 비밀번호값
    let btn=document.getElementById("login_btn"); 
    btn.style.backgroundColor = ((id===pw && (id.includes("@") && pw.length>4)) ? "#3A34FF" :"#C5E1FC");
    
    
    /*가이드라인 과제 0자이상 입력했을시 불켜지는 함수 */
    // if(id.length>0){             //아이디 길이체크
    //     if(pw.length>0){    //비밀번호길이 체크
    //         if(id===pw)
    //             btn.style.backgroundColor = "#3A34FF" //로그인버튼 불켜짐
    //     }
    //     if(pw.length<=0){
    //         btn.style.backgroundColor = "#C5E1FC"  //로그인버튼 불꺼짐
    //     }
    // }

    // if(id.length<=0){
    //     btn.style.backgroundColor = "#C5E1FC" //로그인버튼 불꺼짐
    // }
    // if(id!==pw){
    //     btn.style.backgroundColor = "#C5E1FC"
    // }
}