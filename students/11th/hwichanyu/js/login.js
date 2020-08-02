const userID = document.querySelector(".write");
const userPW = document.querySelectorAll(".write")[1];

userID &&
  userPW.addEventListener("keyup", function () {
    const loginColor = document.querySelector("button");
    loginColor.style.backgroundColor = "rgb(0, 149, 246)";
  });
