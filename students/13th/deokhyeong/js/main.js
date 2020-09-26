"use strict";

const commentPostBtn = document.getElementsByClassName("comment_upload")[0];

function commentFun() {
  const commentText = document.querySelector(".comment_input").value;
  if (commentText === "") {
    return;
  }
  const newCommentList = document.createElement("li");
  newCommentList.innerHTML = `<a>heodeok<a/><span> ${commentText}</span>`;
  document.querySelector(".comments_container").appendChild(newCommentList);

  document.getElementsByClassName("comment_input")[0].value = "";
}

commentPostBtn.addEventListener("click", function () {
  commentFun();
});

document
  .querySelector(".comment_input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      commentFun();
    }
  });
