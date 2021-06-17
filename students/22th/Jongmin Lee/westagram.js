const button = document.getElementsByClassName('buttonDisable')[0];
const id = document.getElementsByClassName("userinfoID")[0];
const pw = document.getElementsByClassName("userinfoPW")[0];

function changeColor() {
    if(id.value && pw.value) {
        button.style.backgroundColor = '#0095f6';
    } else if (id.value || pw.value) {
        button.style.backgroundColor = 'rgba(0,149,246,.3)';
    }
}

id.addEventListener('keyup',changeColor);
pw.addEventListener('keyup',changeColor);


function checkEmail() {		
    const inputId = document.getElementsByClassName("userinfoID")[0].value;
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

            if(exptext.test(inputId)==false){	
                alert("이 메일형식이 올바르지 않습니다.");
                return false;      
            } else {
                alert("로그인 성공")
                return true;
            }
}

function checkPw() {
    const inputPw = document.getElementsByClassName("userinfoPW")[0].value;

    if(inputPw.length < 8) {
        alert('비밀번호를 확인해주세요.');
        return false;
    } else {
        return true;
    }
}