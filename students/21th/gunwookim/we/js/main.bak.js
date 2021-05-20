const commentList = document.querySelector(".comment-list");
const commentText = document.querySelector(".comment-text");
const button = document.querySelector("button");

const buttonControler = (e) => {
  if (e.code === "Enter" && commentText.value.trim()) {
    submit();
  }
  button.disabled = commentText.value ? false : true;
};

const submit = () => {
  const input = commentText.value;
  const li = document.createElement("li");

  li.innerText = input;
  commentList.appendChild(li);

  commentText.value = "";
};

commentText.addEventListener("keyup", buttonControler);
button.addEventListener("click", submit);
