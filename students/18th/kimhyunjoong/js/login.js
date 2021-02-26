const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const deepBlue = "#0095F6";
const skyBlue = "#b2dffc";

unActiveBtn();

loginEmail.addEventListener("keyup", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  loginEmail.includes("@") && loginPassword.length >= 5
    ? onActiveBtn()
    : unActiveBtn();
});

loginPassword.addEventListener("keyup", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  loginEmail.includes("@") && loginPassword.length >= 5
    ? onActiveBtn()
    : unActiveBtn();
});

function onActiveBtn() {
  loginBtn.style.backgroundColor = deepBlue;
  loginBtn.disabled = false;
}

function unActiveBtn() {
  loginBtn.style.backgroundColor = skyBlue;
  loginBtn.disabled = true;
}

loginBtn.addEventListener("click", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
});
