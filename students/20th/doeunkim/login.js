//로그인 버튼 활성화

const id = document.querySelectorAll('.login input')[0],
pw =  document.querySelectorAll('.login input')[1];
const btn = document.querySelector('#loginBtn');

function activateBtn() {
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
id.addEventListener('input', activateBtn);
pw.addEventListener('input', activateBtn);



//타이핑시 아이디, 패스워드 글자 작아지게 & 비밀번호 타이핑시 표시 버튼 생성

const idLabel = document.querySelectorAll('.login label')[0],
pwLabel =  document.querySelectorAll('.login label')[1];
const showPw = document.querySelector('.showPw');

function typeId() {
    id.classList.add('typing')
    idLabel.classList.add('typing');
    if(!id.value) {
        id.classList.remove('typing')
        idLabel.classList.remove('typing');
    }
}

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

id.addEventListener('input', typeId);
pw.addEventListener('input', typePw);



//비밀번호 표시&숨김

function showAndHide() {
    if(pw.type === "password") {
        pw.type = "text";
        showPw.innerHTML = "숨기기";
    } else {
        pw.type = "password";
        showPw.innerHTML = "비밀번호 표시";
    }
}

showPw.addEventListener('click', showAndHide);



//유효성 검사

const validId = /\W/;
function checkValidation() {
    if((validId.exec(id.value)) || (pw.value !== 'wecode')) {
        const invalid = document.querySelector(".invalid");
        const invalidMessage = document.createElement('p');
        invalidMessage.innerHTML = "아이디는 영문, 숫자, '_'로 구성되어야 합니다.<br />패스워드는 'wecode'입니다.";
        invalid.appendChild(invalidMessage);
        return false;
    }
}
