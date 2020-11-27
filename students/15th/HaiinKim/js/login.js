
const inputId = document.querySelector('.loginId');
const inputPassword = document.querySelector('.loginPassword');
const btn = document.querySelector('.btn');
const formId = document.querySelector('.loginForm');

inputId.addEventListener('keyup', moreThanOne);
inputPassword.addEventListener('keyup', moreThanOne);
formId.addEventListener('submit', validation);

function moreThanOne () {
    const id = inputId.value;
    const password = inputPassword.value;
   
    if ((id.length >= 1) && (password.length >= 1)) {
        btn.style.backgroundColor = "rgb(44, 134, 224)"
    } else {
        btn.style.backgroundColor = "#CAE3FC"
    }
}

function validation (event) {
    event.preventDefault();
    const id = inputId.value;
    const password = inputPassword.value;
    
    if (id.indexOf('@') === -1) {
        alert("올바른 이메일 주소를 입력하세욧!")
    } else if (password.length < 6) {
        alert("비밀번호를 6자리 이상 입력하세욧!")
    }
}
