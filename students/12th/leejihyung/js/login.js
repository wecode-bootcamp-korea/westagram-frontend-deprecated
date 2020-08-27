const idInput = document.getElementById('userID');
const pwInput = document.getElementById('userPW');
const loginInput = document.getElementsByClassName('login_container')[0];
const loginBtn = document.getElementById('btn_login');
const linkToMain = document.getElementsByTagName('a')[0];


loginInput.addEventListener('keyup', function() {
    const completedInput = idInput.value.includes('@') && pwInput.value.length >= 5 ? true : false;
    loginBtn.disabled = completedInput ? false : true;
    linkToMain.href = completedInput ? "https://miajlee.github.io/westagram/main" : "#none"; 
})

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        loginBtn.click();
    }
})