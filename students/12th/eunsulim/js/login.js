const id = document.getElementsByClassName("inputId")[0];
const pw = document.getElementsByClassName("inputPw")[0];
const btn = document.getElementsByClassName('loginBtn')[0];

const activeBtn = () => {
    const inputval = id.value && pw.value
    btn.style.backgroundColor = inputVal ?  "#0095f6" : "#c0dffd"
}

id.addEventListener("keyup", activeBtn);
pw.addEventListener("keyup", activeBtn);