const postButton = document.querySelector(".buttonBox");
const commmentInput = document.querySelector(".inputBox");
const commentsList = document.querySelector(".commentList");

const addComment = () => {
  const inputValue = commmentInput.value;
  const newValue = document.createElement("li");
  newValue.innerText = inputValue;
  commentsList.appendChild(newValue);
  commmentInput.value = "";
};

postButton.addEventListener("click", addComment);
