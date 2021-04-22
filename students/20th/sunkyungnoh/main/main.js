'use strict'
//검색창 에니메이션
const searchBar = document.querySelector('.search-section');

searchBar.addEventListener('click', () => {
    const searchDes = document.querySelector('.search')
    searchDes.classList.toggle('move')
})

//댓글 버튼 활성화
const commentInput = document.querySelector('.commentInput');
const commentBtn = document.querySelector('.commentBtn');

function active() {
    if (commentInput.value) {
        commentBtn.toggleAttribute('disabled');
        commentBtn.style.color = '#0095F6';
    } else {
        commentBtn.toggleAttribute('disabled');
        commentBtn.style.color = '#B3DFFC';
    }
};

commentInput.addEventListener('input', active);

//댓글 추가
function addComment(crrInput) {
    const commentModel = document.querySelector('.comment');
    const newCommentBox = commentModel.cloneNode(true);
    
    newCommentBox.querySelector(".CM").innerHTML = crrInput;

    const ul = document.querySelector('ul');
    ul.append(newCommentBox)
    
    newCommentBox.classList.toggle('invisible')
}

//댓글 추가 이벤트 실행
const commentForm = document.querySelector('form');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const crrInput = commentForm.elements.commentInput.value;
    addComment(crrInput);
    //입력값 초기화
    commentForm.elements.commentInput.value = '';
})









