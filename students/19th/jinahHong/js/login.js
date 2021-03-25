const button = document.getElementById('login_btn');
const input = document.getElementsByClassName('login_input')[0];
const email = document.getElementsByClassName('email_password')[0];
const pw = documet.getElementsByClassName('login_password')[0];

function changeColor() {
    if(email.value && pw.value) {
        // button.removeAttribute('disabled');
        button.style.backgroundColor= '#0095f6';
    }
}

input.addEventListener('keyup',changeColor);