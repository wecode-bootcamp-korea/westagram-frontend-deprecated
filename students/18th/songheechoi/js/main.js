
const commentInput = document.querySelector(".feed__myComment input");

const postButton = document.querySelector(".comment__btn-post")
const postButton1 = document.getElementsByClassName("comment__btn-post")

const commentsList = document.querySelector(".feed__commentList");
const logo = document.querySelector(".logo");

// const likeButton = 
function test(){
    // console.log(postButton,postButton1);
    if(commentInput.value){
        postButton.style.opacity ="1";
    }else{
        postButton.style.opacity ="0.3";
    }
}
commentInput.addEventListener("input",test)
commentInput.addEventListener("keyup", function(e){
    // console.log(e);
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

        commentInput.value = "";
        test();
        //SONGQ. 여기서 그냥 input 이벤트를 한번 발생하고싶은데 할수있는방법없나?? postButton.click()처럼..
        // postButton.style.opacity ="0.3";
        // postButton.input();

    }
}) 