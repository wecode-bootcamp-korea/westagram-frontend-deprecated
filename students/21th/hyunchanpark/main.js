const commentForm = document.querySelector(".comment-form");

const commentInput = document.querySelector(".comment-input");

const otherComments = document.querySelector(".other-comments");

const postButton = document.querySelector(".post-button");

let heartButtons = document.querySelectorAll(".fa-heart");

let removeButtons = document.querySelectorAll("fa-trash-alt");

const isDisabledButton = () => {
  let isAbleButton = false;
  if (commentInput.value.length !== 0) {
    postButton.disabled = false;
    isAbleButton = true;
  } else {
    postButton.disabled = true;
    isAbleButton = false;
  }

  return isAbleButton;
};

const toggleHeart = (node) => {
  node.addEventListener("click", () => {
    if (node.classList.contains("fas")) {
      node.classList.add("far");
      node.classList.remove("fas");
    } else if (node.classList.contains("far")) {
      node.classList.add("fas");
      node.classList.remove("far");
    }
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
  isDisabledButton();

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

  const isUpload = isDisabledButton();

  if (isUpload) {
    postButton.click();
  }
};

commentForm.addEventListener("submit", handleFormSubmit);

commentInput.addEventListener("keyup", isDisabledButton);

postButton.addEventListener("click", addComment);

heartButtons.forEach((heartButton) =>
  heartButton.addEventListener("click", toggleHeart(heartButton))
);
