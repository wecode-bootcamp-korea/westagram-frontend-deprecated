const btn = document.querySelector('.comment-btn');
const input = document.querySelector('.add-comment');

function addComment() {
    const commentContainer = document.getElementsByClassName('js-container')[0];
    const commentDiv = document.createElement('div');
    const commentTxt = input.value;

    commentDiv.className = 'comments-list';
    commentDiv.innerHTML = `<p class="comment-id">wecode_bootcamp</p> <p class="comment">${commentTxt}</p> <img class="comment-like" alt="like icon image" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">`;
    commentContainer.appendChild(commentDiv);

    input.value = '';
}

input.addEventListener('keydown', function() {
    if (window.event.keyCode === 13) {
        addComment();
    }
})

btn.addEventListener('click', function(){
    addComment();
})