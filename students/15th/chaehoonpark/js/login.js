const thisIsButton = document.getElementsByTagName("button")[0];
const thisIsPassword = document.getElementById("Password");
const thisIsId = document.querySelector("#ID");
const thisIsInputBox = document.querySelector(".input_and_button_box");

thisIsInputBox.addEventListener("keyup", function () {
  const thisIsIdValue = thisIsId.value;
  const thisIsPasswordValue = thisIsPassword.value;

  thisIsIdValue && thisIsPasswordValue
    ? (thisIsButton.style.backgroundColor = "#0095F6")
    : (thisIsButton.style.backgroundColor = "#B2DFFC");
});
