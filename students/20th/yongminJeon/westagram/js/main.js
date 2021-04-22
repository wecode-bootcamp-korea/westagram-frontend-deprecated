'use strict';
// 댓글 작성 칸 입력값
const comment = document.querySelector('.section-article__commentInput');

// 댓글 남기기 함수
const leaveComment = function () {
  const commentValue = comment.value;
  const ulTag = document.querySelector('.section-article__comment');
  const listTag = document.createElement('li');
  ulTag.appendChild(listTag);
  listTag.innerHTML = `<div class='section-article__commentContents'><p><a class='section-article__fanslink' href='#'>yongmin</a> ${commentValue}</p><button class='section-article__commentLinkButton'><i class='far fa-heart'></i></button></div>`;
};

//엔터버튼 눌렀을때 작동

const pressEnter = function (e) {
  if (e.keyCode === 13) {
    leaveComment();
  }
};

// 댓글 작성시 게시 버튼 활성화
const activeCommentLeaveButton = function () {
  comment.addEventListener('keyup', function () {
    const commentValue = comment.value;
    const commentUploadButton = document.querySelector(
      '.section-article__commentUpload'
    );

    if (commentValue.length > 0) {
      commentUploadButton.classList.add('active');
      commentUploadButton.disabled = false;
      commentUploadButton.addEventListener('click', leaveComment);
    }

    if (commentValue.length === 0) {
      commentUploadButton.classList.remove('active');
      commentUploadButton.disabled = true;
    }
  });
  comment.addEventListener('keydown', pressEnter);
};

function init() {
  activeCommentLeaveButton();
}

init();
