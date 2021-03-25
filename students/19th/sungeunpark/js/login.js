const inputId = document.querySelector(".login_area_id");
const inputPw = document.querySelector(".login_area_pw");
const loginBtn = document.querySelector(".login_area_btn");

const keyupFn = () => {
  const idValue = inputId.value;
  const pwValue = inputPw.value;
  if (idValue.length >= 1 && pwValue.length >= 1) {
    loginBtn.classList.add("pressed");
  } else {
    loginBtn.classList.remove("pressed");
  }
};

inputId.addEventListener("keyup", keyupFn);
inputPw.addEventListener("keyup", keyupFn);
