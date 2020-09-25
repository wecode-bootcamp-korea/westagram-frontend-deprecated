//document
const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-form__comment-input");
const contentLikeBtn = document.querySelectorAll(".contents-container__btn")[0];

const heartbeat = (targetLikeBtn) => {
  targetLikeBtn.classList.remove("heartbeat");
  targetLikeBtn.offsetWidth = targetLikeBtn.offsetWidth; // ???????????구글링해서 넣은 코드인데 이줄이 없으면 동작안함.. 너비가 뭔상관이쥐..?
  targetLikeBtn.classList.add("heartbeat");
};

const handleLikeBtn = (event) => {
  const targetLikeBtn = event.target;
  targetLikeBtn.classList.toggle("like-btn-fill");
  heartbeat(targetLikeBtn);
  // -> and re-adding the class
};

const delComment = (event) => {
  const targetcommentLi = event.target.parentNode.parentNode.parentNode;

  targetcommentLi.remove();
};

const addTolist = (comment) => {
  //댓글창에 넣을 element
  const comments = document.querySelector(".comments-list");
  const commentLi = document.createElement("li");
  const comentBtns = document.createElement("div");
  const commentLikeBtn = document.createElement("button");
  const commentDelBtn = document.createElement("button");

  commentLi.className = "comment-container";
  comentBtns.className = "comment-container__btns";
  commentLikeBtn.className = "comment-container__likeBtn";
  commentDelBtn.className = "comment-container__delBtn";

  commentLi.innerHTML = `
  <div class="comment-container__coment">
    <span class="comment-container__ID">k.minhhh</span>
    <span class="comment-container__text"> ${comment} </span>
  </div>`;
  commentDelBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

  comentBtns.appendChild(commentLikeBtn);
  comentBtns.appendChild(commentDelBtn);
  commentLi.appendChild(comentBtns);
  comments.appendChild(commentLi);
  commentDelBtn.addEventListener("click", delComment);
  commentLikeBtn.addEventListener("click", handleLikeBtn);
};

const handleCommentSubmit = (event) => {
  event.preventDefault();
  const comment = commentInput.value;
  if (comment !== "") {
    addTolist(comment);
    commentInput.value = "";
  }
};

const mainInit = () => {
  commentForm.addEventListener("submit", handleCommentSubmit); //댓글 form에 eventlistner 추가
  contentLikeBtn.addEventListener("click", handleLikeBtn);
};

mainInit();
