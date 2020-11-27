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
  feedCommentUl.innerHTML = `
    <li class="main-feed-comment-ul-li">
      <span>${userId}</span> 
      ${inputFeedComment.value}
    </li>
  `;
  inputFeedComment.value = '';
  return addCommentLi;
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
