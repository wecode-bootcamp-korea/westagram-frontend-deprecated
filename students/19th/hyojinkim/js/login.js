const loginBtn = document.getElementsByClassName("login_btn")[0];
const idInput = document.getElementsByClassName("login_id")[0];
const pwInput = document.getElementsByClassName("login_pw")[0];
const loginInfo = document.getElementsByClassName("login_info")[0];

loginBtn.disabled = true;

function btnActive() {
  loginBtn.disabled = false;
  loginBtn.style.background = '#0096F6';
}
function btnDisable() {
  loginBtn.disabled = true;
}

loginInfo.addEventListener('change', function () {  // 어떤 이벤트인지 찾는 방법은 ? 
  if ((idInput.value === "" ) || (pwInput.value === "")) {
    return btnDisable();
  }
  if ((idInput.value !== "" ) && (pwInput.value !== "")) { // null vs "" -> null로하면 안되는 이유는 ? 
    return btnActive();
  }
});

// loginInfo.addEventListener('change', function () {  // 어떤 이벤트인지 찾는 방법은 ? 
//   if (loginInfo.value === "" ) {
//     return btnDisable();
//   }
//   if (loginInfo.value !== "" ) { // null vs "" -> null로하면 안되는 이유는 ? 
//     return btnActive();
//   }
// });