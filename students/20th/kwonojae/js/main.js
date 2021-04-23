let commentInput = document.querySelector(".writeHereComment input");
const commentArea = document.querySelector(".feedComment");
const postButton = document.querySelector(".postComment");
const likeButton = document.querySelectorAll(".fa-heart");

function clickAddComment() {
  let comment = document.createElement("p");
  comment.innerHTML = commentInput.value;
  commentArea.appendChild(comment);
  commentInput.value = "";
}

function enterAddComment(event) {
  const enter = event.keyCode;
  if (enter === 13) {
    clickAddComment();
  }
}

postButton.addEventListener("click", clickAddComment);
commentInput.addEventListener("keydown", enterAddComment);
