const btnOnOffComment = document.getElementsByClassName('write-comment')[0];

btnOnOffComment.addEventListener('keyup', function() {
  const comment = document.getElementsByClassName('write-comment')[0].value;
  const btn = document.getElementsByClassName('add-comment')[0];

  btn.disabled = comment.length > 0 ? false : true;
});

const commentBtnClick = document.getElementsByClassName('add-comment')[0];

commentBtnClick.addEventListener('click', function (){
  const commentValue = document.getElementsByClassName('write-comment')[0];
  const commentBox = document.getElementsByClassName('comment-box')[0];
  const commentUl = document.createElement('ul');
  const commentTitle = document.createElement('li');
  const commentText = document.createElement('li');
  const btn = document.getElementsByClassName('add-comment')[0];

  commentUl.className = "comment-text";
  commentTitle.innerHTML = "ryuvVv";
  commentTitle.className = "viewer-id";
  commentText.innerHTML = commentValue.value;
  commentText.className = "viewer-comment";
  commentUl.appendChild(commentTitle);
  commentUl.appendChild(commentText);
  commentBox.appendChild(commentUl);

  btn.disabled = commentValue.length > 0 ? false : true;
  commentValue.value = "";
  commentValue.focus();
});

const commentBtnEnter = document.getElementsByClassName('write-comment')[0];

commentBtnEnter.addEventListener('keypress', function(e) {
  const commentValue = document.getElementsByClassName('write-comment')[0];
  const commentBox = document.getElementsByClassName('comment-box')[0];
  const commentUl = document.createElement('ul');
  const commentTitle = document.createElement('li');
  const commentText = document.createElement('li');
  const btn = document.getElementsByClassName('add-comment')[0];

  if (e.keyCode === 13 && btn.disabled ===false) {
  commentUl.className = "comment-text";
  commentTitle.innerHTML = "ryuvVv";
  commentTitle.className = "viewer-id";
  commentText.innerHTML = commentValue.value;
  commentText.className = "viewer-comment";
  commentUl.appendChild(commentTitle);
  commentUl.appendChild(commentText);
  commentBox.appendChild(commentUl);

  btn.disabled = commentValue.length > 0 ? false : true;
  commentValue.value = "";
  }
});