'use strict';

const commentBtns = document.querySelectorAll('.commentBtn'),
      commentInputs = document.querySelectorAll('.commentInput'),
      commentForms = document.querySelectorAll('.commentForm');
      
// 댓글 추가 기능

function commentInputHandler(evt) {
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
  button.classList.add("addLikeToCommentBtn");
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

function clickCommentBtn() {
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', addCommentHandler);
  })
}

function inputSubmit() {
  commentForms.forEach((form) => {
    form.addEventListener('submit', addCommentHandler);
  })
}

function activeBtn() {
  commentInputs.forEach((input) => {
    input.addEventListener('input', commentInputHandler);
  })
}

//댓글 좋아요 기능
function addLikeHandler(evt) {
  const target = evt.target;
  if (target.classList[0] === 'liked') {
    target.setAttribute("src", "./assets/heart.png");
    target.classList.remove('liked');
  } else {
    target.setAttribute("src", "./assets/redheart.png");
    target.classList.add('liked');
  }
}

function addLike() {
  const likeBtns = document.querySelectorAll('.addLikeToCommentBtn');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', addLikeHandler);
  })
}

function init() {
  clickCommentBtn();
  inputSubmit();
  activeBtn();
  addLike();
}

init();