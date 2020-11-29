const commentPostButton = document.getElementsByClassName('feed-comment-input-button')[0];
const instaId = document.getElementsByClassName('user-id')[0].innerHTML;
const commentSection = document.getElementsByClassName('board-message')[0];

const createAndAppendCommentElement = (commentInputValue) => {
    const addComment = document.createElement('div');
    addComment.innerHTML = `${instaId}&nbsp;&nbsp;${commentInputValue}`;
    commentSection.appendChild(addComment);
}
const postComment = (event) => {
    event.preventDefault();

    const commentInput = document.getElementsByClassName('feed-comment-input-content')[0];
    const commentInputValue = document.getElementsByClassName('feed-comment-input-content')[0].value;

    if (commentInputValue) {
        createAndAppendCommentElement(commentInputValue);
    }
    commentInput.value = ""; 
}
commentPostButton.addEventListener('click', postComment);
