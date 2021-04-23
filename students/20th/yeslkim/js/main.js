const commentForm = document.commentForm,
    inputComment = commentForm.inputComment,
    submitBtn = commentForm.submitComment,
    likeBtns = document.querySelectorAll('.js-like-btn'),
    deleteBtns = document.querySelectorAll('.js-delete-btn');

function active() {
    submitBtn.disabled = inputComment.value.length > 0 ? false : true;
}

function addComment(e) {
    e.preventDefault();

    const p = document.createElement('p'),
        span = document.createElement('span'),
        likeBtn = document.createElement('button'),
        deleteBtn = document.createElement('button'),
        myId = document.querySelector('#user-profile .js-user-name').textContent,
        comment = document.createTextNode(inputComment.value),
        commentBox = document.querySelector('.js-comments');

    p.className = 'comment align-item-center';
    span.className = 'user-name';
    likeBtn.className = 'like-btn align-right js-like-btn';
    deleteBtn.className = 'delete-btn js-delete-btn';

    span.innerText = myId;
    likeBtn.innerHTML = `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-50 -45 580 580" xml:space="preserve">
            <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                C512,93.417,453.532,30,376,30z"/>
        </svg>`;
    deleteBtn.innerText = 'x';

    p.appendChild(span);
    p.appendChild(comment);
    p.appendChild(likeBtn);
    p.appendChild(deleteBtn);
    commentBox.appendChild(p);

    likeBtn.addEventListener('click', like);
    deleteBtn.addEventListener('click', deleteComment);
    inputComment.value = '';
}

function deleteComment() {
    this.parentNode.remove();
}

function like() {
    this.children[0].classList.toggle('clicked');
}

function init() {
    inputComment.addEventListener('keyup', active);
    submitBtn.addEventListener('click', addComment);
    likeBtns.forEach( btn => btn.addEventListener('click', like) );
    deleteBtns.forEach( btn => btn.addEventListener('click', deleteComment) );
}

init();