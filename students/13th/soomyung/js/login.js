const getId = document.querySelector("#username");
const getPw = document.querySelector("#password");
const getBtn = document.querySelector(".button");
const getForm = document.querySelector(".form-section");
const getError = document.querySelector(".error");
let idIsTrue = false;
let pwIsTrue = false;

const verifyAccount = (x, y) => {
  x && y
    ? getBtn.classList.add("button-active")
    : getBtn.classList.remove("button-active");
};

const putErrorMessage = () => {
  getError.innerHTML =
    "<span>The username you entered doesn't belong to an account. Please check your username and try again.</span>";
};

// length check
getForm.addEventListener("keyup", (e) => {
  getId.value.length >= 1 ? (idIsTrue = true) : (idIsTrue = false);
  getPw.value.length >= 1 ? (pwIsTrue = true) : (pwIsTrue = false);
  verifyAccount(idIsTrue, pwIsTrue);
});

// check @ with Error Message
getBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getId.value.search("@") === -1
    ? putErrorMessage()
    : getError.removeChild(getError.childNodes[0]);
});
