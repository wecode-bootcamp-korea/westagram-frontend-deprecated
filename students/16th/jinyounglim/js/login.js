const loginForm = document.querySelector(".login_form");
const Id = document.querySelector(".user_id");
const Pw = document.querySelector(".user_pw");
const loginBtn = document.querySelector(".btn_login");

const activateLoginBtn = () => {
    if (Id.value && Pw.value){ 
        loginBtn.classList.add('active');
    }else{
        loginBtn.classList.remove('active');
    }
}

loginForm.addEventListener('keyup', activateLoginBtn);