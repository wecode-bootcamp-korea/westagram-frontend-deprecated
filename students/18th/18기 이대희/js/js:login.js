const idinput = document.querySelector("input");
const pwinput = document.querySelector('.pw');
const inputs = document.querySelector('.inputs');
const btn = document.querySelector('.btn');

inputs.addEventListener('keyup', (e) => {
    btn.style.background = !idinput.value || !pwinput.value ? 'rgb(191,224,253)' :'blue';
})

