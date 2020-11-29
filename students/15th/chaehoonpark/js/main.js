const thisIsComment = document.querySelector(".article-comment");
const thisIsButton = document.querySelector(".article-comment-button");
const thisIsUsername = document.querySelector(".username-bold");

thisIsComment.addEventListener("keyup", function (event) {
  const thisIsCommentValue = thisIsComment.value;

  if (!thisIsCommentValue) {
    thisIsButton.setAttribute("disabled", true);
    thisIsButton.style.color = "#B3DFFC";
  } else {
    thisIsButton.removeAttribute("disabled");
    thisIsButton.style.color = "#0095f6";
  }
});

thisIsComment.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault;
    thisIsButton.click();
  }
});

thisIsButton.addEventListener("click", function (event) {
  let thisIsCommentValue = thisIsComment.value;

  let commentToBeAdded = document.createElement("div");
  let commentContext = document.createTextNode(
    thisIsUsername.textContent + thisIsCommentValue
  );

  commentToBeAdded.appendChild(commentContext);

  const element = document.querySelector(".article-fifth-row");

  element.appendChild(commentToBeAdded);
});

thisIsButton.addEventListener("click", function () {
  thisIsComment.value = "";
  thisIsButton.setAttribute("disabled", true);
  thisIsButton.style.color = "#B3DFFC";
});
