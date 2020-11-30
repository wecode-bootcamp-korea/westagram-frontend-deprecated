
/*'로그인 버튼'과 '비밀번호 버튼'이 입력 될 시 로그인*/
function changeColor() {
    const name = document.getElementById('userId');
    const pw = document.getElementById('userPw');
    const button = document.getElementById('btn_id');

    if(name.value && pw.value) {
        button.removeAttribute('disabled');
        button.style.backgroundColor='#0095F6';
    }
}

input.addEventListener('input',changeColor);
