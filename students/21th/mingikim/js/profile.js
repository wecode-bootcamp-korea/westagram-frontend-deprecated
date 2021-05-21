const userInfo = document.querySelector(".nav-icons:last-child");
const profileMenu = document.querySelector(".profile-menu");

function toggleProfileMenu() {
  profileMenu.classList.toggle("showing");
}

function init() {
  userInfo.addEventListener("click", toggleProfileMenu);
}

init();
