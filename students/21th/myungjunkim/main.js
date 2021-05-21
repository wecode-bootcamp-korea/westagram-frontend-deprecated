const commentList = document.querySelector(".js-comment-list"),
  commentTextarea = document.querySelector(".js-comment-textarea"),
  commentForm = document.querySelector(".js-comment-form"),
  commentButton = document.querySelector(".js-comment-button");

function handleSubmit(event) {
  event.preventDefault();
  const textareaValue = commentTextarea.value;
  paintComment(textareaValue);
  commentTextarea.value = "";
  commentButton.disabled = true;
}

function handleEnter(event) {
  const text = event;

  if (commentTextarea.value.length !== 0) {
    commentButton.disabled = false;
  }
  if (text.keyCode === 13) {
    if (commentTextarea.value.length !== 0) {
      event.preventDefault();
      commentButton.click();
    }
  }
}

function paintComment(text) {
  const li = document.createElement("li"),
    span = document.createElement("span"),
    delButton = document.createElement("button");
  heartButton = document.createElement("button");
  delButton.innerText = "✖️";
  heartButton.innerHTML = "좋아요";
  delButton.addEventListener("click", deleteComment);
  heartButton.addEventListener("click", heartComment);
  span.innerHTML = text;
  li.appendChild(span);
  li.appendChild(heartButton);
  li.appendChild(delButton);
  commentList.appendChild(li);
}

function deleteComment(event) {
  const button = event.target;
  const li = button.parentNode;
  commentList.removeChild(li);
}

function heartComment(event) {
  let buttonColor = event.target;
  if (buttonColor.style.color === "none") {
    buttonColor.style.color = "tomato";
  } else {
    buttonColor.style.color = "none";
  }
}

function init() {
  commentForm.addEventListener("submit", handleSubmit);
  commentTextarea.addEventListener("keyup", handleEnter);
}

init();
