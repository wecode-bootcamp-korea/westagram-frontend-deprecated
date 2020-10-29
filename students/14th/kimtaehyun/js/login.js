const input_id = document.querySelector('.input_id');
const input_pass = document.querySelector('.input_pass');

// input도 id, pass 나누지말고 하나로 주고싶은데 왜 안되지?? querySelectorAll 하면될거 같은데..
// let input = document.querySelectorAll('input');

function make_blue() {
    const button = document.querySelector('button');
    button.style.opacity = 1;
}

input_id.addEventListener('keydown', () => {
    make_blue();
})

input_pass.addEventListener('keydown', () => {
    make_blue();
})
