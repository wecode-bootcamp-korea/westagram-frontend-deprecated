const $commentInput = document.querySelector(".comment-input");
const $inputButton = document.querySelector(".input-button");
const $ulDiv = document.querySelector("ul");

$ulDiv.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    if (!event.target.classList.contains("fas")) {
      event.target.classList.add("fas");
      event.target.style.color = "#ED4956";
    } else {
      event.target.classList.remove("fas");
      event.target.style.color = "black";
    }
  }
  if (event.target.tagName === "BUTTON") {
    if (confirm("정말 삭제 하시겠습니까?") === true) {
      event.target.parentNode.remove();
    }
  }
});

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
  const nickname = "kingth_man";
  const $nicknameTag = `<a href="#" class="comment-list-nickname">${nickname}</a>`;
  const inputValue = document.querySelector(".comment-input").value;
  const $commentTextTag = `<span>${inputValue}</span>`;
  const $deleteButtonTag = `<button class="delete-button">...</button>`;
  const $likeButtonTag = `<i class="far fa-heart like-button"></i>`;
  const $commentElement = document.createElement("li");

  $commentElement.innerHTML =
    $nicknameTag + $commentTextTag + $deleteButtonTag + $likeButtonTag;
  document.querySelector("ul").appendChild($commentElement);
  document.querySelector(".comment-input").value = "";
  $inputButton.classList.remove("activate-button");
  $inputButton.disabled = true;
};

$commentInput.addEventListener("keyup", checkRealtimeValue);
$inputButton.addEventListener("click", postComment);
$commentInput.addEventListener("keyup", (event) => {
  const inputValue = document.querySelector(".comment-input").value;
  if (inputValue && event.key === "Enter") postComment();
});
