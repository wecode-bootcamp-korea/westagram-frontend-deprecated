const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const deepBlue = "#0095F6";
const skyBlue = "#b2dffc";

unActiveBtn();

loginEmail.addEventListener("keyup", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if (loginEmail && loginPassword.length >= 5) {
    onActiveBtn();
  }
  if (!loginPassword) {
    unActiveBtn();
  }
});

loginPassword.addEventListener("keyup", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  if (loginEmail && loginPassword.length >= 5) {
    onActiveBtn();
  }
  if (!loginPassword) {
    unActiveBtn();
  }
});

function onActiveBtn() {
  loginBtn.style.backgroundColor = deepBlue;
  loginBtn.disabled = false;
}

function unActiveBtn() {
  loginBtn.style.z = skyBlue;
  loginBtn.disabled = true;
}

loginBtn.addEventListener("click", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
});
