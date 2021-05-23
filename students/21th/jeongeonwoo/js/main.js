const mainRight = document.querySelector("#main-right");
const inputComment = document.querySelectorAll(".article-bottom-input-comment");
const inputButton = document.querySelectorAll(".article-bottom-input-posting");
const commentText = document.querySelectorAll(".article-bottom-comment-box");

addHeartColor();

function moveFixedElement() {
  mainRight.style.left = `${167 + window.innerWidth / 2}px`;
  window.addEventListener("resize", () => {
    mainRight.style.left = `${167 + window.innerWidth / 2}px`;
  });
}
moveFixedElement();

function changeDisableButton() {
  for (let i = 0; i < inputComment.length; i++) {
    inputComment[i].addEventListener("keyup", () => {
      inputButton[i].disabled = !inputComment[i].value;
    });
  }
}
changeDisableButton();

function addComment() {
  for (let i = 0; i < inputButton.length; i++) {
    inputButton[i].addEventListener("click", () => {
      postButton(i);
    });
  }
}
addComment();

function createText(i) {
  return `<div class="article-bottom-comment text">
            raing_8<span> ${inputComment[i].value}</span>
            <span>
            <i class="fas fa-times"></i>
                <svg class="article-bottom-comment heart"
                aria-label="좋아요"
                height="12"
                viewBox="0 0 48 48"
                width="12">
                    <path></path>
                </svg>
            </span>
            </div>`;
}

function postButton(i) {
  commentText[i].insertAdjacentHTML("beforeend", createText(i));
  createText(i);
  inputComment[i].value = "";
  inputButton[i].disabled = true;

  addHeartColor();
  clearComment();
}

for (let i = 0; i < inputComment.length; i++) {
  inputComment[i].addEventListener("keypress", (e) => {
    if (e.code == "Enter" && inputComment[i].value.length !== 0) {
      postButton(i);
    }
  });
}

function addHeartColor() {
  const heartButton = document.querySelectorAll(".article-bottom-comment svg");
  for (let i = 0; i < heartButton.length; i++) {
    heartButton[i].addEventListener("click", (e) => {
      e.target.classList.toggle("red");
    });
  }
}

function clearComment() {
  const commentClearButton = document.querySelectorAll(".fas");
  for (let i = 0; i < commentClearButton.length; i++) {
    commentClearButton[i].addEventListener("click", (e) => {
      // e.target.createText(i).remove;
      console.log(createText(i));
      console.log(inputComment[i].value);
    });
  }
}
