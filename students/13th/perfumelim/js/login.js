const blueButton = document.getElementsByTagName("button")[0];
const idInput = document.getElementsByClassName("idInput")[0];
const passInput = document.getElementsByClassName("passInput")[0];
const targetDiv = document.querySelector(".tobe");

targetDiv.addEventListener("keyup", function () {
  let idInputvalue = idInput.value;
  let passInputvalue = passInput.value;

  blueButton.style.backgroundColor =
    idInputvalue.length >= 4 && passInputvalue.length >= 4
      ? "#0095f6"
      : "#c0dffd";
});
