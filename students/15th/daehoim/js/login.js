const getID = document.getElementById('userID')
const getPW = document.getElementById('userPW')
const ableBtn = document.getElementsByClassName('login_btn')[0]

getID.addEventListener('keyup', function () {
    if (getID.value && getPW.value == false) {
        ableBtn.disabled = disabled;
    } else if (
        getID.value && getPW.value !== false
    ) {
        ableBtn.disabled = false;
        ableBtn.style.backgroundColor = '#0095F6';
    }
})
getPW.addEventListener('keyup', function () {
    if (getID.value && getPW.value == false) {
        ableBtn.disabled = disabled;
    } else if (
        getID.value && getPW.value !== false
    ) {
        ableBtn.disabled = false;
        ableBtn.style.backgroundColor = '#0095F6';
    }
})
