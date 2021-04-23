'user strict';

const idName = 'wychrischo ';
const comment = document.querySelector('.post-user__container');
const addButton = document.querySelector('.comments-post__button');
const textArea = document.querySelector('.comments-input__comment');

function commentAdd () {
  const newComment = textArea.value;
  const newDiv = document.createElement('div');
  newDiv.className = 'post-user';

  comment.append(newDiv);
  newDiv.innerHTML = `<div class = 'post-user'><span class = 'post-user__id'>${idName}</span> ${newComment}</div>`;
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

