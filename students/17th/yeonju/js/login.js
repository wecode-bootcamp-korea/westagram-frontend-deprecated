const login = document.querySelector(".inputId");
const pw = document.querySelector(".inputPw");
const button = document.querySelector(".loginBtn");

login.addEventListener("keyup", handleinput);
pw.addEventListener("keyup", handleinput);

function handleinput() {

    const idValue = login.value;
    const pwValue = pw.value;

    if (idValue && pwValue) {
        return button.classList.add("blue")
    } else {
        return button.classList.remove("blue");
    }

}