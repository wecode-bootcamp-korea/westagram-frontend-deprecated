const commentForm = document.commentForm,
    inputComment = commentForm.inputComment,
    submitBtn = commentForm.submitComment,
    likeBtns = document.querySelectorAll('.js-like-btn > svg'),
    _LIKE_CLASSNAME = 'clicked';

function active() {
    submitBtn.disabled = inputComment.value.length > 0 ? false : true;
}

function addComment(e) {
    e.preventDefault();

    const p = document.createElement('p'),
        span = document.createElement('span'),
        myId = document.querySelector('#user-profile .js-user-name').textContent,
        comment = document.createTextNode(inputComment.value),
        commentBox = document.querySelector('.js-comments');

    span.className = 'user-name';
    p.className = 'comment align-item-center';
    span.innerText = myId;
    p.appendChild(span);
    p.appendChild(comment);
    commentBox.appendChild(p);
    inputComment.value = '';
}

function like() {
    this.classList.toggle(_LIKE_CLASSNAME);
}

function init() {
    inputComment.addEventListener('keyup', active);
    submitBtn.addEventListener('click', addComment);
    likeBtns.forEach( btn => btn.addEventListener('click', like) );
}

init();