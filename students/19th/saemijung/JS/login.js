
const thisIsPw = document.getElementById('login_pw');
const thisIsId = document.getElementById('login_id');

thisIsPw.addEventListener("keyup",function(){
    let inputId = thisIsId.value;
    let inputpw = thisIsPw.value;
    let loginBtn = document.querySelector("#login_btn");

    inputId.length>=1 && inputpw.length>=1?
    
    loginBtn.style.backgroundColor='blue':loginBtn.style.backgroundColor='#B2DFFC';

});
