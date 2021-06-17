const idInput = document.querySelector('#idInput');
const pwInput = document.querySelector('#pwInput');
const btn = document.querySelector('.loginButton');

function activateBtn() {
    const user_id = idInput.value;
    const user_pw = pwInput.value.length;

    if (user_id && user_pw >=6) {
        btn.removeAttribute('disabled');
    }
}

idInput.addEventListener('keyup', activateBtn);
pwInput.addEventListener('keyup', activateBtn);

/* key값을 지우면 다시 버튼 'disabled' -> "error" -> 한 함수에서 구현해야될 것 같음.

function disabledBtn() {
    const user_id = idInput.value;
    const user_pw = pwInput.value;

    if (!user_id || !user_pw) {
        btn.setAttribute('disabled');
    }
}

idInput.addEventListener('keyup', disabledBtn);
pwInput.addEventListener('keyup', disabledBtn);

*/