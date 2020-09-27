"use strict";

const commentPostBtn = document.getElementsByClassName("comment_upload")[0];
const commentsContainer = document.querySelector(".comments_container");

function commentAdd() {
  const commentText = document.querySelector(".comment_input").value;
  if (commentText === "") {
    return;
  }

  const newCommentList = document.createElement("li");
  newCommentList.className = "deleteTarget";
  const likeBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  likeBtn.className = "good_Btn";
  likeBtn.innerHTML = "좋아요";
  likeBtn.addEventListener("click", () => {
    switch (likeBtn.style.backgroundColor) {
      case "":
        likeBtn.style.backgroundColor = "red";
        break;
      case "red":
        likeBtn.style.backgroundColor = "";
        break;
    }
  });

  delBtn.className = "del_Btn";
  delBtn.innerHTML = "삭제";
  delBtn.addEventListener("click", () => {
    newCommentList.remove();
  });

  newCommentList.innerHTML = `<a>heodeok</a><span> ${commentText}</span><div style="display : inline-block;">`;
  newCommentList.appendChild(likeBtn);
  newCommentList.appendChild(delBtn);
  commentsContainer.appendChild(newCommentList);

  document.getElementsByClassName("comment_input")[0].value = "";
}

commentPostBtn.addEventListener("click", function () {
  commentAdd();
});

document
  .querySelector(".comment_input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      commentAdd();
    }
  });
