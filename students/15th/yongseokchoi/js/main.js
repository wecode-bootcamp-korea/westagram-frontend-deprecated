const inputComment = document.querySelector('.feed__comment__input');
const feedComments = document.querySelector('.feed__comments');
const feedBTN = document.querySelector('.feed__comment__button');

function addComment() {
  if (inputComment.value === '') {
    return;
  } else {
    const commentList = document.createElement('li');
    commentList.classList.add('feed__comment');
    commentList.innerHTML = `<span class="feed__comment__id">ys&nbsp&nbsp</span>${inputComment.value}`;
    feedComments.appendChild(commentList);
    commentList.scrollIntoView();
    inputComment.value = '';
  }
}

feedBTN.addEventListener('click', addComment);
inputComment.addEventListener('keyup', event => {
  if (event.keyCode == 13) {
    addComment();
  }
});
