const inputBox = document.querySelector('.loginBox');

inputBox.addEventListener('keyup', function () {
  const thisIsBtn = document.querySelector('.loginBtn');
  const loginInputId = document.querySelector('.loginInputId');
  const loginInputPw = document.querySelector('.loginInputPw');

  loginInputId.value !== '' && loginInputPw.value !== ''
    ? thisIsBtn.style.backgroundColor = 'blue' : thisIsBtn.style.backgroundColor = '#c0e0fe';
});


