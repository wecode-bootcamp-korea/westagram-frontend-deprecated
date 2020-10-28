const button = document.querySelector('.login-btn');
const id = document.querySelector('.id-box');
const pw = document.querySelector('.pw-box');

const changeButtonColor = () => {
  if (id.value.length && pw.value.length) {
    button.style.backgroundColor = '#0095F6';
  } else {
    button.style.backgroundColor = '#BFE0FD';
  }
};

id.addEventListener('keyup', changeButtonColor);
pw.addEventListener('keyup', changeButtonColor);


// let a = document.querySelector('.id-box').value;

// console.log(a.length);
