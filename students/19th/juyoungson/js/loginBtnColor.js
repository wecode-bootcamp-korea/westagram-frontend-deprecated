const inputId = document.querySelector("#inputId");
const inputPw = document.querySelector("#inputPw");
const loginBtn = document.querySelector(".loginButton");

const loginBtnColor = () => {
  const idValue = inputId.value;
  const pwValue = inputPw.value;

  if(idValue.length > 0 && pwValue.length > 0){
    loginBtn.setAttribute("style", "background-color:#34abeb;");
  }else{
    loginBtn.setAttribute("style", "background-color:#b2dffc;");
  }
}

inputId.addEventListener("keyup",loginBtnColor);
inputPw.addEventListener("keyup",loginBtnColor);






