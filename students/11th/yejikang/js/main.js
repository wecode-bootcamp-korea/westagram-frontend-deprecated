const commentContainer = document.querySelector('.commentContainer');
const commentForm = document.querySelector('.commentForm');
const commentBtn = commentForm.querySelector('button');
const inputComment = document.querySelector('.inputComment');

const userId = "yejiii_95";  

function addComment() {
    if(!inputComment.value.trim('')) return;

    const commentBox = document.createElement('div');
    const userIdSpan = document.createElement('span');
    const heartBtn = document.createElement('button');

    commentBox.classList.add('commentItem');
    userIdSpan.classList.add('infoBold','commentId');
    heartBtn.classList.add('commentHeartBtn', 'heart');

    const id = document.createTextNode(userId);
    userIdSpan.appendChild(id);
    commentBox.appendChild(userIdSpan);

    let text = document.createTextNode(inputComment.value);
    commentBox.appendChild(text);
    commentBox.appendChild(heartBtn);
    commentContainer.appendChild(commentBox);
    inputComment.value ='';
}

commentBtn.addEventListener('click',addComment);

inputComment.addEventListener('keyup',function(e) {
    if (e.keyCode === 13) {
        addComment();
    }
});