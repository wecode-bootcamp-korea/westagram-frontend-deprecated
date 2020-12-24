'use strict';

const commentBtns = document.querySelectorAll('.commentBtn'),
      commentInput = document.querySelector('.commentInput'),
      commentForm = document.querySelector('.commentForm');

function addCommentHandler(evt) {
  evt.preventDefault();
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

commentBtns.forEach((btn, idx) => {
  btn.addEventListener('click', addCommentHandler);
})

function init() {
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', addCommentHandler);
  })
}

init();