'use strict';
const comment = document.querySelector('.section-article__commentInput');

const leaveComment = function () {
  const commentValue = comment.value;
  const ulTag = document.querySelector('.section-article__comment');
  const listTag = document.createElement('li');
  ulTag.appendChild(listTag);
  listTag.innerHTML = `<div class='section-article__commentContents'><p><a class='section-article__fanslink' href='#'>yongmin</a> ${commentValue}</p><button class='section-article__commentLinkButton'><i class='far fa-heart'></i></button></div>`;
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
      '.section-article__commentUpload'
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
