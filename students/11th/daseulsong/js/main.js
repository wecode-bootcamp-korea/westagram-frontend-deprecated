'user strict';

const commentInputBox = document.querySelector('.comment-box');
const newCommentBox = document.querySelector('.content__text');
const commentContent = document.createTextNode(commentInputBox.value);
const commentUsername = document.querySelector('.content__id');
const commentFirstClass = document.querySelector('.info__comment');

commentInputBox.addEventListener('keyup', (e) => {
  const postBtn = document.querySelector('.postBtn');
  if (commentInputBox.value !== '') {
    postBtn.style.color = '#2980b9';
  } else {
    postBtn.style.color = '#bbdefb';
  }
});

commentInputBox.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    commentInputBox.value = '';
    commentUsername.innerHTML = 'daseulsong';

    const ul = document.createElement('ul');
    const div = document.createElement('div');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const p = document.createElement('p');

    ul.classList.add('comment__content');
    commentFirstClass.appendChild(ul);
    div.classList.add('content__left');
    ul.appendChild(div);
    div.appendChild(li);
    span.classList.add('content__id');
    li.appendChild(span);
    p.classList.add('content__text');
    div.appendChild(p);
    div.className = 'content__left';
    newCommentBox.appendChild(commentContent);
  }
});
