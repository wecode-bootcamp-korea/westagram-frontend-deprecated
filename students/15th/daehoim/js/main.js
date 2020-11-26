/*글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록 
createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.*/

const commentInput = document.getElementById('new_comment')
const submitBtn = document.getElementsByClassName('submit_comment')[0];
const newComment = document.getElementsByClassName('comments')[0];

submitBtn.addEventListener('click', function () {
    if (commentInput.value) {
        newList = document.createElement('li');
        newList.innerHTML = '<div><span class="commentUserID">compassionkorea </span><span class="commentMsg">' + commentInput.value + '</span></div><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" class="comment_heart" alt="comment_heart">';
        newComment.appendChild(newList)
        commentInput.value = ""
    }
})

commentInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13)
        if (commentInput.value) {
            newList = document.createElement('li');
            newList.innerHTML = '<div><span class="commentUserID">compassionkorea </span><span class="commentMsg">' + commentInput.value + '</span></div><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" class="comment_heart" alt="comment_heart">';
            newComment.appendChild(newList)
            commentInput.value = ""
        }
})
