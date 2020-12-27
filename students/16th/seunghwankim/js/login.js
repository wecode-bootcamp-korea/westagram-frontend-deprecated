const loginBtn = document.getElementById('loginBtn');
const idInput = document.getElementById('idInput');
const passwordInput = document.getElementById('passwordInput');

loginBtn.setAttribute('disabled', 'true');

idInput.addEventListener('input', e => {
    if((idInput.value.trim() !== '') && (passwordInput.value.trim() !== '')) {
        loginBtn.removeAttribute('disabled');
    }
    else {
        loginBtn.setAttribute('disabled', 'true');
    }
})

passwordInput.addEventListener('input', e => {
    if((idInput.value.trim() !== '') && (passwordInput.value.trim() !== '')) {
        loginBtn.removeAttribute('disabled');
    }
    else {
        loginBtn.setAttribute('disabled', 'true');
    }
})