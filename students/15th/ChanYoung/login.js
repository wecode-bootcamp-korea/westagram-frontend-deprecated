const email = document.forms['signupForm']['name'];
const password = document.forms['signupForm']['password'];
const error = document.querySelector('.signup__error');
const login = document.forms['signupForm']['login'];

/* onsubmit에 return false면 action이 실행x */
//127.0.0.1:5500/main.html
http: function signupValid() {
  if (email.value.length <= 2) {
    console.log('hi');
    error.style.display = 'block';
    email.style.border = '1px solid red';
    error.innerText = 'Please Fill up Your Name or Email';
    email.focus();
    return false;
  }

  if (password.value.length <= 6) {
    error.style.display = 'block';
    password.style.border = '1px solid red';
    error.innerText = 'Please write at least six letters. ';
    password.focus();
    return false;
  } else {
    error.style.display = 'block';
    error.innerText = 'Suceess!';
    return false;
  }
}
