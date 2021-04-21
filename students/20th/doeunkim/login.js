const id = document.querySelectorAll('.login input')[0],
pw =  document.querySelectorAll('.login input')[1];

const idLabel = document.querySelectorAll('.login label')[0],
pwLabel =  document.querySelectorAll('.login label')[1];

function typeId() {
    id.classList.add('typing')
    idLabel.classList.add('typing');
    if(!id.value) {
        id.classList.remove('typing')
        idLabel.classList.remove('typing');
    }
}

const showPw = document.querySelector('.showPw');

function typePw() {
    pwLabel.classList.add('typing');
    pw.classList.add('typing');
    showPw.classList.add('show');
    if(!pw.value) {
        pw.classList.remove('typing');
        pwLabel.classList.remove('typing');
        showPw.classList.remove('show');
    }
}

function showAndHide() {
    if(pw.type === "password") {
        pw.type = "text";
        showPw.innerHTML = "숨기기";
    } else {
        pw.type = "password";
        showPw.innerHTML = "비밀번호 표시";
    }
}

function activateBtn() {
    const btn = document.querySelector('#loginBtn');
    if((id.value) && (pw.value.length >= 6)) {
        btn.style.backgroundColor = "#4295F6";
        btn.style.cursor = "pointer";
        btn.removeAttribute('disabled');
    } else {
        btn.style.backgroundColor = "#B2DFFC";
        btn.style.cursor = "default";
        btn.setAttribute('disabled', 'disabled');
    }
}

id.addEventListener('input', typeId);
pw.addEventListener('input', typePw);
id.addEventListener('input', activateBtn);
pw.addEventListener('input', activateBtn);
showPw.addEventListener('click', showAndHide);