// ID, PW 입력 시 로그인 버튼 활성화 기능
const id = document.getElementsByClassName("inputId")[0];
const pw = document.getElementsByClassName("inputPw")[0];
const btn = document.getElementsByClassName('loginBtn')[0];

const activeBtn = () => {
    const length = id.value.length > 0 && pw.value.length > 0
    length ? btn.style.backgroundColor = "#0095f6" : btn.style.backgroundColor = "#c0dffd"
}

id.addEventListener("keyup", activeBtn);
pw.addEventListener("keyup", activeBtn);




