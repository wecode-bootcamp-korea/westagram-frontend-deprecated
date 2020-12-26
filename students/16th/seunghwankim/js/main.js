const enrollBtn = document.getElementById('commentEnrollBtn');
enrollBtn.addEventListener('click', e => {
    const commentBox = document.getElementsByClassName('comments')[0];
    const commentCont = document.getElementById('commentInput');
    const newComment = document.createElement('div');
    const commentFrame = `
        <span>1k3h_ksh</span>
        <span>${commentCont.value}</span>`;
    newComment.className = 'comment_line_container';
    newComment.innerHTML = commentFrame;
    commentBox.appendChild(newComment);
    commentCont.value = '';
})