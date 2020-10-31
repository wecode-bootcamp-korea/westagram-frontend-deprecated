const textBox = document.querySelector('.comment-input');
const buttonClick = document.querySelector('.botton-box');
const newComments = document.querySelector('.new-comments');
const myProfileId = document.querySelector('.my-profile-id');
const commentForm = document.querySelector('.comment-form');

commentForm.addEventListener('submit', clickButton);

function clickButton(e) {
  e.preventDefault();
  const commentBox = document.createElement('span');
  const profileId = document.createElement('span');
  const br = document.createElement('br');
  const div = document.createElement('div');

  commentBox.className = 'newCommentBox';
  commentBox.classList.add('new-comments');
  div.classList.add('new-comments');
  commentBox.innerHTML = textBox.value;
  profileId.className = 'newCommentBox1';
  profileId.innerHTML = 'jooneybadger';

  if (textBox.value !== '') {
    newComments.appendChild(div) + div.appendChild(profileId) + div.appendChild(commentBox);
    textBox.value = null;
  }
}
