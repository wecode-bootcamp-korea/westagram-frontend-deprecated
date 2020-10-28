const thisIsButton = document.getElementById("login-btn");

thisIsButton.addEventListener("click", function () {
  const Id = document.getElementById("id").value;
  const Password = document.getElementById("password").value;

  if (Id && Password) {
    document.getElementById("login-btn").style.backgroundColor = "blue";
    return;
  }
});
