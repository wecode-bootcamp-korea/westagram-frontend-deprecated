const commentInputDivs = Array.from(
  document.getElementsByClassName("feed__form")
);
const commentInputs = commentInputDivs.map((el) => {
  return el.querySelector(".feed__input");
});
const submitBtns = commentInputDivs.map((el) => {
  return el.querySelector(".feed__submit-btn");
});
const myID = document.querySelector(".main-right__my-id").innerText;
const OPACITY = "feed__submit-btn--opacity";

function removeOpacity(commentInputValue, submitBtn) {
  if (commentInputValue) {
    submitBtn.classList.remove(OPACITY);
  }

  if (!commentInputValue) {
    submitBtn.classList.add(OPACITY);
  }
}

function getCommentValues(e) {
  const commentInput = e.target;
  const commentInputValue = commentInput.value;
  const commentInputDiv = e.target.parentNode;
  const submitBtn = commentInputDiv.querySelector(".feed__submit-btn");
  removeOpacity(commentInputValue, submitBtn);
}

function updateLikeCount() {
  this.querySelector(".far").classList.replace("far", "fas");
  // const likesCountSpan = this.parentNode.parentNode.parentNode.parentNode
  //   .querySelector(".feed__likes")
  //   .querySelector(".js-likes-count");
  // const currentLikeCount = parseInt(likesCountSpan.innerText);
  // likesCountSpan.innerText = currentLikeCount + 1;
}

function deleteComment() {
  const selectedComment = this.parentNode.parentNode;
  selectedComment.remove();
}

function addComment(
  commentColumn,
  commentAuthor,
  commentContent,
  commentBtns,
  commentList,
  commentInput,
  submitBtn
) {
  commentColumn.appendChild(commentAuthor);
  commentColumn.appendChild(commentContent);
  commentColumn.appendChild(commentBtns);
  commentList.appendChild(commentColumn);

  commentInput.value = "";
  submitBtn.classList.add(OPACITY);

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
    el.addEventListener("click", updateLikeCount);
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

    addComment(
      commentColumn,
      commentAuthor,
      commentContent,
      commentBtns,
      commentList,
      commentInput,
      submitBtn
    );
  } else {
    return false;
  }
}

function handleSubmitBtn(e) {
  e.preventDefault();
  makeComment(e);
}

commentInputs.forEach((el) => {
  el.addEventListener("keyup", getCommentValues);
});

submitBtns.forEach((el) => {
  el.addEventListener("click", handleSubmitBtn);
});
