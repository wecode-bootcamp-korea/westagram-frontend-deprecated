// 전역 변수 선언
const commentInput = document.getElementsByClassName("commentInput")[0]; /*input*/
const commentButton = document.getElementsByClassName("commentAddBtn")[0];/*button*/
const commentsList = document.getElementsByClassName("commentsList")[0];/*ul*/
const form = document.querySelector('.commentBox');

// 코멘트 푸쉬 함수
function commentPush(e){
    const comments = document.createElement("li");
    comments.innerText = commentInput.value;
    commentsList.appendChild(comments);
    commentInput.value = "";
    e.preventDefault();
}

form.addEventListener('submit', commentPush);