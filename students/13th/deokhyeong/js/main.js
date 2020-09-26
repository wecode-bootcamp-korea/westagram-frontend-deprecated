"use strict";

const commentPostBtn = document.getElementsByClassName("comment_upload")[0];
const commentsContainer = document.querySelector(".comments_container");
let likeBtnEvent;
let delBtnEvent;
let newAddCommentLists;
let commentDelBtn;

function commentAdd() {
  const commentText = document.querySelector(".comment_input").value;
  if (commentText === "") {
    return;
  }
  const newCommentList = document.createElement("li");
  const likeBtn = document.createElement("button");
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
  newCommentList.classList.add("newAddCommentList");
  newCommentList.innerHTML = `<a>heodeok</a><span> ${commentText}</span><div style="display : inline-block;"><button class="delete">삭제</button></div>`;
  newCommentList.appendChild(likeBtn);
  commentsContainer.appendChild(newCommentList);
  commentDelBtn = document.querySelectorAll(".delete");
  newAddCommentLists = document.querySelectorAll(".newAddCommentList");
  document.getElementsByClassName("comment_input")[0].value = "";
  console.log(commentDelBtn);

  delBtnEvent();
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

delBtnEvent = () => {
  for (let i = 0; i < commentDelBtn.length; i++) {
    commentDelBtn[i].addEventListener("click", () => {
      newAddCommentLists[i].remove();
    });
  }
};
