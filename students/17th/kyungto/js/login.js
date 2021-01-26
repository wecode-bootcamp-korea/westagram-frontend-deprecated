const loginBtn = document.querySelector(".logInButton");
const inputContainer = document.querySelector(".inputContainer");

inputContainer.addEventListener("keyup", function (event) {
  const idValue = document.querySelector(".userId").value;
  const pwValue = document.querySelector(".userPassword").value;

  if (idValue !== null && pwValue.length > 1) {
    loginBtn.classList.add("activeBtn");
  } else {
    loginBtn.classList.remove("activeBtn");
  }
});
