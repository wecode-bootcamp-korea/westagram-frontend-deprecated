let idwrite = document.getElementsByClassName('login_txt')[0];
let pwdwrite = document.getElementsByClassName('login_pwd')[0];
let btnclick = document.getElementsByClassName('login_btn')[0];

document.addEventListener("keyup", function () {
  const validation = idwrite.value.length > 0 && pwdwrite.value.length > 5;
  btnclick.disabled = validation ? false : true;
});

  function moveMain() {
    location.href = "main.html";
}