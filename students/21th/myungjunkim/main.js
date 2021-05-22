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
  commentButton.style.color = "";
}

function handleEnter(event) {
  commentButton.style.color = "#0095f6";
  commentButton.disabled = false;
  if (event.keyCode === 13) {
    event.preventDefault();
    commentButton.click();
  }
}

function paintComment(text) {
  const li = document.createElement("li"),
    span = document.createElement("span"),
    b = document.createElement("b");
  (delButton = document.createElement("button")),
    (heartButton = document.createElement("button"));
  delButton.innerText = "✖️";
  heartButton.innerText = "좋아요";
  delButton.addEventListener("click", deleteComment);
  heartButton.addEventListener("click", heartLike);
  span.innerHTML = text;
  b.innerText = "myxxjun";
  li.appendChild(b);
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

function heartLike(event) {
  let likeButton = event.target;
  if (likeButton.style.color === "") {
    likeButton.style.color = "tomato";
  } else {
    likeButton.style.color = "";
  }
}

function init() {
  commentForm.addEventListener("submit", handleSubmit);
  commentTextarea.addEventListener("keyup", handleEnter);
}

init();
