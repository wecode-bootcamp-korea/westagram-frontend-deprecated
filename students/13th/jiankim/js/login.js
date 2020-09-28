const idInfo = document.getElementById('userID');
const pwInfo = document.getElementById('userPW');

document.addEventListener('keyup', function() {
    if (idInfo.value.length >= 1 && pwInfo.value.length >= 1) {
        let color = document.getElementById('loginBtn');
        color.style.backgroundColor = "#0095F6";
    }
})