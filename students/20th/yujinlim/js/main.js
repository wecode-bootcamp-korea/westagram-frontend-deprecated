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

function addComment(e) {
  const commentInput = e.target.parentNode.querySelector(".feed__input");
  const commentInputValue = commentInput.value;
  const commentList = e.target.parentNode.parentNode
    .querySelector(".feed__texts")
    .querySelector(".js-feed-comments");
  const commentColumn = document.createElement("div");
  const commentContent = document.createElement("span");
  const commentAuthor = document.createElement("span");
  const commentHeart = document.createElement("span");

  if (commentInputValue) {
    commentContent.innerText = commentInputValue;
    commentAuthor.innerText = myID;
    commentHeart.innerHTML = `<i class="far fa-heart"></i>`;
    commentColumn.appendChild(commentAuthor);
    commentColumn.appendChild(commentContent);
    commentColumn.appendChild(commentHeart);
    commentList.appendChild(commentColumn);
    commentInput.value = "";
    e.target.classList.add(OPACITY);
  } else {
    return false;
  }
}

commentInputs.forEach((el) => {
  el.addEventListener("keyup", getCommentValues);
});

submitBtns.forEach((el) => {
  el.addEventListener("click", addComment);
});
