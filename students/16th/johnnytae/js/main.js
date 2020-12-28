const postComment = document.getElementsByClassName('post_comment')[0];
const commentBody = document.getElementsByClassName('comment_body')[0];
const postButton = document.getElementsByClassName('post_button')[0];
const commentList = document.getElementsByClassName('comments')[0];
const userId = document.getElementsByClassName('user_id')[0];
const userComment = document.getElementsByClassName('user_comment')[0];

const addComment = () => {
  const add = document.createElement('li');
  const addId = document.createElement('span');
  const addCmt = document.createElement('span');
  addId.className = 'user_id';
  addCmt.className = 'user_comment';
  addId.textContent = userId.textContent;
  addCmt.textContent = ` ${commentBody.value}`;

  add.appendChild(addId);
  add.appendChild(addCmt);
  commentList.appendChild(add);
};

function activatePost() {
  if (!commentBody.value) {
    postButton.disabled = true;
    postButton.style.color = 'rgb(155, 184, 226)';
  } else {
    postButton.disabled = false;
    postButton.style.color = 'rgb(8, 98, 224)';
    postButton.style.cursor = 'pointer';
  }
}

postComment.addEventListener('submit', addComment);
commentBody.addEventListener('keyup', activatePost);
