const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-form__comment-input");
const contentLikeBtn = document.querySelectorAll(".contents-container__btn")[0];

const handleLikeBtn = (event) => {
  const targetLikeBtn = event.target;
  targetLikeBtn.classList.toggle("like-btn-fill");
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
  const comment = commentInput.value; //input에 있는 value

  if (comment !== "") {
    //input에 있는 value가 비어있으면
    addTolist(comment); // input에 있는 value를 span&btn create해주는 함수로보냄(함수더럽다고 해서 안알려줌)
    commentInput.value = ""; //이미 value는 보냈으니 초기화.
  }
};

const mainInit = () => {
  commentForm.addEventListener("submit", handleCommentSubmit); //댓글 form에 eventlistner 추가
  contentLikeBtn.addEventListener("click", handleLikeBtn);
};

mainInit();
