'use strict';

const commentBtn = document.querySelector('.commentBtn'),
      commentInput = document.querySelector('.commentInput'),
      commentForm = document.querySelector('.commentForm');

function commentInputHandler() {
  const inputVal = document.querySelector('.commentInput').value;
  if (inputVal !== '') {
    commentBtn.removeAttribute("disabled");
    return;
  }
}

function addCommentPaint() {
  const inputVal = commentInput.value;
  const commentList = document.querySelector('.commentsList');
  const li = document.createElement('li');
  li.classList.add('commentItem');
  const aTag = document.createElement('a');
  aTag.setAttribute("href", "#");
  aTag.classList.add('userId');
  aTag.innerText = 'usersssss';
  li.appendChild(aTag);
  const pTag = document.createElement('p');
  pTag.innerText = inputVal;
  li.appendChild(pTag);
  const button = document.createElement('button');
  button.setAttribute("type", "button");
  button.innerHTML = `<img src="./assets/heart.png" alt="like" />`;
  li.appendChild(button);
  commentList.appendChild(li);
  commentInput.value = '';
}

function addCommentHandler(evt) {
  console.dir(evt.target);
  evt.preventDefault();
  addCommentPaint();
}

function init() {
  commentBtn.addEventListener('click', addCommentHandler);
  commentInput.addEventListener('input', commentInputHandler);
}

init();