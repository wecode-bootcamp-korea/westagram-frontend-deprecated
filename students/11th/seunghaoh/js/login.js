// const id = document.getElementsByClassName("inputId")[0];
// const pw = document.getElementsByClassName("inputPw")[0];
const inputs = document.querySelectorAll(".inputs");
const thisIsBtn = document.getElementsByClassName("loginBtn")[0];

// id.addEventListener("keyup", function () {
//   loginBtnActive();
// });

// pw.addEventListener("keyup", function () {
//   loginBtnActive();
// });

inputs[0].addEventListener("keyup", function () {
  loginBtnActive();
});

inputs[1].addEventListener("keyup", function () {
  loginBtnActive();
});

function loginBtnActive() {
  // const idVal = id.value;
  // const pwVal = pw.value;
  // if (idVal && pwVal) {
  //   thisIsBtn.setAttribute("style", "opacity: 1");
  //   thisIsBtn.disabled = false;
  // } else {
  //   thisIsBtn.setAttribute("style", "opacity: 0.4");
  //   thisIsBtn.disabled = true;
  // // }
  // const inputsVal = inputs.value;
  if (inputs[0].value && inputs[1].value) {
    thisIsBtn.setAttribute("style", "opacity: 1");
    thisIsBtn.disabled = false;
  } else {
    thisIsBtn.setAttribute("style", "opacity: 0.4");
    thisIsBtn.disabled = true;
  }
}
