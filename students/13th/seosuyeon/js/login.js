// Valiables
const inputId = document.getElementById('id');
const inputPw = document.getElementById('pw');

// Events
inputPw.addEventListener("input", changeLoginBtnColor);
inputId.addEventListener("input", changeLoginBtnColor);

// Functions
function changeLoginBtnColor() {
    const loginBtn = document.getElementById('login_btn');
    let inputIdValue = document.getElementById('id').value;
    let inputPwValue = document.getElementById('pw').value;

    (inputIdValue.includes('@') && inputPwValue.length > 5) ? loginBtn.style.backgroundColor = '#0095f6' : loginBtn.style.backgroundColor = '#b2dffc'
}