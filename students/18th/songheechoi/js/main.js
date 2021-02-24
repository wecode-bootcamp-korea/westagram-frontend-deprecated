
const commentInput = document.querySelector(".feed__myComment input");
const postButton = document.querySelector(".comment__btn-post")
const commentsList = document.querySelector(".feed__commentList");

const likeButton = 

commentInput.addEventListener("input",function(){
    // console.log(commentInput.value);
    if(commentInput.value){
        postButton.style.opacity ="1";
    }else{
        postButton.style.opacity ="0.3";
    }
})
commentInput.addEventListener("keyup", function(e){
    console.log(e);
    if(e.keyCode ===13&&commentInput.value){
        postButton.click();
    }
})
const postComment = function(inputValue){
    let comment = `<div class="comment">
                    <span class="comment__userId">songhee</span>
                    <span class="comment__contents"
                    >${inputValue}</span>
                    </div>
                    <i class="far fa-heart"></i>`;
    return comment;
}


postButton.addEventListener("click",function(){
    // alert(commentInput.value);
    let inputValue = commentInput.value;
    let row = document.createElement("div");
    row.innerHTML = postComment(inputValue);
    row.classList.add("comment-row");
    commentsList.appendChild(row);

    commentInput.value = "";
}) 