const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-input");
const otherComments = document.querySelector(".other-comments");
const postButton = document.querySelector(".post-button");
const heartButtons = document.querySelectorAll(".fa-heart");
const removeButtons = document.querySelectorAll("fa-trash-alt");
const searchInput = document.querySelector(".nav-search-bar");
const activeInput = document.querySelector(".active-input");
const inactiveInput = document.querySelector(".inactive-input");
const activeInputCancleButton = document.querySelector(".input-cancle");
const searchInputResult = document.querySelector(".search-results-container");
const searchResultsContainer = document.querySelector(".results-container");

const wordList = [
  "wecode_bootcamp",
  "wecoffee__",
  "we",
  "jiwoo",
  "hyun",
  "chan",
];

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

// const activeInputFocus = (bool) => {
//   bool ? activeInput.focus() : activeInput.blur();
// };

// const toggleFocusInput = () => {
//   console.log(document.activeElement.nodeName);
//   if (document.activeElement.nodeName === "BODY" || "INPUT") {
//     activeInput.focus();
//   } else {
//     activeInput.blur();
//   }
//   activeInput.focus();
// };
// console.log(document.activeElement.nodeName);

const changeZIndex = (value) => {
  inactiveInput.style.zIndex = value;
  // toggleFocusInput();
};

const showActiveInput = (bool) => {
  const isbool = bool;
  isbool ? changeZIndex("-5") : changeZIndex("0");
  activeInput.value = "";
};

const toggleShowSearchInputResult = () => {
  const isvisibility = searchInputResult.style.visibility;
  isvisibility === "visible"
    ? (searchInputResult.style.visibility = "hidden")
    : (searchInputResult.style.visibility = "visible");
};
const toggleSearchInput = (e) => {
  const isActive = inactiveInput.style.zIndex;
  isActive >= 0
    ? (showActiveInput(true), activeInput.focus())
    : (showActiveInput(false), activeInput.blur());

  toggleShowSearchInputResult();
};

const searchInputWord = (e) => {
  let word = e.target.value;
  let regExp = new RegExp("([a-zA-Z0-9]*)?" + word + "([a-zA-Z0-9]+)?");

  let newWords = wordList.filter((word) => regExp.test(word) === true);
  console.log(newWords);
  searchResultsContainer.innerHTML = "";
  newWords.forEach((word) => {
    searchResultsContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="results">
        <div class="result">
        <img src="./image/user-icon.jpg" alt="user님의 프로필 사진" />
          <div class="searched-user">
            <a class="searched-username" href="">
              ${word}
            </a>
          </div>
        </div>
      </li>`
    );
  });
};

commentForm.addEventListener("submit", handleFormSubmit);

commentInput.addEventListener("keyup", disabledButton);

postButton.addEventListener("click", addComment);

heartButtons.forEach((heartButton) =>
  heartButton.addEventListener("click", toggleHeart(heartButton))
);

searchInput.addEventListener("click", toggleSearchInput);

activeInput.addEventListener("keyup", searchInputWord);
