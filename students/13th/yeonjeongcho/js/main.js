const form = document.querySelector('.comment-box');
const input = document.querySelector('.comment-input');
const comment = document.querySelector('.comment');
const postBtn = document.querySelector('.comment-btn');
let idx = 0;

function init() {
  input.addEventListener('keyup',turnblue);
  form.addEventListener('submit', handleSubmit);
  postBtn.addEventListener('click', handleSubmit);
}

function turnblue(event) {
  if (input.value.length >= 1) postBtn.style.color = "#0096F6";
  else postBtn.style.color = "#C0E0FD";
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  showComments(currentValue);
  input.value = "";
}

function showComments(currentValue) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delBtn = document.createElement('button');

  delBtn.innerText = "x";
  span.innerText = currentValue;
  
  delBtn.setAttribute("onclick", `delateComments(${idx})`);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.className = "listName"+idx;
  idx++;

  delBtn.style.outline = "none";
  delBtn.style.backgroundColor = "#FAFAFA";
  delBtn.style.border = "none";

  comment.appendChild(li);
  li.style.listStyle = "none";
  li.style.fontSize = "14px";
}

function delateComments(idx) {
  comment.removeChild(comment.querySelector(`.listName${idx}`));  
} 

init();



