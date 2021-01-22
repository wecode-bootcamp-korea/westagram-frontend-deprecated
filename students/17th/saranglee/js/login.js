const loginContainer =  document.querySelector(".login-container");

loginContainer.addEventListener("keydown", function() {
    const loginBtn = document.querySelector(".login-btn");
    const idInput = document.querySelector(".id-input");
    const pwInput = document.querySelector(".pw-input");
    
    if(idInput.value !== "" && pwInput.value !== "") {
        loginBtn.disabled = false;
        loginBtn.style.opacity = "1";
    } else if(idInput.value === "" || pwInput.value === "") {
        loginBtn.disabled = true;
        loginBtn.style.opacity = "0.3";
    }
});