const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-input");
const otherComments = document.querySelector(".other-comments");
const postButton = document.querySelector(".post-button");
const heartButtons = document.querySelectorAll(".fa-heart");
const removeButtons = document.querySelectorAll("fa-trash-alt");

const disabledButton = () => {
  let isAbleButton = false;
  const isCommentInputValid = commentInput.value.length > 0;

  postButton.disabled = !isCommentInputValid;
  isAbleButton = isCommentInputValid;

  return isAbleButton;
};

const toggleHeart = (node) => {
  node.addEventListener("click", () => {
    const classToAdd = node.classList.contains("fas") ? "far" : "fas";
    const classToRemove = node.classList.contains("fas") ? "fas" : "far";

    node.classList.add(classToAdd);
    node.classList.remove(classToRemove);
  });
};

const addComment = (e) => {
  e.preventDefault();

  const newComment = commentInput.value;
  const userId = "loggedInUser";

  otherComments.insertAdjacentHTML(
    "beforeend",
    `<div class="comment">
        <div class="comment-content">
          <a href="" class="comment-id">${userId}</a>
          <span>${newComment.trim()}</span>
        </div>
        <button class="like-button">
          <i class="far fa-trash-alt"></i>
          <i class="far fa-heart"></i>
        </button>
    </div>`
  );

  commentInput.value = "";
  disabledButton();

  const heartButtons = document.querySelectorAll(".fa-heart");
  const newHeartButton = heartButtons[heartButtons.length - 1];

  toggleHeart(newHeartButton);

  const removeButtons = document.querySelectorAll(".fa-trash-alt");
  const newRemoveButtons = removeButtons[removeButtons.length - 1];

  const comments = document.querySelectorAll(".comment");
  const comment = comments[comments.length - 1];

  newRemoveButtons.addEventListener("click", (e) => {
    comment.remove();
  });
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const isUpload = disabledButton();

  if (isUpload) {
    postButton.click();
  }
};

commentForm.addEventListener("submit", handleFormSubmit);

commentInput.addEventListener("keyup", disabledButton);

postButton.addEventListener("click", addComment);

heartButtons.forEach((heartButton) =>
  heartButton.addEventListener("click", toggleHeart(heartButton))
);
