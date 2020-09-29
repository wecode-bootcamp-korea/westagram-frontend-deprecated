"use strict";

const commentPostBtn = document.getElementById('comment-btn');
const commentPostTextArea = document.getElementById('comment-input');
const commentList = document.querySelector('.feed-contents .reples .comment ul');
const commentCloseBtn = document.querySelector('.feed-contents .reples .comment ul li .comment-close');
const commentLikeBtn = document.querySelector('.feed-contents .reples .comment ul li .comment-like');

commentCloseBtn.addEventListener('click', commentDelete);

// 댓글 frame
function commentListFrame(comment) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    const likebtn = document.createElement('button');

    li.appendChild(a);
    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(likebtn);
    a.innerHTML = 'wecode_bootcamp';
    a.classList.add('name');
    btn.classList.add('comment-close');
    likebtn.classList.add('comment-like');

    if (comment.length > 0) {
        span.innerHTML = comment;
        commentList.appendChild(li);
        commentPostTextArea.value = '';
    }

    btn.addEventListener('click', commentDelete);
    likebtn.addEventListener('click', commentLike);
}

// 댓글 삭제
function commentDelete(event) {
    event.target.parentNode.remove();
}

// 댓글 버튼으로 추가하기
commentPostBtn.addEventListener('click', function () {
    let commentPostTextAreaValue = commentPostTextArea.value;
    commentListFrame(commentPostTextAreaValue);
});

// 댓글 엔터로 추가하기
commentPostTextArea.addEventListener('keydown', function (event) {
    let commentPostTextAreaValue = commentPostTextArea.value;
    if (event.keyCode === 13) {
        event.preventDefault();
        commentListFrame(commentPostTextAreaValue);
    }
});

// 댓글 좋아요 클래스 토글
commentLikeBtn.addEventListener('click', commentLike);
function commentLike() {this.classList.toggle('active');}

const gnbProfileIcon = document.querySelector('nav.gnb .icon-list > li.profile > a > img');
const gnbProfileIconViewer = document.getElementById('profile-viewer');
const hasClass = gnbProfileIconViewer.classList.contains('active');

// GNB 프로필리스트
document.addEventListener('click', function (event) {
    if (event.target === gnbProfileIcon) {
        gnbProfileIconViewer.classList.toggle('active');
    } else {gnbProfileIconViewer.classList.remove('active');}
});

// 아이디 검색
const searchInput = document.getElementById('search-input');
const searchResult = document.querySelector('nav.gnb .search .search-result');
const searchResultList = document.querySelector('nav.gnb .search .search-result ul');
let idDataArray = ['강수명','구현정','김동현','김보경','김보라','김보현','김성태','김수연','김예진','김정현','김지안','김지훈','김창곤','김형욱','민경민','민지연','박재용','박현희','백경민','백은진','서수연','성규원','신은선','이동훈','이예린','이지영','임수현','임향수','전민승','정승호','정양효','조연정','조혜미','최하늘','함준호','허덕형','허소정','홍효정','황채영','김한나'];

searchInput.addEventListener('keyup', function () {
    let idDataLi = document.querySelectorAll('nav.gnb .search .search-result ul li.name');
    let filterWords = idDataArray.filter(wordcheck);
    searchResult.style.display = 'none';

    idDataLi.forEach(value => value.remove() );
    
    filterWords.forEach(value => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.appendChild(a);
        searchResultList.appendChild(li);
        li.classList.add('name');
        a.innerHTML = value;
        searchResult.style.display = 'block';
    });
});

let wordcheck = word => {
    if(word.startsWith(searchInput.value) && (searchInput.value)) {
        return word
    } 
}
