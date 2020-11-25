const commentSubmitBtn = document.querySelector('.feed-comment-upload-button button');
const commentInput = document.querySelector('.feed-new-comment-input');
const currentUser = "id4"

commentUpload = () => {
  let commentsList = document.getElementById('feed-comment-list');
  let newList = document.createElement('li');
  const newCommentInput = document.getElementsByClassName('feed-new-comment-input')[0].value;

  const newCommentHTML = `<span class="comment-userid">${currentUser} </span>${newCommentInput}`;
  if(newCommentInput){
    newList.innerHTML = newCommentHTML;
    commentsList.appendChild(newList);
    commentInput.value = '';
  }else{
    commentInput.placeholder = '빈 댓글을 달 수는 없습니다.';
  }
}

uploadIfEnterKey = (e) => {
  if(e.keyCode === 13){
    commentUpload();
  }
}

init = () => {
  commentSubmitBtn.addEventListener('click', commentUpload);
  commentInput.addEventListener('keypress', uploadIfEnterKey);
};

init();