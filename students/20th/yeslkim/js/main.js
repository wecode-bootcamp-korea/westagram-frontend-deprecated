const commentForm = document.commentForm,
    submitBtn = commentForm.submitComment,
    inputComment = commentForm.inputComment

function addComment(e) {
e.preventDefault();

const comment = inputComment.value,
    commentBox = document.querySelector('.js-comments'),
    p = document.createElement('p'),
    span = document.createElement('span'),
    commentNode = document.createTextNode(` ${comment}`),
    myId = document.querySelector('#user-profile .js-user-name').textContent;

span.className = 'user-name';
span.innerText = myId;
p.appendChild(span);
p.appendChild(commentNode);
commentBox.appendChild(p);
inputComment.value = '';
}

function active() {
    const comment = inputComment.value;
    submitBtn.disabled = comment.length > 0 ? false : true;
    return;
}

submitBtn.addEventListener('click', addComment);
inputComment.addEventListener('keyup', active);