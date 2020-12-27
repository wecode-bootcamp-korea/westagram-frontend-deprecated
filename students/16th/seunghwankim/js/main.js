const enrollBtn = document.getElementById('commentEnrollBtn');
const commentInput = document.getElementById('commentInput');
const commentBox = document.getElementsByClassName('comments')[0];
enrollBtn.setAttribute('disabled', 'true');

// Enter key로 댓글 게시
commentInput.addEventListener('keydown', e => {
    if ((e.key === 'Enter') && (commentInput.value.trim() !== '')) {
        enrollBtn.setAttribute('disabled', 'true');
        postComment();
    }
})

// 게시 버튼 활성화/비활성화 
commentInput.addEventListener('input', e => {
    if (commentInput.value.trim() === '') {
        enrollBtn.setAttribute('disabled', 'true');
    }
    if (commentInput.value.trim() !== '') {
        enrollBtn.removeAttribute('disabled');
    }
})

// 게시 버튼 클릭으로 댓글 게시
enrollBtn.addEventListener('click', e => {
    if (commentInput.value.trim() !== '') {
        enrollBtn.setAttribute('disabled', 'true');
        postComment();
    }
})

// 댓글 입력창 내용을 댓글창에 추가 시키는 함수
function postComment() {
    const newComment = document.createElement('div');
    const commentFrame = `
        <span>1k3h_sh</span>
        <span>${commentInput.value}</span>`;
    newComment.className = 'comment_line_container';
    newComment.innerHTML = commentFrame;
    commentBox.appendChild(newComment);
    commentInput.value = '';
}