const idTextBox = document.getElementsByClassName("loginId")[0];
const passwordTextBox = document.getElementsByClassName("loginPassword")[0];
const button = document.querySelector('button');

idTextBox.addEventListener('keyup', function() {
    const id = document.getElementsByClassName('loginId')[0].value;
    const password = document.getElementsByClassName('loginPassword')[0].value;
    return ((id.indexOf("@") !== -1) && (password.length >= 5)) ? button.disabled = false : button.disabled = true
});

passwordTextBox.addEventListener('keyup', function() {
    const id = document.getElementsByClassName('loginId')[0].value;
    const password = document.getElementsByClassName('loginPassword')[0].value;
    return ((id.indexOf("@") !== -1) && (password.length >= 5)) ? button.disabled = false : button.disabled = true
});