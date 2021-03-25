// main page 필수 기능 구현

const feedsDescription = document.querySelector(".feeds_info_description");
const form = document.querySelector("form");
const commentInput = document.querySelector(".feed_info_comment_input");
const submitCommentBtn = document.querySelector(".feed_info_comment_submit");

// 1. 댓글창에 글자 하나 이상 입력 시 게시 버튼 컬러 변경
const activeSubmitBtn = () => {
  if (commentInput.value.length >= 1) {
    submitCommentBtn.classList.add("pressed");
  } else {
    submitCommentBtn.classList.remove("pressed");
  }
};
commentInput.addEventListener("keyup", activeSubmitBtn);

// 2. 엔터 또는 게시버튼 클릭 시 댓글 생성

const commentUpdate = () => {
  const inputValue = commentInput.value;
  const newComment = document.createElement("div");
  newComment.innerHTML = inputValue;
  feedsDescription.appendChild(newComment);
  commentInput.value = "";
  commentInput.focus();
};

const submitWithEnter = (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    commentUpdate();
  }
};

const submitWithClick = () => {
  commentUpdate();
};

form.addEventListener("submit", submitWithEnter);
submitCommentBtn.addEventListener("click", submitWithClick);
