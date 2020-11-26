const inputComment = document.querySelector('.feed__comment__input');
const feedComments = document.querySelector('.feed__comments');
const feedBTN = document.querySelector('.feed__comment__button');

function addComment() {
  const feedComment = document.createElement('li');
  feedComment.classList.add('feed__comment');
  feedComment.innerText = inputComment.value;
  feedComments.appendChild(feedComment);
  feedComment.scrollIntoView();
  inputComment.value = '';
}

feedBTN.addEventListener('click', addComment);
inputComment.addEventListener('keyup', event => {
  if (event.keyCode == 13) {
    addComment();
  }
});
