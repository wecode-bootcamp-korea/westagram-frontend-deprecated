const input = document.querySelectorAll('input');
const button = document.querySelector('button');

function make_blue() {
    const button = document.querySelector('button');
    button.style.opacity = 1;
}

input[0].value.length < 0 ? input[0].addEventListener('keyup', () => {
    button.style.opacity = 0.35;
}) : input[0].addEventListener('keydown', () => {
    make_blue();
});

input[1].value.length < 0 ? input[1].addEventListener('keyup', () => {
    button.style.opacity = 0.35;
}) : input[1].addEventListener('keydown', () => {
    make_blue();
});


