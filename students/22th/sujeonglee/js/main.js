'use strict';

const commentBox = document.getElementById('commnetBox');
const submitButton = document.getElementsByClassName('commentSubmit')[0];
const InputEnter = document.getElementById('userComment');


submitButton.addEventListener('click', function() {
  const addList = document.createElement('li');
  const addComment = document.getElementById('userComment').value; 

  addList.innerHTML = addComment; 
  commentBox.appendChild(addList); 
});

InputEnter.addEventListener('keypress', function(event) {

  if (event.code === 'Enter') {
    const addList = document.createElement('li');
    const addComment = document.getElementById('userComment').value; 
    console.log(addComment);
    
    addList.innerHTML = addComment; 
    commentBox.appendChild(addList); 
  }

});