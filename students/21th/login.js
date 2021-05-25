const inputBox = document.querySelectorAll('.loginCotentsBox');
const id = document.querySelector('.id');
const password = document.querySelector('.password');
const viewPasswordButton = document.querySelector('.passwordViewButton');
const loginButton = document.querySelector('.loginButton');

// for (let i = 0; i < inputBox.length; i++) {
//   inputBox[i].addEventListener('focusin', function () {
//     inputBox[i].classList.add('focusActive');
//   });
//   inputBox[i].addEventListener('focusout', function () {
//     inputBox[i].classList.remove('focusActive');
//   });
// }

Array.from(inputBox, (value) => {
  value.addEventListener('focusin', function () {
    value.classList.add('focusActive');
  });
  value.addEventListener('focusout', function () {
    value.classList.remove('focusActive');
  });
});

function writeInput(input) {
  let inputSibling = input.previousElementSibling; //요소.previousSibling을 치면 객체로 가져오는게 아니라 태그 안 내용으로 가져온다.
  inputSibling.classList.add('placeholderActive');
  input.classList.add('writeActive');

  if (input.value === '') {
    inputSibling.classList.remove('placeholderActive');
    input.classList.remove('writeActive');
  }
}

function viewPassword(num) {
  num.value
    ? viewPasswordButton.classList.add('viewActive')
    : viewPasswordButton.classList.remove('viewActive');
}

id.addEventListener('keyup', () => {
  writeInput(id);
  activeLoginButton();
});
password.addEventListener('keyup', () => {
  writeInput(password);
  viewPassword(password);
  activeLoginButton();
});

viewPasswordButton.addEventListener('click', function () {
  // let currentText = this.innerText; // 여기의 this는 window가 되어 밑에서 currentText는 '숨기기'로 할 수 없음

  if (this.innerText === '비밀번호 표시') {
    this.innerText = '숨기기';
    password.type = 'text';
  } else {
    this.innerText = '비밀번호 표시';
    password.type = 'password';
  }
});

function activeLoginButton() {
  const idValue = id.value;
  const passwordValue = password.value;

  idValue.includes('@') && passwordValue.length > 4
    ? loginButton.classList.add('loginButtonActive')
    : loginButton.classList.remove('loginButtonActive');
}
