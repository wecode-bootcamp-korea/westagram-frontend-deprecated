const newComment = document.querySelector('.newComment');
const comments = document.querySelector('.comments');
const postingButton = document.querySelector('.postingButton');

postingButton.addEventListener('click', function () {
  const newCommentText = document.createElement('div');
  newCommentText.classList.add('comment');
  newCommentText.innerHTML = `<span class="boldUserId">Yujung</span> ${newComment.value}`;
  comments.appendChild(newCommentText);
  newComment.value = '';
});
