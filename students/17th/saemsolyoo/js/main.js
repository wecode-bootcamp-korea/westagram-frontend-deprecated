const commentForm = document.querySelectorAll(".feed-comment-form");

for (let i = 0; i < commentForm.length; i++) {
  let form = commentForm[i];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let currentForm = event.target;
    let currentInputField = currentForm.querySelector("input");
    let currentInputValue = currentInputField.value;
    let currentCommentList =
      currentForm.parentElement.childNodes["5"].childNodes["5"];
    uploadComment(currentInputValue, currentCommentList);
    currentInputField.value = "";
  });

  form.addEventListener("input", (event) => {
    let submitBtn = event.target.parentElement["1"];
    event.target.value.length > 0
      ? submitBtn.removeAttribute("disabled")
      : submitBtn.setAttribute("disabled", "disabled");
  });
}

function uploadComment(comment, list) {
  let newComment = document.createElement("li");
  newComment.innerHTML = `
  <a href="#">saemsolyoo</a>
  <span>${comment}</span>
  `;
  list.appendChild(newComment);
}
