const btn = document.getElementById("myBtn");
const commentInput = document.querySelector(".comment");

commentInput.addEventListener("keyup", function () {
  let inputValue = commentInput.value;
  if (inputValue.length >= 1) {
    btn.style.color = "#0095f6";
    btn.style.fontWeight = 600;
  } else {
    btn.style.color = "#c0e0fd";
    btn.style.fontWeight = 500;
  }
});

//이 밑은 댓글 기능

const commentUl = document.getElementsByClassName("commentArea")[0];

function addComment() {
  const commentLi = document.createElement("li");
  const commentLikeBtn = document.createElement("button");
  const commentDelBtn = document.createElement("button");
  const comment = commentInput.value;

  commentLi.innerHTML = `
  <div class="comment-box">
  <span class="comment-id">perfumelim</span>
  <span class="comment-txt">${comment}</span>
  </div>`;

  commentUl.appendChild(commentLi);
}
