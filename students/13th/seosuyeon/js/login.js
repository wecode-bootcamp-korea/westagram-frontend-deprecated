// Valiables
const inputId = document.getElementById('id');
const inputPw = document.getElementById('pw');

// Events
inputPw.addEventListener("input", changeLoginBtnColor);
inputId.addEventListener("input", changeLoginBtnColor);

// Functions
function changeLoginBtnColor() {
    const loginBtn = document.getElementById('login_btn');

    loginBtn.style.backgroundColor = (inputId.value.includes('@') && inputPw.value.length > 5) ? '#0095f6' : '#b2dffc'
}