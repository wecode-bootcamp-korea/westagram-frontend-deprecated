const inputId = document.querySelector("#inputId");
const inputPw = document.querySelector("#inputPw");
const loginBtn = document.querySelector(".loginButton");

const changeColor = () => {
  const idValue = inputId.value;
  const pwValue = inputPw.value;

  if(idValue.length > 0 && pwValue.length > 0){
    loginBtn.style.backgroundColor = "#34abeb" ;
  }else{
    loginBtn.style.backgroundColor = "#b2dffc";
  }
}

inputId.addEventListener("keyup", changeColor);
inputPw.addEventListener("keyup", changeColor);






