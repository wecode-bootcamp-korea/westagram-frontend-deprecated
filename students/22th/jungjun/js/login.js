const inputId = document.getElementById('inputId');
const inputPassword = document.getElementById('inputPassword');
const loginBtn = document.getElementById('loginBtn');

inputId.addEventListener('keyup', () => {
  valueCheck();
});
inputPassword.addEventListener('keyup', () => {
  valueCheck();
});

loginBtn.addEventListener('click', () => {
  let inputIdValue = inputId.value;
  let inputPasswordValue = inputPassword.value;

  console.log(vaildateEmail(inputIdValue));
  if (vaildateEmail(inputIdValue) === false && inputPasswordValue.length < 9) {
    alert('Please check your Email and Password!');
  } else if (vaildateEmail(inputIdValue) === false) {
    alert('Please check your Email!');
  } else if (inputPasswordValue.length < 9) {
    alert('Please check your Password!');
  } else {
    alert('Vaild your Email and Password!');
  }
});

function valueCheck() {
  let inputIdValue = inputId.value;
  let inputPasswordValue = inputPassword.value;

  if (inputIdValue || inputPasswordValue) {
    loginBtn.classList.add('active');
  } else {
    loginBtn.classList.remove('active');
  }

  // vaildateEmail('jungzkxm@name.com');
}

function vaildateEmail(email) {
  console.log(email);
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let check = re.test(String(email).toLowerCase());
  return check;
}
