const input = document.querySelectorAll('input');
const [id, pw] = input
const input_container = document.querySelector('.input_container');
const button = document.querySelector('button');

input_container.addEventListener('keyup', () => {
    button.style.opacity = id.value.indexOf("@") != -1 && pw.value.length >= 5 ? 1 : 0.35;
})

