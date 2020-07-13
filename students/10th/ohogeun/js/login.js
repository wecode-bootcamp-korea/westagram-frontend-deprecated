const loginBox = document.getElementsByClassName('loginBox')[0];

loginBox.addEventListener('keyup', function () {
    const button = document.getElementsByClassName('loginButton')[0];
    const idBox = document.getElementsByClassName("loginId")[0].value;
    const pwBox = document.getElementsByClassName("loginPw")[0].value;
    let buttonColor = button.style.backgroundColor;
    button.style.backgroundColor = (idBox && pwBox) ? "blue" : "#B2DFFC"
});