const loginForm = document.querySelector('.loginForm');
const idInput = document.querySelector('.idInput');
const passwordInput = document.querySelector('.passwordInput');
const loginBtn = document.querySelector('.loginBtn');

loginForm.addEventListener('keyup', btnActive);

loginBtn.addEventListener('click', function() {
    location.href = "./main.html";
});

function btnActive() {
    const isValid = idInput.value && passwordInput.value.length > 5;
    
    if (isValid) {
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.style.cursor = "pointer";
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.style.backgroundColor = "#B9E0FC";
        loginBtn.style.cursor = "default";
        loginBtn.setAttribute("disabled", "");
    }
}


