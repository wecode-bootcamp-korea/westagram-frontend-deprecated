const button = document.getElementsByClassName('buttonDisable')[0];
const id = document.getElementsByClassName("userinfoID")[0];
const pw = document.getElementsByClassName('userinfoPW')[0];

function changeColor() {
    if(id.value && pw.value) {
        button.style.backgroundColor = '#0095f6';
    } else if (id.value || pw.value) {
        button.style.backgroundColor = 'rgba(0,149,246,.3)';
    }
}

id.addEventListener('keyup',changeColor);
pw.addEventListener('keyup',changeColor);