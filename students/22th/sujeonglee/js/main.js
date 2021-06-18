'use strict';

const commentBox = document.getElementById('commnetBox');
const submitButton = document.getElementsByClassName('commentSubmit')[0];
const InputEnter = document.getElementById('userComment');

// Click 
submitButton.addEventListener('click', function addCommnetClick() {
  const addList = document.createElement('li');
  const addComment = document.getElementById('userComment').value;

  addList.innerHTML = `<span class="commentUserId">eessoo__</span>${addComment}`; 
  commentBox.appendChild(addList);
});

// Enter Press 
InputEnter.addEventListener('keypress', function addCommentEnter(event) {
  if (event.code === 'Enter') {
    const addList = document.createElement('li');
    const addComment = document.getElementById('userComment').value; 

    addList.innerHTML = `<span class="commentUserId">eessoo__</span>${addComment}`; 
    commentBox.appendChild(addList);
  }

});


