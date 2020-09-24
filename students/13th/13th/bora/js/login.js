const idInput = document.getElementById("id-input");
const pwInput = document.getElementById("pw-input");
const btn = document.getElementById("login-btn");


function btnActive() {
    const idVal = idInput.value;
    const pwVal = pwInput.value;

    (idVal.length >= 1 && pwVal.length) ? 
    (btn.style.backgroundColor = "#0096F6") : (btn.style.backgroundColor = "#C0DFFD") 
};


idInput.addEventListener('keyup', function() {
    btnActive();
});
pwInput.addEventListener('keyup', function() {
    btnActive();
});


   