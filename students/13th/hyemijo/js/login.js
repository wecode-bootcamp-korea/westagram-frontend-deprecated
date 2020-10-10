const loginButton = document.querySelector("button");
const idInputButton = document.querySelector(".idInput");
const psInputButton = document.querySelector(".psInput");
const inputBox = document.querySelector(".inputWrap");

inputBox.addEventListener("keyup", function () {
  let idInputValue = idInputButton.value;
  let psInputValue = psInputButton.value;
  if (idInputValue.length > 1 && psInputValue.length > 1) {
    loginButton.style.backgroundColor = "#3d96ef";
  } else {
    loginButton.style.background = "#badcfa";
  }
});
