// 1. 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
// * createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.


/* <section id="feed-info-wrap">
<p class="feed-info"><b>좋아요 28개</b></p>
<p class="feed-info"><b>kimshelby</b><span>&nbsp 맛있겠지? 히히히</span></p>

<ul class="comments-list">
  <li class="comment-container"> 
    <div class="comment-content">
      <p class="comment-ID"><b>stephaniekeem</b><span class="comment-text">&nbsp 맛있겠다...</span></p>
    </div>
  </li>
  <li class="comment-container"> 
    <div class="comment-content">
      <p class="comment-ID"><b>sopheloaf</b><span class="comment-text">&nbsp 너만 먹니???</span></p>
    </div>
  </li>
</ul>

<p class="small-font">15시간 전</p> */}


const commentText = document.getElementsByClassName("comment-textarea")[0];
const commentSubmit = document.getElementsByClassName("comment-button")[0];
const targetForm = document.querySelector(".comment");
const commentContent = commentText.value;

commentText.addEventListener("keyup", function () {
    let commentLength = commentText.value.length;
    console.log(commentLength);
    if (commentLength >= 1) {
        commentSubmit.style.Color = "#0095F6";
    } else {
        commentSubmit.style.Color = "#F7FBFE";
    }
}
);

commentSubmit.addEventListener ("click", function () {
    const comments = document.querySelector(".comments-list");
    const commentID = document.createElement("li");

    const appendLi = comments.appendChild(commendsID);
    
    commentID.innerHTML = commentContent;
}
);

// const handleCommentSubmit = (e) =>
//     e.preventDefault();
//     const comment = document.getElementById("comment-textarea").value;
//     if (comment) {
//         addComment(comment);
//         document.getElementById("comment-textarea").value = "";
//     }
// };

// const deleteComment = (event) => {
//     const targetcommentLi = event.target.parentNode.parentNode;
//     targetcommentLi.remove();
// };

// const addComment = (comment) => {
//     const comments = document.querySelector(".comments-list");
//     const commentLi = document.createElement("li");
//     const commentBtns = document.createElement("div");
//     const commentLikeBtn = document.createElement("button");
//     const commentDelBtn = doocument.createElement("button");

//     commentLi.className = "list-container";
//     commentBtns.className = "btns-container";
//     commentLikeBtn.className = "likeBtn=container";
//     commentDelBtn.className = "deleteBtn-container"

//     commentLi.innerHTML = `
//     <div class="comment-content">
//         <p class="comment-ID"><b>본인의 아이디</b><span class="comment-text">&nbsp ${comment}</span></p>
//     </div>
//     `;

//     commentDelBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

//     commentBtns.appendChild(commentLikeBtn);
//     commentBtns.appendChild(commentDelBtn);

//     commentLi.appendChild(commentBtns);

//     comments.appendChild(commentLi);
//     commentDelBtn.addEventListener("click", deleteComment);
//     commentLikeBtn.addEventListener("click", handleLikeBtn);

// };

