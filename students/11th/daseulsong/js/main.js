'use strict';
//  유저가 코멘트 '입력하는' 위치
const commentInputBox = document.querySelector('.comment-box');

// 새로 '생성된 코멘트가 들어갈' 위치
const newCommentBox = document.querySelector('.contentText');
const commentUsername = document.querySelector('.contentId');
const commentFirstClass = document.querySelector('.comment__container');

// 댓글 버튼 색깔 이벤트
commentInputBox.addEventListener('keyup', () => {
  const postBtn = document.querySelector('.postBtn');
  if (commentInputBox.value !== '') {
    postBtn.style.color = '#2980b9';
  } else {
    postBtn.style.color = '#bbdefb';
  }
});

// 댓글 등록 이벤트
commentInputBox.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    // '엔터' 받으면 댓글 칸에 내용 지움
    commentInputBox.value = e.target.value;

    // code below means pushing content user types to InputBox
    const infoComment = document.createElement('div');
    const contentLeft = document.createElement('div');
    const contentId = document.createElement('span');
    const contentText = document.createElement('p');
    const contentHeart = document.createElement('span');

    infoComment.classList.add('infoComment');
    contentLeft.classList.add('contentLeft');
    contentId.classList.add('contentId');
    contentText.classList.add('contentText');
    contentHeart.classList.add('contentHeart');

    // 아이디 자리에 댓글다는 유저이름 넣기
    contentId.innerHTML = 'daseulsongme';
    // 입력된 댓글내용을 dom으로 생성된 위치에 넣기
    contentText.innerHTML = commentInputBox.value;

    commentFirstClass.appendChild(infoComment);
    contentLeft.appendChild(contentId);
    infoComment.appendChild(contentLeft);
    contentLeft.appendChild(contentText);
    infoComment.appendChild(contentHeart);

    commentInputBox.value = '';
    contentHeart.innerHTML = '<i class="far fa-heart"></i>';
  }
});
