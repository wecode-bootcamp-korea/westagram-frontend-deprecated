const Submit = document.querySelector(".submit-comment");
const Input = document.querySelector(".input-comment");
const List = document.querySelector(".feeds-comments-head");

Submit.addEventListener("click", function () {
  if (Input.value) {
    let newComment = document.createElement("li");
    let newValue = Input.value;
    newComment.innerHTML = `<div class="feeds-comments">Wecode</div><span class="upload-text">${newValue}</span>`;
    List.appendChild(newComment);
    Input.value = "";
  }
});
