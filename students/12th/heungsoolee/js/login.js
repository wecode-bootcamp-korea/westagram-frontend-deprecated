const inputId = document.getElementsByClassName("id_input")[0];
const inputPassword = document.getElementsByClassName("password_input")[0];
const loginBtn = document.getElementsByClassName("login_button")[0];

const slideImg = document.getElementsByClassName("slide_img");

const changeLoginBtn = () => {
  inputPassword.value.length > 0 && inputId.value.length > 0
    ? ((loginBtn.style.backgroundColor = "#0095F6"),
      (loginBtn.style.cursor = "pointer"))
    : ((loginBtn.style.backgroundColor = "#C0DFFD"),
      (loginBtn.style.cursor = ""));
};

inputId.addEventListener("keyup", changeLoginBtn);
inputPassword.addEventListener("keyup", changeLoginBtn);

const slideShow = () => {
  const nowImg = document.getElementsByClassName("slide_now")[0];

  if (nowImg) {
    nowImg.classList.remove("slide_now");
    const nextImg = nowImg.nextElementSibling;
    if (nextImg) return nextImg.classList.add("slide_now");
    if (!nextImg) return slideImg[0].classList.add("slide_now");
  }

  slideImg[0].classList.add("slide_now");
};

const showInterval = () => {
  setInterval(slideShow, 5000);
};
showInterval();
