// activateCommentBtn

const postCommentBtn = document.querySelector(".postCommentBtn");
const commentContent = document.querySelector(".feedCommentPostBox");
const commentsListContainer = document.querySelectorAll(
  ".commentsListContainer"
);

function activateCommentBtn() {
  let comment = commentContent.value;
  if (comment) {
    postCommentBtn.style.color = "#1E90FF";
  } else if (!comment) {
    postCommentBtn.style.color = "skyblue";
    return;
  }
}
commentContent.addEventListener("keyup", activateCommentBtn);

// add comment(postBtn)

function postComment() {
  let comment = commentContent.value;
  // if (commentContent.value == "") {
  //   alert("댓글을 입력해주세요");
  // } else {
    let commentBox = document.querySelector(".commentBox");
    let asideProfileAccount = document.querySelector(".asideProfileAccount")
      .innerText;
    commentBox.innerHTML += `
      <div class="commentBox">
        <span class="commentAccount">${asideProfileAccount}</span>
        <span class="comment">${comment}</span>
        <span><button class="commentIcon commentRemove"><i class="fas fa-trash"></i></button></span>
        <span><button class="commentIcon commentHeart"><i class="icon-heart-empty"></i></button></span>
      </div>
    `;
    commentContent.value = null;
    return;
  // }
}
postCommentBtn.addEventListener("click", postComment);

// add comment(enterKey)

commentContent.addEventListener("keydown", function (e) {

  if (e.keyCode === 13) {
    return postComment();
  }
});

//LikeComment

const LikeComment = document.querySelector('.commentHeart');

LikeComment.addEventListener('click', function(){
  
})



// 여기는 하다가 실패한 것들 기록중


// const myAccount = "hocheol_zhang"
//     document.querySelector('.commentAccount').style.fontWeight = "900";

//     const commentTemplate = {
//         <div class="commentsListContainer">
//         <span class="commentAccount">hocheol_zhang</span>
//         <p class="comment"></p>
//       </div>

// document.createElement('div');
// commentTag.innerHTML = comment
// let text = document.createTextNode('comment')
// newTag.appendChild(text);
// let element = document.getElementById('commentsList');
// element.appendChild(newTag);

// add comment (enterKey)
