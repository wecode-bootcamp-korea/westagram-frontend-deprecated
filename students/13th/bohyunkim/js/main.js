const commentText = document.querySelector(".comment-textarea");
const commentSubmit = document.querySelector(".comment-button");
const targetForm = document.querySelector(".comment");
const comments = document.querySelector(".comments-list");
const commentSingle = document.querySelector(".comment-singular");

commentText.addEventListener("keyup", function () {
  let commentLength = commentText.value.length;

  if (commentLength >= 1) {
    commentSubmit.style.color = "rgb(1,150,246)";
  } else {
    commentSubmit.style.color = "rgba(1, 150, 246, 0.3)";
  }
});

commentSubmit.addEventListener("click", function () {
  let commentContent = commentText.value;
  const commentContainer = document.createElement("li");
  const commentContainDiv = document.createElement("div");

  commentText.value = "";

  commentContainDiv.innerHTML = `
    <span class="comment-ID"><b>kimshelby</b></span>
    ${commentContent}
    `;

  comments.appendChild(commentContainer);
  commentContainer.appendChild(commentContainDiv);
});
