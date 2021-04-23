const inputId = document.getElementsByClassName("loginId")[0];
const inputPw = document.getElementsByClassName("loginPw")[0];
const loginBtn = document.getElementsByClassName("loginButton")[0];



inputId.addEventListener('keyup', function(event) {
    if (inputId.value && inputPw.value) {
        loginBtn.disabled = false;
        
    }
    else {
        loginBtn.disabled = true;
        
    }
})

inputPw.addEventListener('keyup', function(event) {
    if (inputId.value && inputPw.value) {
        loginBtn.disabled = false;
        
    }
    else {
        loginBtn.disabled = true;
    }
})
       