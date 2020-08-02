const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function () {
  const commentArea = document.querySelectorAll("input")[1];
  const comment = commentArea.value;
  const commentPlace = document.querySelector(".commentList");

  let makeUserCommentPart = document.createElement("li");
  makeUserCommentPart.textContent = comment;

  commentPlace.appendChild(makeUserCommentPart);
});
