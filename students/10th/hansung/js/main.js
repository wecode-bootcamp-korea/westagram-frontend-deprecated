const username = document.querySelector(".side-myid");
const replyBar = document.querySelectorAll(".chat");
const inputReply = document.querySelectorAll(".input-box");
console.log(inputReply);
const combtn = document.querySelectorAll(".combtn");
const comForm = document.querySelectorAll(".comment");

function inputComment() {
  for (let i = 0; i < comForm.length; i++) {
    comForm[i].addEventListener("submit", function (e) {
      e.preventDefault();
      const currentInputVal = inputReply[i].value;
      const inputVal = document.createElement("span");
      const commentList = document.createElement("div");
      const commentJump = (document.textContent = " ");

      inputVal.innerHTML = currentInputVal;

      commentList.append(username.textContent);
      commentList.append(commentJump);
      commentList.appendChild(inputVal);

      replyBar[i].prepend(commentList);

      inputReply[i].value = "";
    });
  }
}
inputComment();

function changeBtnColor() {
  for (let i = 0; i < inputReply.length; i++) {
    inputReply[i].addEventListener("keyup", function () {
      if (inputReply[i].value.length > 0) {
        combtn[i].style.opacity = 1;
        combtn[i].style.fontWeight = 600;
      } else {
        combtn[i].style.opacity = 0.5;
        combtn[i].style.fontWeight = 400;
      }
    });
  }
}
changeBtnColor();

function useNavInput() {
  const navInput = document.querySelector(".search-box");
  const searchIcon = document.querySelector(".fa-search");

  navInput.addEventListener(
    "click",
    (magnify = () => {
      searchIcon.style.left = "60px";
    })
  );

  navInput.addEventListener(
    "blur",
    (magnify = () => {
      searchIcon.style.left = "125px";
    })
  );
}
useNavInput();

const heart = document.querySelectorAll(".heart");
const fillHeart = document.querySelectorAll(".fill-heart");
//const heartWrap = document.querySelectorAll(".heart-btn");

function changeHeart() {
  for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function () {
      heart[i].style.visibility = "hidden";
      fillHeart[i].style.visibility = "visible";
    });
  }
}
changeHeart();

function breakHeart() {
  for (let i = 0; i < heart.length; i++) {
    fillHeart[i].addEventListener("click", function () {
      heart[i].style.visibility = "visible";
      fillHeart[i].style.visibility = "hidden";
    });
  }
}
breakHeart();

// if ((fillHeart.style.visibility = "visible")) {
//   fillHeart.style.visibility = "hidden";
//   heart.style.visibility = "visible";
// }
