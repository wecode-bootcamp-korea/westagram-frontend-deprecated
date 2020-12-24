'use strict';

const commentBtns = document.querySelectorAll('.commentBtn'),
      commentInputs = document.querySelectorAll('.commentInput'),
      commentForm = document.querySelector('.commentForm');

function commentInputHandler(evt) {
  console.dir(evt.target);
  const targetVal = evt.target.value;
  if (evt.target.id === 'input1') {
    if (targetVal !== '') {
      commentBtns[0].removeAttribute('disabled');
      return;
    }
  }
  if (evt.target.id === 'input2') {
    if (targetVal !== '') {
      commentBtns[1].removeAttribute('disabled');
      return;
    }
  }
}

function addCommentPaint(targetId) {
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
  const targetId = evt.target.id;
  evt.preventDefault();
  addCommentPaint(targetId);
}

function init() {
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', addCommentHandler);
  })
  commentInputs.forEach((input) => {
    input.addEventListener('input', commentInputHandler);
  })
}

init();