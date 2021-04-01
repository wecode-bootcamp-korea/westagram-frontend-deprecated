
const inputPw = document.getElementsByClassName('login_id')[0];
const inputId = document.getElementsByClassName('login_pw')[0];

inputId.addEventListener("input", loginEvent);
inputPw.addEventListener("input", loginEvent);

function loginEvent(){
    let id_value = inputId.value;
    let pw_value = inputPw.value;
    let loginBtn = document.querySelector(".login_btn");
    let btnColor = loginBtn.style;

    id_value.length>=1 && pw_value.length>=1?

    btnColor.backgroundColor ='blue': btnColor.backgroundColor ='#B2DFFC';

    if(id_value.length>=1 && pw_value.length>=1){
        loginBtn.style.cursor='pointer';
    }
}