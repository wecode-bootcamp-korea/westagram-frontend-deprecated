'use strict';
const comment = document.querySelector('.sectionArticleCommentInput');
const commentUploadButton = document.querySelector(
  '.sectionArticleCommentUpload'
);

function pressEnter(e) {
  if (e.keyCode === 13) {
    leaveComment();
  }
}

function eraseCommentAfterUpload() {
  comment.value = '';
  buttonDeactive();
}

function leaveComment() {
  const commentValue = comment.value;
  const ulTag = document.querySelector('.sectionArticleComment');
  const listTag = document.createElement('li');
  ulTag.appendChild(listTag);
  listTag.innerHTML = `<div class='sectionArticleCommentContents'>
    <p>
      <a class='sectionArticleFanslink' href='#'>
        yongmin
      </a> 
      ${commentValue}
    </p>
    <button class='sectionArticleCommentLinkButton'>
      <i class='far fa-heart'></i>
    </button>
  </div>`;
  eraseCommentAfterUpload();
}

function buttonActive() {
  commentUploadButton.classList.add('active');
  commentUploadButton.disabled = false;
  commentUploadButton.addEventListener('click', leaveComment);
  comment.addEventListener('keydown', pressEnter);
}

function buttonDeactive() {
  commentUploadButton.classList.remove('active');
  commentUploadButton.disabled = true;
  commentUploadButton.removeEventListener('click', leaveComment);
  comment.removeEventListener('keydown', pressEnter);
}

function commentLeaveButtonHandler() {
  comment.addEventListener('input', function () {
    const commentValue = comment.value;
    const buttonActiveCondition = commentValue.length > 0;
    const buttonDeactiveCondition = commentValue.length === 0;

    if (buttonActiveCondition) {
      buttonActive();
    }

    if (buttonDeactiveCondition) {
      buttonDeactive();
    }
  });
}

function init() {
  commentLeaveButtonHandler();
}

init();
