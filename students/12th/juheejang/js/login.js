const userAccount = document.getElementsByClassName('userAccount')[0];
const userPassword = document.getElementsByClassName('userPassword')[0];
const loginForm = document.getElementsByClassName('loginForm')[0];

loginForm.addEventListener('keyup', function(event) {
    const id = userAccount.value;
    const pw = userPassword.value;
    const loginButton = document.getElementsByClassName('loginButton')[0];

    (id.length > 0 && pw.length > 5) ? (loginButton.disabled = false, loginButton.style.opacity = 1) : (loginButton.disabled = true , loginButton.style.opacity = 0.3) ;
});