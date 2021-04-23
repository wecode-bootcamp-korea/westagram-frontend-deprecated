const commentForm = document.querySelector(".writeHereComment");

function AddComment(e) {
  const comment = document.createElement("p");
  const commentInput = document.querySelector(".writeHereComment input");
  const commentArea = document.querySelector(".feedComment");

  comment.innerHTML = `<span><a href="">댓글쓴사람ID</a> ${commentInput.value}</span>
    <span class="likeDelete">
      <i class="far fa-heart"></i>
      <i class="fas fa-times"></i>
    </span>`;

  const heart = comment.querySelector(".fa-heart");
  heart.addEventListener("click", () => {
    if (heart.classList.contains("far")) {
      heart.classList.replace("far", "fas");
    } else {
      heart.classList.replace("fas", "far");
    }
  });

  const commentDelete = comment.querySelector(".fa-times");
  commentDelete.addEventListener("click", () => {
    comment.innerHTML = "";
  });

  comment.classList.add("commentLine");
  commentArea.appendChild(comment);
  commentInput.value = "";
  e.preventDefault();
}

commentForm.addEventListener("submit", AddComment);
