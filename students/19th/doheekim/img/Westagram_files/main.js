const commentBox = document.body.querySelector(".comment-write");
const commentList = document.body.querySelector(".comment-write > li > input");
const commentBtn = document.body.querySelector("button");

commentBtn.addEventListener("click",function(){
    let commentText = commentList.Value;
    console.log('commentBtn click function')
})