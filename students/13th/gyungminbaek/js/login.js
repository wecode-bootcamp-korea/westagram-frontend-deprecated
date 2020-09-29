const id = document.querySelector(".user_id");
const pw = document.querySelector(".user_pw");

function activateLogin() {
  const loginButton = document.querySelector(".button");
  id.value.length >= 1 && pw.value.length >= 6
    ? (loginButton.style.backgroundColor = "#0095F6")
    : (loginButton.style.backgroundColor = "#B2dffc");
}

const form = document.querySelector(".form");
  
form.addEventListener(
    "keyup",
    function () {
      activateLogin();
    },
    true
  );