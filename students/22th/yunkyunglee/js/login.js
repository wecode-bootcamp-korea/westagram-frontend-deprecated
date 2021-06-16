const btn = document.getElementById('button');
const id = document.getElementById('userId');
const password = document.getElementById('password');

const checkInput = () => {
  if (id.value.length && password.value.length) {
    btn.style.backgroundColor = '#4697EF';
  } else {
    btn.style.backgroundColor = '#badffa';
  }
};

id.addEventListener('keyup', checkInput);
password.addEventListener('keyup', checkInput);