const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

unActiveBtn();

function checkValid() {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  loginEmail.includes("@") && loginPassword.length >= 5
    ? onActiveBtn()
    : unActiveBtn();
}

function onActiveBtn() {
  loginBtn.classList.remove("unactiveBtn");
  loginBtn.classList.add("activeBtn");
  loginBtn.disabled = false;
}

function unActiveBtn() {
  loginBtn.classList.remove("activeBtn");
  loginBtn.classList.add("unactiveBtn");
  loginBtn.disabled = true;
}

loginEmail.addEventListener("keyup", checkValid);
loginPassword.addEventListener("keyup", checkValid);
