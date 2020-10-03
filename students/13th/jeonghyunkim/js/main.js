const submit = document.querySelector(".submit-comment");
const input = document.querySelector(".input-comment");
const list = document.querySelector(".feeds-comments-head");

function addComment() {
  let newComment = document.createElement("li");
  newComment.innerHTML = `<span class="feeds-comments">Wecode<span class="upload-text">${input.value}</span></span>`;

  let commentBtn = document.createElement("div");
  let deleteBtn = document.createElement("img");
  deleteBtn.classList.add("comment-delete");
  deleteBtn.src = "img/X.png";

  let heartBtn = document.createElement("img");
  heartBtn.classList.add("comment-heart");
  heartBtn.src ="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";

  let fullHeartBtn = document.createElement("img");
  fullHeartBtn.classList.add("comment-fullheart");
  fullHeartBtn.src = "img/fullheart.png";

  let commentLike = document.createElement("div");
  commentLike.classList.add("comment-like");

  commentLike.appendChild(heartBtn);
  commentLike.appendChild(fullHeartBtn);
  commentBtn.appendChild(deleteBtn);
  commentBtn.appendChild(commentLike);
  newComment.appendChild(commentBtn);
  list.appendChild(newComment);
  input.value = "";
  submit.disabled = true;

  deleteBtn.addEventListener("click", function () {
    deleteBtn.parentNode.parentNode.remove();
  });

  commentLike.addEventListener("click", function () {
    if (heartBtn.style.display === "none") {
      heartBtn.style.display = "flex";
      fullHeartBtn.style.display = "none";
    } else {
      heartBtn.style.display = "none";
      fullHeartBtn.style.display = "flex";
    }
  });
}

submit.addEventListener("click", function () {
  if (input.value) {
    addComment();
  }
});

input.addEventListener("keyup", function () {
  if (input.value) {
    submit.disabled = false;
    submit.style.cursor = "pointer";
  } else {
    submit.disabled = true;
    submit.style.cursor = "default";
  }
});

input.addEventListener("keypress", function (e) {
  if (input.value) {
    if (e.keyCode === 13) {
      addComment();
    }
  }
});
