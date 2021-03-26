const commentBox = document.body.querySelector(".comment-write");
const commentInput = document.body.querySelector(".comment-inner");
const commentBtn = document.body.querySelector(".submit");
const comment = document.body.querySelector(".comment");
const friendComment = document.body.querySelector(".friend-content");

//키업했을때 게시 버튼 활성화
commentInput.addEventListener("keyup", function () {
    let commentText = commentInput.value;
    console.log('commentList keyup function');
    
    if (commentText.length >= 1){
        commentBtn.style.color = "#0094f6";
        commentBtn.style.fontWeight = "600";
    } else {
        commentBtn.style.color = "#0094f64b";
    }
});

// 클릭시 댓글 ul에 li 추가하기
commentBtn.addEventListener("click",function(){

    console.log("commentBtn click function");
    friendComment.appendChild.friendComment;
    
})

