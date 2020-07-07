const inputId = document.querySelector(".id_input");
const inputPw = document.querySelector(".pw_input");
const loginButton = document.querySelector("button");
const idPwForm = document.querySelector(".id_pw_form");

idPwForm.addEventListener("keyup", function () {

  let inputPwValue = inputPw.value;
  let inputIdValue = inputId.value;

  inputIdValue !== "" && inputPwValue !== "" ? loginButton.style.backgroundColor = "#0095f6"
    : loginButton.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
}
//   if (inputIdValue !== "" && inputPwValue !== "") {
//     loginButton.style.backgroundColor = "#0095f6";//어두운
//   } else {
//     loginButton.style.backgroundColor = "rgba(0, 149, 246, 0.3)";//밝은
//   }
// });


