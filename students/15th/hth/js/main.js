const $commentInput = document.querySelector(".comment-input");
const $inputButton = document.querySelector(".input-button");

const checkRealtimeValue = () => {
  const inputValue = document.querySelector(".comment-input").value;

  const disabledFalse = () => {
    $inputButton.classList.add("activate-button");
    $inputButton.disabled = false;
  };

  const disabledTrue = () => {
    $inputButton.classList.remove("activate-button");
    $inputButton.disabled = true;
  };

  inputValue ? disabledFalse() : disabledTrue();
};

const postComment = () => {
  const $ul = document.querySelector("ul");
  const $inputElement = document.createElement("span");
  const inputValue = document.querySelector(".comment-input").value;
  $inputElement.innerHTML = inputValue;
  const nickname = "kingth_man";
  const $commentElement = document.createElement("li");
  const $nicknameElement = document.createElement("a");
  $nicknameElement.href = "#";
  $nicknameElement.classList.add("comment-list-nickname");
  $nicknameElement.innerHTML = nickname;
  $commentElement.appendChild($nicknameElement);
  $commentElement.appendChild($inputElement);
  $ul.appendChild($commentElement);

  document.querySelector(".comment-input").value = "";
  $inputButton.classList.remove("activate-button");
  $inputButton.disabled = true;
};

$commentInput.addEventListener("keyup", checkRealtimeValue);

$inputButton.addEventListener("click", postComment);

$commentInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") postComment();
});
