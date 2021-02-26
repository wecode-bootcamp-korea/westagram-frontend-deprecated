
const commentInput = document.querySelector(".feed__myComment input");

const postButton = document.querySelector(".comment__btn-post")
// const postButton1 = document.getElementsByClassName("comment__btn-post")

const commentsList = document.querySelector(".feed__commentList");
const logo = document.querySelector(".logo");
// const commentLike = document.querySelector(".comment-row .fa-heart");
const bookmark = document.querySelector(".fa-bookmark");

const CLLICKED_CLASS = "fas";

// console.log(commentLike)

bookmark.addEventListener("click",function(){
    bookmark.classList.toggle(CLLICKED_CLASS);

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

// const likeButton = 
function setButtonStatus(){
    // console.log(postButton,postButton1);
    
    if(commentInput.value){
        postButton.style.opacity ="1";
    }else{
        postButton.style.opacity ="0.3";
    }
}
commentInput.addEventListener("input",setButtonStatus)

commentInput.addEventListener("keyup", function(e){
    // console.log(e);
    if(e.keyCode ===13&&commentInput.value){
        postButton.click();
    }
})
logo.addEventListener("click",function(){
    location.href = "./login.html";
})
postButton.addEventListener("click",function(){
    if(commentInput.value){
        // alert(commentInput.value);
        let inputValue = commentInput.value;
        let row = document.createElement("div");
        row.innerHTML = postComment(inputValue);
        row.classList.add("comment-row");
        commentsList.appendChild(row);
        const commentLike = row.querySelector(".fa-heart");
        commentLike.addEventListener("click",function(){
            commentLike.classList.toggle(CLLICKED_CLASS);
        })
        
        commentInput.value = "";
        setButtonStatus();
        
    }
}) 