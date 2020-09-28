const idInput = document.getElementsByClassName('userID');
const pwInput = document.getElementsByClassName('userPW');
const loginBtn = document.getElementById('submitBtn');
const linkToMain = document.getElementsByTagName('a')[0];

idInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/JIAN/Downloads/westagram%20(1)%202/main.html";
    } else {
        loginBtn.disabled = true;
        linkToMain.href = "#none"
    }
})

pwInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "file:///Users/JIAN/Downloads/westagram%20(1)%202/main.html";
    } else {
        loginBtn.disabled = true;
        linkToMain.href = "#none";
    }
})

document.addEventListener ('keyup', function(event) {
    if (event.keyCode === 13) {
        document.getElementById("submitBtn").click();
    }
})