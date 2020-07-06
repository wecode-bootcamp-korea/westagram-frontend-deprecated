const btn_login = document.getElementsByClassName("btn_login")[0];
const info = document.getElementsByTagName("input");
const inInput = document.getElementById("inputid");
const pwInput = document.getElementById("inputpw");
const inputLogin = document.getElementById("inputLogin");

function handleBtnColor(e) {
  inInput.value !== "" && pwInput.value !== ""
    ? ((btn_login.style.backgroundColor = "skyblue"),
      (btn_login.disabled = false),
      pressEnter(e))
    : ((btn_login.style.backgroundColor = "lightblue"),
      (btn_login.disabled = true));
}

inputLogin.addEventListener("keyup", handleBtnColor);

function pressEnter(e) {
  e.keyCode == 13 ? inputLogin.submit() : undefined;
}
