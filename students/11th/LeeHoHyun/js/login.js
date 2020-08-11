const login_id = document.querySelector('.login-id');
const login_id_span = login_id.children[0];
const login_id_input = login_id.children[1];

const login_pw = document.querySelector('.login-pw');
const login_pw_span = login_pw.children[0];
const login_pw_input = login_pw.children[1];
const login_pw_show = login_pw.children[2].children[0];

const btn_login = document.querySelector('.btn-login');
const wrong_pw = document.querySelector('.wrong-pw');
btn_login.disabled = 'disabled';

// login 버튼 활성화, 비활성화
function btnLoginActive(id, pw, btn){
    const isBtnActive = id.value.length > 0 && pw.value.length > 5;
    btn.style.background = isBtnActive ? 'rgb(0, 149, 246)' : 'rgb(178, 223, 252)';
    btn.disabled = isBtnActive ? '' : 'disabled';
}

// input에 값 넣을 때 placeholder 위로 이동하는 효과
function keyDown(span, input){
    span.classList.add('login-span-change');
    input.classList.add('login-input-change');
}

// input 태그 focus시 테두리 색 변경
function borderColorChange(div, color){
    div.style.borderColor = color;
}

// input 안에 placeholder가 올라갔을 경우 원위치되는 효과
function returnDefault(span, input){
    span.classList.remove('login-span-change');
    input.classList.remove('login-input-change');
}

login_id_input.addEventListener('focus', () => {
    borderColorChange(login_id, 'black');
});

login_id_input.addEventListener('keydown', (e) => {
    if(e.keyCode !== 8){
        keyDown(login_id_span, login_id_input);
    }
    btnLoginActive(login_id_input, login_pw_input, btn_login);
});

login_id_input.addEventListener('keyup', () => {
    if(login_id_input.value === ''){
        returnDefault(login_id_span, login_id_input);
        btnLoginActive(login_id_input, login_pw_input, btn_login);
    }
});

login_id_input.addEventListener('blur', () => {
    borderColorChange(login_id, 'rgb(219, 219, 219)')

    if(login_id_input.value === ''){
        returnDefault(login_id_span, login_id_input);
    }
});

login_pw_input.addEventListener('focus', () => {
    borderColorChange(login_pw, 'black');
});

login_pw_input.addEventListener('keydown', (e) => {
    if(e.keyCode !== 8){
        keyDown(login_pw_span, login_pw_input);
    }

    if(login_pw_input.value !== ''){
        login_pw_show.style.display = 'block';
    }

    btnLoginActive(login_id_input, login_pw_input, btn_login);
});

login_pw_input.addEventListener('blur', () => {
    borderColorChange(login_pw, 'rgb(219, 219, 219)')
});

login_pw_input.addEventListener('keyup', () => {
    if(login_pw_input.value === ''){
        returnDefault(login_pw_span, login_pw_input);
        login_pw_show.style.display = 'none';
        btnLoginActive(login_id_input, login_pw_input, btn_login);
    }
})

login_pw_show.addEventListener('click', () => {
    login_pw_show.innerHTML = login_pw_show.innerHTML === '비밀번호 표시' ? '숨기기' : '비밀번호 표시';
    login_pw_input.type = login_pw_input.type === 'password' ? 'text' : 'password';
});

btn_login.addEventListener('click', () => {
    wrong_pw.innerHTML = '잘못된 비밀번호입니다. 다시 확인하세요.';
    wrong_pw.style.color = 'rgb(237,73,86)';
    wrong_pw.style.fontSize = '14px';
    wrong_pw.style.width = 'fit-content';
    wrong_pw.style.margin = 'auto';
    wrong_pw.style.marginBottom = '30px';
});