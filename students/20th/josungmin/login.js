const inputId = document.getElementsByClassName("loginId")[0];
const inputPw = document.getElementsByClassName("loginPw")[0];
const loginBtn = document.getElementsByClassName("loginButton")[0];



inputId.addEventListener('keyup', function(){
    if(inputId.value.length > 0 && inputPw.value.length > 0){


        loginBtn.style.backgroundColor = "#0095f6";
    }

    })



inputPw.addEventListener('keyup', function(){
        if(inputId.value.length > 0 && inputPw.value.length > 0){
            loginBtn.style.backgroundColor = "#0095f6";
        }

        })

