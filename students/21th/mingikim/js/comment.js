const commentInput = document.querySelector(".input-comment");
const commentList = document.querySelector(".comment-list");
const commentButton = document.querySelector(".article-input__button");

function attachComment(text) {
  const commentText = document.createElement("li");
  const delBtn = document.createElement("button");
  const likeBtn = document.createElement("button");
  const commentBox = document.createElement("div");
  const bottonBox = document.createElement("div");
  delBtn.innerText = "✖";
  likeBtn.innerText = "❤";
  commentText.innerHTML = text;
  delBtn.classList.add("delete-button");
  delBtn.addEventListener("click", () => {
    commentList.removeChild(commentBox);
  });
  likeBtn.classList.add("like-button");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("like");
  });
  commentBox.classList.add("comment-box");
  bottonBox.classList.add("botton-box");
  bottonBox.appendChild(delBtn);
  bottonBox.appendChild(likeBtn);
  commentBox.appendChild(commentText);
  commentBox.appendChild(bottonBox);
  commentList.appendChild(commentBox);
}

function handleClick() {
  attachComment(commentInput.value);
  commentInput.value = "";
  commentButton.disabled = true;
}

function useButton(event) {
  const inputedValue = event.target.value;
  commentButton.disabled = !inputedValue;
}

function handleEnter(event) {
  if (event.key === "Enter" && commentInput.value) {
    attachComment(commentInput.value);
    commentInput.value = "";
  }
}

function loadInput() {
  window.addEventListener("keypress", handleEnter);
  commentInput.addEventListener("keyup", useButton);
  commentButton.addEventListener("click", handleClick);
}

function init() {
  loadInput();
}

init();
