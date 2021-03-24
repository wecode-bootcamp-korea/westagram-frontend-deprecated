
const thisIsPw = document.getElementById('login_pw');
const thisIsId = document.getElementById('login_id');

thisIsPw.addEventListener("keydown",function(){
    let inputId = thisIsId.value;
    let inputpw = thisIsPw.value;
    
    if(inputId.length>=1 && inputpw.length>=1)
    {
        let loginBtn = document.querySelector("#login_btn");
            loginBtn.style.backgroundColor='blue';
    }
    if(!inputId.length || !inputpw.length){
        let loginBtn = document.querySelector("#login_btn");
        loginBtn.style.backgroundColor='#B2DFFC';
    }
});
