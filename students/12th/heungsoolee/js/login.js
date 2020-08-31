const inputId = document.getElementsByClassName("id_input")[0];
const inputPassword = document.getElementsByClassName("password_input")[0];
const loginBtn = document.getElementsByClassName("login_button")[0];

const slideImg = document.getElementsByClassName("slide_img");
const slideClassName = "slide_now";

const changeLoginBtn = () => {
  let keyValue = event.key;

  if (keyValue.length > 0) {
    if (inputPassword.value.length > 0 && inputId.value.length > 0) {
      loginBtn.style.backgroundColor = "#0095F6";
      loginBtn.style.cursor = "pointer";
    } else {
      loginBtn.style.backgroundColor = "#C0DFFD";
      loginBtn.style.cursor = "";
    }
  }
};

const slideShow = () => {
  let nowImg = document.getElementsByClassName(slideClassName)[0];
  if (nowImg) {
    nowImg.classList.remove(slideClassName);
    let nextImg = nowImg.nextElementSibling;

    if (nextImg) {
      nextImg.classList.add(slideClassName);
    } else {
      slideImg[0].classList.add(slideClassName);
    }
  } else {
    slideImg[0].classList.add(slideClassName);
  }
};

const showInterval = () => {
  setInterval(slideShow, 5000);
};
showInterval();
