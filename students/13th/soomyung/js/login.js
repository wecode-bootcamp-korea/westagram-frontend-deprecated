const idInput = document.querySelector(".usrInput");
const pwInput = document.querySelector(".pwInput");
const loginBtn = document.querySelector(".button");
const loginForm = document.querySelector(".form-section");
const errorOut = document.querySelector(".error");
let idIsTrue = false;
let pwIsTrue = false;

const verifyAccount = (x, y) => {
  x && y
    ? loginBtn.classList.add("button-active")
    : loginBtn.classList.remove("button-active");
};

const putErrorMessage = () => {
  errorOut.innerHTML =
    "<span>The username you entered doesn't belong to an account. Please check your username and try again.</span>";
};

// length check
loginForm.addEventListener("keyup", (e) => {
  idInput.value.length >= 1 ? (idIsTrue = true) : (idIsTrue = false);
  pwInput.value.length >= 1 ? (pwIsTrue = true) : (pwIsTrue = false);
  verifyAccount(idIsTrue, pwIsTrue);
});

// check @ with Error Message
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  idInput.value.search("@") === -1
    ? putErrorMessage()
    : errorOut.removeChild(errorOut.childNodes[0]);
});
