'user strict';

const idName = 'wychrischo ';
const comment = document.querySelector('.postUserContainer');
const addButton = document.querySelector('.commentsPostButton');
const textArea = document.querySelector('.commentsInputComment');

function commentAdd () {
  const newComment = textArea.value;
  const newDiv = document.createElement('div');
  newDiv.className = 'post-user';

  comment.append(newDiv);
  newDiv.innerHTML = `<div class = 'postUser'><span class = 'postUserId'>${idName}</span> ${newComment}</div>`;
  textArea.value = ''; 
  addButton.style.color = '#8abdff';
}

textArea.addEventListener('keypress', function(event) {
  addButton.style.color = '#0366D6';
  if (event.key === 'Enter') {
    commentAdd();
  }
});

addButton.addEventListener('click', function() {
    commentAdd();
});

