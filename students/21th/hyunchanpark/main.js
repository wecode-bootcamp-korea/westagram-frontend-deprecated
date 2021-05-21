const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-input");
const otherComments = document.querySelector(".other-comments");

const postButton = document.querySelector('.post-button');

const isDisabledButton = () => {
  let isAbleButton = false;
  if(commentInput.value.length !== 0) {
    postButton.disabled = false;
    isAbleButton = true;
  } else {
  postButton.disabled = true;
  isAbleButton = false;
  }

  return isAbleButton;
}

const addComment = (e) => {
  e.preventDefault();

  const newComment = commentInput.value;
  const userId = "loggedInUser";

  otherComments.insertAdjacentHTML(
    "beforeend",
    `<div class="comment">
      <a href="" class="comment-id">${userId}</a>
      <span>${newComment.trim()}</span>
    </div>`
  );

  commentInput.value = "";
  isDisabledButton();
};


const handleFormSubmit = (e) => {
  e.preventDefault();

  const isUpload = isDisabledButton();

  if(isUpload) {
    postButton.click();
  }
};

commentForm.addEventListener("submit", handleFormSubmit);

commentInput.addEventListener('keyup', isDisabledButton);

postButton.addEventListener('click', addComment);