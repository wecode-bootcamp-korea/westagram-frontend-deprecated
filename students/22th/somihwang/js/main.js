//selectors
const commentBtn = document.querySelector(".commentBtn");
const commentList = document.querySelector(".commentList");
const commentInput = document.querySelector(".commentInput");

//eventListeners
const init =()=>{
commentInput.addEventListener("keyup", colorChange);
commentBtn.addEventListener("click", addComment);
commentList.addEventListener("click", deleteComment);
}

init();
//functions
//Post 버튼 색상변경기능
function colorChange(){
    if(commentInput.value){
        commentBtn.classList.add("activate")
    }else if(!commentInput.value){
        commentBtn.classList.remove("activate")
    }
};

//댓글추가기능
function addComment(e) {
    //댓글 새로고침 방지
    e.preventDefault();
    
    //add comment box div
    const commentBox = document.createElement("li");
    commentBox.classList.add("commentBox");
    
    //add id
    const newIdSpan = document.createElement("span");
    const userID = document.querySelector(".profileID").textContent;
    newIdSpan.classList.add("igID");
    newIdSpan.innerHTML = userID;
    commentBox.appendChild(newIdSpan);

    //add comment content
    const newCommentContent = document.createElement("span");
    newCommentContent.classList.add("commentContent");
    newCommentContent.innerText = commentInput.value;
    commentBox.appendChild(newCommentContent);

    //add bin button
    const binbutton = document.createElement("i");
    binbutton.classList.add("deleteBtn", "fal", "fa-trash");
    commentBox.appendChild(binbutton);

    if(commentInput.value){
        //appendchild
        commentList.appendChild(commentBox);
        //clear input
        commentInput.value = "";
    }
};

//댓글 삭제기능
function deleteComment(e) {
    const item = e.target;
    const itemComment = item.parentElement;

    if (item.classList[0] === "deleteBtn"){
        itemComment.remove();
    }
}

//아이디 검색 기능
function searchID() {

}