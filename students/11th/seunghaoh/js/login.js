const id = document.getElementsByClassName("inputId")[0];
const pw = document.getElementsByClassName("inputPw")[0];
const thisIsBtn = document.getElementsByClassName("loginBtn")[0];

id.addEventListener("keyup", function () {
  loginBtnActive();
});

pw.addEventListener("keyup", function () {
  loginBtnActive();
});

function loginBtnActive() {
  const idVal = id.value;
  const pwVal = pw.value;

  if (idVal && pwVal) {
    thisIsBtn.setAttribute("style", "opacity: 1");
    thisIsBtn.disabled = false;
  } else {
    thisIsBtn.setAttribute("style", "opacity: 0.4");
    thisIsBtn.disabled = true;
  }
}
