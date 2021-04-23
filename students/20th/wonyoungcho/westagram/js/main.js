'user strict';

const idName = 'wychrischo ';
const comment = document.querySelector('.post-user__container');
const addButton = document.querySelector('.comments-post__button');
const textArea = document.querySelector('.comments-input__comment');

function commentAdd () {
  const newComment = textArea.value;
  const newDiv = document.createElement('div');
  newDiv.className = 'post-user';

  let newLine = idName + newComment;
  comment.append(newDiv);
  newDiv.innerHTML = newLine;
  textArea.value = ''; 
  addButton.style.color = '#8abdff';
}

textArea.addEventListener('keydown', function(x) {
  addButton.style.color = '#0366D6';
  if (x.key === 'Enter') {
    commentAdd ();
  }
});

addButton.addEventListener('click', function() {
    commentAdd ();
})

