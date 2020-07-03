const thisIsInput = document.querySelector('.loginBox');

thisIsInput.addEventListener('keyup', function () {
  const thisIsBtn = document.querySelector('.loginBtn');
  const loginInputId = document.querySelector('.loginInputId');
  const loginInputPw = document.querySelector('.loginInputPw');

  if (loginInputId.value !== '' && loginInputPw.value !== '') {
    thisIsBtn.style.backgroundColor = 'blue';
  } else {
    thisIsBtn.style.backgroundColor = '#c0e0fe';
  }
});
