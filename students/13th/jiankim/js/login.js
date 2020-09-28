const idInfo = document.getElementById('userID');
const pwInfo = document.getElementById('userPW');

idInfo.addEventListener('keyup',function() {
    if (idInfo.value.length >= 1 && pwInfo.value.length >=1) {
        const btnColor = document.getElementById('loginBtn');
        btnColor.style.backgroundColor = "#0095F6";
    } else {
        const btnColor = document.getElementById('loginBtn');
        btnColor.style.backgroundColor = "#C1DFFC";}
});
pwInfo.addEventListener('keyup',function() {
    if (idInfo.value.length >= 1 && pwInfo.value.length >=1) {
        const btnColor = document.getElementById('loginBtn');
        btnColor.style.backgroundColor = "#0095F6";
    } else {
        const btnColor = document.getElementById('loginBtn');
        btnColor.style.backgroundColor = "#C1DFFC";}
});



// idInfo.value.length >= 1 && pwInfo.value.length >=1 ? const btnColor = document.getElementById('loginBtn');
// btnColor.style.backgroundColor = "#0095F6"; : const btnColor = document.getElementById('loginBtn');
// btnColor.style.backgroundColor = "#C1DFFC";}