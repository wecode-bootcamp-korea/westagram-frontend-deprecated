const idInput = document.getElementById('ID')
const pwInput = document.getElementById('PW')

function booleanCheck() {
    if  (!!idInput.value === true && !!pwInput.value === true) {
        btn.style.backgroundColor = 'Blue'
    } else {
        btn.style.backgroundColor = '#C4E1FB'
    }
};

pwInput.addEventListener('input', booleanCheck);
idInput.addEventListener('input', booleanCheck);



