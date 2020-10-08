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

btn.addEventListener("click", addComment);

//이 밑은 댓글 기능

const deleteComment = (event) => {
  const targetLi = event.target.parentNode.parentNode;
  targetLi.remove();
};

const commentUl = document.getElementsByClassName("commentArea")[0];

function addComment() {
  const commentLi = document.createElement("li");
  const comment = commentInput.value;

  commentLi.innerHTML = `
  <span class="comment-id">perfumelim</span>
  ${comment}
  <button class="delBtn">삭제</button>
  `;

  const delBtn = document.querySelector(".delBtn");
  delBtn.addEventListener("click", deleteComment);

  commentUl.appendChild(commentLi);
}
