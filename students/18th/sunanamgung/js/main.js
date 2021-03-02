const commentBtn = document.querySelector(".comment-submit");
const feedsContainer = document.querySelector(".comments-list");
const comment = document.querySelector("#comment");

function addComment(e){
  e.preventDefault();
    const newCommentHtml = `
    <li>
    <h3 class="user-name">wecoder18</h3>
    <span class="user-comment">${comment.value}</span>
    <i
      aria-label="좋아요"
      class="far fa-heart comment-like comment-btn"
    ></i>
    </li>
    `;
    
    feedsContainer.innerHTML += newCommentHtml;
    comment.value = '';
}

commentBtn.addEventListener('click', function(e) {
  if (
    comment.value !== "" &&
    comment.value.trim() !== ""
  ) {addComment(e);}
});

comment.addEventListener("keypress", function(e) {
  if (
    comment.value !== "" &&
    comment.value.trim() !== "" &&
    e.key === "Enter"
  ) {addComment(e);}
});

comment.addEventListener("keydown", colorChange);

function colorChange() {
  if (comment.value !== "" && comment.value.trim() !== "") {
    commentBtn.style.color = "#0095F6";
  } else if (comment.value.trim() == "") {
    return (commentBtn.style.color = "#C0E0FD");
  }
}