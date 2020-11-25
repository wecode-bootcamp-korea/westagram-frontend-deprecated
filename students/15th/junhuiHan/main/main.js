const inputFeedComment = document.querySelector(
  '.main-feed-comment-form-input'
);

const feedCommentButton = document.querySelector(
  '.main-feed-comment-form-button'
);

const feedCommentUl = document.querySelector('.main-feed-comment-ul');

const userId = document.querySelector('.main-feed-head-profile_nickname')
  .innerText;

function addComment() {
  const commentValue = inputFeedComment.value;
  const addCommentIi = document.createElement('li');
  addCommentIi.className = 'main-feed-comment-ul-li';

  addCommentIi.innerHTML = `<span>${userId}</span> ${commentValue}`;
  feedCommentUl.appendChild(addCommentIi);
  inputFeedComment.value = '';
  return addCommentIi;
}

feedCommentButton.addEventListener('click', (event) => {
  addComment();
  event.preventDefault();
});

inputFeedComment.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addComment();
    event.preventDefault();
  }
});
