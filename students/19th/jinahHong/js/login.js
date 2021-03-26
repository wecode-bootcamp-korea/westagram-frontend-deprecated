const inputId = document.querySelector("#email_password");
const inputPassword = document.querySelector("#login_password");
const button = document.querySelector(".login_btn");

function loginBtn() {
    const idValue = inputId.value;
    const passwordValue = inputPassword.value;

    if(idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    } else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
};

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);