
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const button = document.querySelector("button");

function login() {
    if(id.value.length > 0 && pw.value.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#0095f6";
    }
    else {
        button.style.cursor = "defult"
        button.style.backgroundColor = "#bfdffd";
    }
};

id.addEventListener('input', login);
pw.addEventListener('input', login);

