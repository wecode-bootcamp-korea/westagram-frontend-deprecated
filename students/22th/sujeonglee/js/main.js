'use strict';

const commentBox = document.getElementById('commnetBox');
const submitButton = document.getElementsByClassName('commentSubmit')[0];
const InputEnter = document.getElementById('userComment');

// Click - Commnet
submitButton.addEventListener('click', function addCommnetClick() {
  const addList = document.createElement('li');
  const addComment = document.getElementById('userComment').value;

  addList.innerHTML = `<span class="commentUserId">eessoo__</span>${addComment}`; 
  commentBox.appendChild(addList);
  document.getElementById('userComment').value='';
});

// Enter Press - Commnet
InputEnter.addEventListener('keypress', function addCommentEnter(event) {
  const addList = document.createElement('li');
  const addComment = document.getElementById('userComment').value; 

  if (event.code === 'Enter') {
    addList.innerHTML = `<span class="commentUserId">eessoo__</span>${addComment}`; 
    commentBox.appendChild(addList);
    document.getElementById('userComment').value='';
  }
});

