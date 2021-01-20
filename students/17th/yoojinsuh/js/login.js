
const thisIsId = document.querySelector(".id");
const thisIsPw = document.querySelector(".password");
const thisIsLogIn = document.querySelector(".loginBtn");

function loginUpdate() {
    let idValue = thisIsId.value;
    let pwValue = thisIsPw.value;

    if (idValue && pwValue) {
        thisIsLogIn.style.backgroundColor = "#1c7ed6";
        thisIsLogIn.disabled = "false";
        thisIsLogIn.style.cursor = "pointer";
    } else {
        thisIsLogIn.style.backgroundColor = "#c0dffd";
        thisIsLogIn.disabled = "true";
        thisIsLogIn.style.cursor = "default";
    }
};

thisIsId.addEventListener('keyup', loginUpdate);
thisIsPw.addEventListener('keyup', loginUpdate);