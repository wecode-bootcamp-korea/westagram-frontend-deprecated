const commentInput = document.querySelector("#commentsInput");
const commentPostBtn = document.querySelector("#commentsPost");
const commentList = document.getElementsByClassName('comments')[0];

document.addEventListener('keyup',function() {
    commentInput.value.length >= 1? commentPostBtn.style.opacity = "1" : commentPostBtn.style.opacity = "0.3";
})

commentPostBtn.addEventListener('click', function() {
    event.preventDefault();
    if(commentInput.value) {
        let newComment = document.createElement('li')
        newComment.innerHTML = `<span><span>jian</span> ${commentInput.value} </span><img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트">`;
        commentList.appendChild(newComment);
        this.value = "";
    }
})