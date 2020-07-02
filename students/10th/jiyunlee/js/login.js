const btn_login = document.getElementsByClassName('btn_login')[0];
const info = document.getElementsByTagName("input");
const idvalue = document.getElementById("inputid");
const pwvalue = document.getElementById("inputpw");
const inputLogin = document.getElementById("inputLogin");

// 삼항연산자!
function onkeys() {
    if(idvalue.value !== "" && pwvalue.value !== "") {
      btn_login.style.backgroundColor = "skyblue";
      btn_login.disabled = false;
    } else {
      btn_login.style.backgroundColor = "lightblue";
      btn_login.disabled = true;
    }
}
idvalue.addEventListener("keyup", onkeys);
pwvalue.addEventListener("keyup", onkeys);
inputLogin.addEventListener("keyup", pressEnter);

function pressEnter(e){
  if(e.keyCode == 13){
    inputLogin.submit();
  }
}