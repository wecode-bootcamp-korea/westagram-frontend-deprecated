const createButton = document.querySelector(".submitButton");
const commentBox = document.querySelector(".commentBox");
const comment = document.querySelector(".inputComment");
let commentList = [];

const createComment = (e) => {
  e.preventDefault();

  const div = document.createElement("div");
  const a = document.createElement("a");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const i = document.createElement("i");
  const commentValue = comment.value;
  const newId = commentList.length + 1;

  div.innerHTML = "";
  a.innerHTML = "안녕";
  span.innerHTML = commentValue;
  delBtn.innerHTML = "X";
  i.className = "far fa-heart likeIcon";

  delBtn.addEventListener("click", deleteComment);
  i.addEventListener("click", changeIColor);

  div.appendChild(a);
  div.appendChild(span);
  div.appendChild(delBtn);
  div.appendChild(i);
  commentBox.appendChild(div);

  div.className = "comment";
  div.id = newId;
  delBtn.className = "delBtn";
  i.id = 1;

  const list = {
    content: div,
    id: newId,
  };
  commentList.push(list);
};

const deleteComment = (e) => {
  e.preventDefault();
  const btn = e.target;
  const div = btn.parentNode;
  const comment = document.getElementById(div.id);
  comment.remove();
};

const changeIColor = (e) => {
  const colorId = e.target.id;

  if (colorId === "1") {
    e.target.setAttribute("style", "color:#ff2e2e;");
    e.target.setAttribute("id", "0");
  }

  if (colorId === "0") {
    e.target.setAttribute("style", "color:black;");
    e.target.setAttribute("id", "1");
  }
};

createButton.addEventListener("click", createComment);
