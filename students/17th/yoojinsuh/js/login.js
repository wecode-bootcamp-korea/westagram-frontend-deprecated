
const thisIsId = document.querySelector(".id");
const thisIsPw = document.querySelector(".password");
const thisIsLogIn = document.querySelector(".loginBtn");


function loginUpdate() {
    let idValue = thisIsId.value;
    let pwValue = thisIsPw.value;
    let mustId = '@';

    if (idValue && pwValue) {
        if (idValue.includes(mustId) && pwValue.length >= 6) {
            thisIsLogIn.classList.add('darkBtn');
            thisIsLogIn.disabled = "false";
            thisIsLogIn.style.cursor = "pointer";
        } else {
            thisIsLogIn.classList.remove('darkBtn');
            thisIsLogIn.disabled = "true";
            thisIsLogIn.style.cursor = "default";
        }
    } else {
        thisIsLogIn.classList.remove('darkBtn');
        thisIsLogIn.disabled = "true";
        thisIsLogIn.style.cursor = "default";
    }
};

thisIsId.addEventListener('keyup', loginUpdate);
thisIsPw.addEventListener('keyup', loginUpdate);


