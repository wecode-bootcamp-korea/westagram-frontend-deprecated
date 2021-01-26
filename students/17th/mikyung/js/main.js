const commentList = document.getElementsByClassName('comments')[0];
const commentInput = document.getElementsByClassName('textarea1')[0];
const commentBtn = document.getElementsByClassName('submit-comment')[0];

function updateComment() {
    if (commentInput.value) {
      let newComment = document.createElement('li');
      newComment.innerHTML = `
                <span>
                  <span class="comment_userID">ggiiiaa</span>
                  <span="comment2">&nbsp&nbsp${commentInput.value}</span>
                  <i class="far fa-heart"></i>
                </span> 
                `;
      newComment.className = 'comment_ul';
      commentList.appendChild(newComment);
      commentInput.value = '';
    }
  }

  commentInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      updateComment();
    }
  });

  commentBtn.addEventListener('click', updateComment);

  commentInput.addEventListener('keyup', function () {
    const comment = commentInput.value;
  
    if (comment.length > 0) {
      return commentBtn.removeAttribute('disabled');
    } else {
      return commentBtn.setAttribute('disabled', 'disabled');
    }
  });