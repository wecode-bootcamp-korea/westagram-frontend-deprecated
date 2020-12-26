const enrollBtn = document.getElementById('commentEnrollBtn');
const commentInput = document.getElementById('commentInput');
const commentBox = document.getElementsByClassName('comments')[0];
enrollBtn.setAttribute('disabled', 'true');

commentInput.addEventListener('keydown', e => {
    if ((e.key === 'Enter') && (commentInput.value.trim() !== '')) {
        postComment();
    }
})

commentInput.addEventListener('input', e => {
    if (commentInput.value.trim() === '') {
        enrollBtn.setAttribute('disabled', 'true');
    }
    if (commentInput.value.trim() !== '') {
        enrollBtn.removeAttribute('disabled');
    }
})

enrollBtn.addEventListener('click', e => {
    if (commentInput.value.trim() !== '') {
        postComment();
    }
})

function postComment() {
    const newComment = document.createElement('div');
    const commentFrame = `
        <span>1k3h_ksh</span>
        <span>${commentInput.value}</span>`;
    newComment.className = 'comment_line_container';
    newComment.innerHTML = commentFrame;
    commentBox.appendChild(newComment);
    commentInput.value = '';
}

// enrollBtn.disabled = true;
// enrollBtn.disabled = false;