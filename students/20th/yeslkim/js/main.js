const commentForm = document.commentForm,
    inputComment = commentForm.inputComment,
    submitBtn = commentForm.submitComment;
    

function addComment(e) {
    e.preventDefault();

    const p = document.createElement('p'),
        span = document.createElement('span'),
        myId = document.querySelector('#user-profile .js-user-name').textContent,
        comment = document.createTextNode(` ${inputComment.value}`),
        commentBox = document.querySelector('.js-comments');

    span.className = 'user-name';
    span.innerText = myId;
    p.appendChild(span);
    p.appendChild(comment);
    commentBox.appendChild(p);
    inputComment.value = '';
}

function active() {
    submitBtn.disabled = inputComment.value.length > 0 ? false : true;
    return;
}

inputComment.addEventListener('keyup', active);
submitBtn.addEventListener('click', addComment);