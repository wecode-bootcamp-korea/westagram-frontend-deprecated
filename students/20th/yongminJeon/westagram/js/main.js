'use strict';
const comment = document.querySelector('.sectionArticleCommentInput');

const eraseCommentAfterUpload = function () {
  const commentUploadButton = document.querySelector(
    '.sectionArticleCommentUpload'
  );
  comment.value = '';
  commentUploadButton.classList.remove('active');
  commentUploadButton.disabled = true;
  commentUploadButton.removeEventListener('click', leaveComment);
  comment.removeEventListener('keydown', pressEnter);
};

const leaveComment = function () {
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
};

const pressEnter = function (e) {
  if (e.keyCode === 13) {
    leaveComment();
  }
};

const activeCommentLeaveButton = function () {
  comment.addEventListener('input', function () {
    const commentValue = comment.value;
    const commentUploadButton = document.querySelector(
      '.sectionArticleCommentUpload'
    );

    if (commentValue.length > 0) {
      commentUploadButton.classList.add('active');
      commentUploadButton.disabled = false;
      commentUploadButton.addEventListener('click', leaveComment);
      comment.addEventListener('keydown', pressEnter);
    }

    if (commentValue.length === 0) {
      commentUploadButton.classList.remove('active');
      commentUploadButton.disabled = true;
      commentUploadButton.removeEventListener('click', leaveComment);
      comment.removeEventListener('keydown', pressEnter);
    }
  });
};

function init() {
  activeCommentLeaveButton();
}

init();
