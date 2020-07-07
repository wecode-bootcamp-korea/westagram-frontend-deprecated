const idInput = document.querySelector(".id_input");
const pwInput = document.querySelector(".pw_input");
const btnLogin = document.querySelector("button");
const idPwInput = document.querySelector(".id_pw_form");

idPwInput.addEventListener("keyup", function () {

  let pwInputValue = pwInput.value;
  let idInputValue = idInput.value;

  if (idInputValue !== "" && pwInputValue !== "") {
    btnLogin.style.backgroundColor = "#0095f6";//어두운
  } else {
    btnLogin.style.backgroundColor = "rgba(0, 149, 246, 0.3)";//밝은
  }
});


