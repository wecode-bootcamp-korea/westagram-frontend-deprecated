const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const loginBtn = document.getElementById('login-btn')

//show input error message
const showError = (input, message) => {
  // const formControl = document.getElementById('form-control')
  const formControl = input.parentElement;
  formControl.className = 'form-control error'
  // const small = document.getElementById('small')
  // small.innerText = message
  // console.log(small.innerText)
}

//show Success
const showSuccess = (input) => {
  // const formControl = document.getElementById('form-control')
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

//show error when nothing typed in, otherwise show success
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, 'Required info')
    } else {
      showSuccess(input)
    }
  })
}

//check minimun length
const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(input, `Must be at least ${min} characters`)
  } else {
    showSuccess(input)
  }
}

//activate loginBtn
const activateLoginBtn = () => {
  if (email.value.length >= 3 && password.value.length >= 7) {
    loginBtn.classList.add('active')
  }
}

//to main page
const goToMain = () => {
  loginBtn.setAttribute('onclick', "location.href='/main/index.html'")
}

//form event listener
form.addEventListener('keyup', activateLoginBtn)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkRequired([email, password])
  checkLength(email, 3)
  checkLength(password, 7)

  // email.value = ''
  password.value = ''

  // location.href = "/main/'index.html'"
})
// form.addEventListener('submit', goToMain)