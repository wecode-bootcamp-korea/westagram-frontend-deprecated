"use strict";

const commentPostBtn = document.getElementById('comment-btn');
const commentPostTextArea = document.getElementById('comment-input');
const commentList = document.querySelector('.feed-contents .reples .comment ul');


// 댓글 버튼으로 추가하기
commentPostBtn.addEventListener('click', function () {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span');
    const btn = document.createElement('btn');
    let commentPostTextAreaValue = commentPostTextArea.value;

    li.appendChild(a);
    li.appendChild(span);
    li.appendChild(btn);
    a.innerHTML = '홍효정';
    a.classList.add('name');
    btn.classList.add('comment-close');

    // textArea에 값이 0 이상일 경우
    if (commentPostTextAreaValue > 0) {
        span.innerHTML = commentPostTextAreaValue;
        commentList.appendChild(li);
    }
});

// 댓글 엔터로 추가하기
commentPostTextArea.addEventListener('keydown', function (e) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span');
    const btn = document.createElement('btn');
    let commentPostTextAreaValue = commentPostTextArea.value;

    li.appendChild(a);
    li.appendChild(span);
    li.appendChild(btn);
    a.innerHTML = '홍효정';
    a.classList.add('name');
    btn.classList.add('comment-close');

    // textArea에 값이 0 이상이고 keyCode가 13일 경우
    if (e.keyCode === 13 && commentPostTextAreaValue > 0) {
        span.innerHTML = commentPostTextAreaValue;
        commentList.appendChild(li);
        e.preventDefault();
    }
});

const gnbProfileIcon = document.querySelector('nav.gnb .icon-list > li.profile > a');
const gnbProfileIconViewer = document.getElementById('profile-viewer');
const hasClass = gnbProfileIconViewer.classList.contains('active');

// GNB 프로필리스트 클래스 토글 
gnbProfileIcon.addEventListener('click', function(e){
    e.preventDefault();
    gnbProfileIconViewer.classList.toggle('active');
});

// GNB 아이디 검색