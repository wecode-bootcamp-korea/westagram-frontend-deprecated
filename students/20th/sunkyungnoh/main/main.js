'use strict'
//댓글 버튼 활성화
const commentInput = document.querySelector('.commentInput');
const commentBtn = document.querySelector('.commentBtn');
console.log(commentBtn.innerHTML);

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

//
