const commentBox = document.body.querySelector(".comment-write");
const commentList = document.body.querySelector(".comment-inner");
const commentBtn = document.body.querySelector(".submit");

//키업했을때 게시 버튼 활성화
commentList.addEventListener("keyup", function () {
    let commentText = commentList.value;
    console.log('commentList keyup function');
    
    if (commentText.length >= 1){
        commentBtn.style.color = "#0094f6";
        commentBtn.style.fontWeight = "600";
    } else {
        commentBtn.style.color = "#0094f64b";
    }
});
