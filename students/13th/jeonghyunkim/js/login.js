const id = document.querySelector(".ipid");
const password = document.querySelector(".ipps");
const button = document.querySelector(".btlogin");
const login = document.querySelector(".main_login");

function LoginEvent() {
  if (id.value.length > 0 && password.value.length > 0) {
    button.disabled = false;
    button.style.backgroundColor = "#0095F6";
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.backgroundColor = "#B9DFFC";
    button.style.cursor = "default";
  }

}

login.addEventListener("keyup", LoginEvent);
