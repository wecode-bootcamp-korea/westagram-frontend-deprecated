function addComment() {
  const comments = document.querySelector(".commentList");
  const commentsLi = document.createElement("li");
  const commentsButtonBox = document.createElement("div");
  const commentInput = document.querySelector(".commentInput");
  const comment = commentInput.value;

  commentsLi.innerHTML = `<div class="commentInner">${comment}
         <div>`;

  comments.appendChild(commentsLi);
  commentsLi.appendChild(commentsButtonBox);

  commentInput.value = " ";
}

const inBtn = document.querySelector("#psButton");
inBtn.addEventListener("click", addComment);
