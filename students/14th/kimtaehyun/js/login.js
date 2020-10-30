const input = document.querySelectorAll('input');
const [id, pw] = input
const input_container = document.querySelector('.input_container');
const button = document.querySelector('button');

input_container.addEventListener('keyup', () => {
    button.style.opacity = (id.value.length || pw.value.length) ? 1 : 0.35;
})

let input1 = input[0].value.length > 0 ? true : false;

// input[0].addEventListener('keyup', () => {
//     console.log(input[0].value);
//     if(input[0].value.indexOf("@") != -1) {
//         alert('@포함 O');
//     }
// })