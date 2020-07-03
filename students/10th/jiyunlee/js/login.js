const btn_login = document.getElementsByClassName('btn_login')[0];
const info = document.getElementsByTagName("input");
const idvalue = document.getElementById("inputid");
const pwvalue = document.getElementById("inputpw");
const inputLogin = document.getElementById("inputLogin");

function handleBtnColor() {
    (idvalue.value !== "" && pwvalue.value !== "") 
    ? (btn_login.style.backgroundColor = "skyblue",
      btn_login.disabled = false,
      pressEnter())
    : (btn_login.style.backgroundColor = "lightblue",
      btn_login.disabled = true)
}

idvalue.addEventListener("keyup", handleBtnColor);
pwvalue.addEventListener("keyup", handleBtnColor);

function pressEnter(){
  const keyCode = window.event.keyCode;
  (keyCode == 13) ? inputLogin.submit() : undefined
}