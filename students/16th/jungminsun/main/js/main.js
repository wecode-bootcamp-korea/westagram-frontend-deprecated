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

function addCommentPaint(inputIdx, listIdx) {
  const inputVal = commentInputs[inputIdx].value;
  const commentLists = document.querySelectorAll('.commentsList');
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
  commentLists[listIdx].appendChild(li);
  commentInputs[inputIdx].value = '';
}

function addCommentHandler(evt) {
  const targetId = evt.target.id;
  evt.preventDefault();
  if (targetId === 'btn1') {
    addCommentPaint(0, 0);
  }
  if (targetId === 'btn2') {
    addCommentPaint(1, 1);
  }

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