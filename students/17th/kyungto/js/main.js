const memo = document.querySelector(".comments");
const comBtn = document.querySelector(".commentsBtn");

memo.addEventListener("keyup", function (event) {
  if (memo.value.length > 0) {
    comBtn.removeAttribute("disabled");
    comBtn.classList.add("commentsStart");
  } else {
    comBtn.classList.remove("commentsStart");
  }
});

const commentsSave = document.querySelector(".articleWrite");

comBtn.addEventListener("click", clickButton);

function clickButton() {
  const listItems = document.createElement("li");
  listItems.innerHTML = memo.value;
  commentsSave.appendChild(listItems);
}

memo.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    clickButton();
  }
});
