const loginBox = document.querySelectorAll(".loginInput");

idPwComparison = () => {
  let activeBtn = document.getElementsByClassName("loginBtn")[0];
  loginBox[0].value !== "" && loginBox[1].value !== ""
    ? ((activeBtn.disabled = false),
      (activeBtn.style.cursor = "pointer"),
      (activeBtn.style.backgroundColor = "#0095F6"))
    : ((activeBtn.disabled = true),
      (activeBtn.style.cursor = "default"),
      (activeBtn.style.backgroundColor = "#B2DFFC"));
};

const clickInputContainer = document.getElementsByClassName(
  "clickInputContainer"
)[0];

clickInputContainer.addEventListener("keyup", idPwComparison);
// loginBox[1].addEventListener("keyup", idPwComparison);
