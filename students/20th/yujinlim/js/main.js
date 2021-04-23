const commentInputDivs = Array.from(
  document.getElementsByClassName("feed__form")
);
const commentInputs = commentInputDivs.map((el) => {
  return el.querySelector(".feed__input");
});
const submitBtns = commentInputDivs.map((el) => {
  return el.querySelector(".feed__submit-btn");
});
const feedLikeBtns = Array.from(
  document.querySelectorAll(".feed__feature-btn .fa-heart")
);
const myID = document.querySelector(".main-right__my-id").innerText;
const OPACITY = "feed__submit-btn--opacity";

function removeSubmitBtnOpacity(commentInputValue, submitBtn) {
  if (commentInputValue) {
    submitBtn.classList.remove(OPACITY);
  }

  if (!commentInputValue) {
    submitBtn.classList.add(OPACITY);
  }
}

function getCommentValues(e) {
  const commentInputValue = e.target.value;
  const submitBtn = e.target.parentNode.querySelector(".feed__submit-btn");
  removeSubmitBtnOpacity(commentInputValue, submitBtn);
}

function toggleCommentLike() {
  const isCommentLikePressed = this.querySelector("i").classList.contains(
    "fas"
  );

  if (!isCommentLikePressed) {
    this.querySelector("i").classList.replace("far", "fas");
  }

  if (isCommentLikePressed) {
    this.querySelector("i").classList.replace("fas", "far");
  }
}

function deleteComment() {
  const selectedComment = this.parentNode.parentNode;
  selectedComment.remove();
}

function addComment(materialsForAddComment) {
  materialsForAddComment.commentList.appendChild(
    materialsForAddComment.commentColumn
  );

  materialsForAddComment.commentInput.value = "";
  materialsForAddComment.submitBtn.classList.add(OPACITY);

  const commentDeleteBtns = Array.from(
    document.getElementsByClassName("delete-btn")
  );
  const commentLikeBtns = Array.from(
    document.getElementsByClassName("like-btn")
  );

  commentDeleteBtns.forEach((el) => {
    el.addEventListener("click", deleteComment);
  });
  commentLikeBtns.forEach((el) => {
    el.addEventListener("click", toggleCommentLike);
  });
}

function makeComment(e) {
  const commentColumn = document.createElement("div");
  const commentContent = document.createElement("span");
  const commentAuthor = document.createElement("span");
  const commentBtns = document.createElement("div");
  commentBtns.classList.add("js-comment-btns");

  const commentInput = e.target.parentNode.querySelector(".feed__input");
  const commentInputValue = commentInput.value;
  const commentList = e.target.parentNode.parentNode
    .querySelector(".feed__texts")
    .querySelector(".js-feed-comments");

  const submitBtn = e.target;

  if (commentInputValue) {
    commentContent.innerText = commentInputValue;
    commentAuthor.innerText = myID;
    commentBtns.innerHTML = `<button class="js-comment-btn like-btn"><i class="far fa-heart"></i></button><button class="js-comment-btn delete-btn"><i class="fas fa-times"></i></button>`;

    commentColumn.appendChild(commentAuthor);
    commentColumn.appendChild(commentContent);
    commentColumn.appendChild(commentBtns);

    const materialsForAddComment = {
      commentColumn,
      commentList,
      commentInput,
      submitBtn,
    };

    addComment(materialsForAddComment);
  } else {
    return false;
  }
}

function handleSubmitBtn(e) {
  e.preventDefault();
  makeComment(e);
}

function toggleFeedLike() {
  const isFeedLikePressed = this.classList.contains("fas");
  const likesCountSpan = this.parentNode.parentNode.parentNode.parentNode.parentNode
    .querySelector(".feed__texts")
    .querySelector(".feed__likes")
    .querySelector(".js-likes-count");
  const currentLikeCount = parseInt(likesCountSpan.innerText);

  if (!isFeedLikePressed) {
    likesCountSpan.innerText = currentLikeCount + 1;
    this.classList.replace("far", "fas");
  }

  if (isFeedLikePressed) {
    likesCountSpan.innerText = currentLikeCount - 1;
    this.classList.replace("fas", "far");
  }
}

commentInputs.forEach((el) => {
  el.addEventListener("keyup", getCommentValues);
});

submitBtns.forEach((el) => {
  el.addEventListener("click", handleSubmitBtn);
});

feedLikeBtns.forEach((el) => {
  el.addEventListener("click", toggleFeedLike);
});
