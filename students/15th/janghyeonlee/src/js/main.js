const commentSubmitBtn = document.querySelector('.feed-comment-upload-button button');
const commentInput = document.querySelector('.feed-new-comment-input');
const currentUser = "id4"
// 전역 변수로 있는 것이 불편하다. 클로저를 써서 해결해보고 싶다.
let commentSideInfo = document.getElementsByClassName('comment-side-info');

// 엔터 혹은 게시 버튼을 눌렀을 때 댓글을 업로드 하는 함수.
commentUpload = () => {
  let commentsList = document.getElementById('feed-comment-list');
  let newList = document.createElement('li');
  const newCommentInput = document.getElementsByClassName('feed-new-comment-input')[0].value;

  const newCommentHTML = `<p><span class="comment-userid">${currentUser} </span>${newCommentInput}</p>`;
  const commentSideHTML = `
  <div class="comment-side-info">
    <p class="comment-heart-number">
      0
    </p>
    <div class="comment-heart-button">
      <img src="src/img/heart.png" alt="comment-heart-button">
    </div>
    <p class="comment-delete-button">
      삭제
    </p>
  </div>`
  if(newCommentInput){
    newList.innerHTML = newCommentHTML+commentSideHTML;
    commentsList.appendChild(newList);
    commentInput.value = '';
    updateCommentNodes();
  }else{
    commentInput.placeholder = '빈 댓글을 달 수는 없습니다.';
  }
}

uploadIfEnterKey = (e) => {
  if(e.keyCode === 13){
    commentUpload();
  }
}

function increaseHeartNum(e) {
  // 하트를 누른 댓글에 해당하는 하트 수 HTML element
  const heartNumberElement = e.path[2].children[0];
  const currentHeartNum = Number(heartNumberElement.innerHTML)
  heartNumberElement.innerHTML = currentHeartNum +1;
}

function deleteComment(e) {
  // 삭제 버튼을 누른 댓글에 해당하는 댓글 li HTML element
  const commentElement = e.path[2];
  commentElement.remove();
  console.log("removed!")
  updateCommentNodes();
}

function handleCommentSideClick() {
  /* 
    commentSideInfo.child nodes
    [0]: p.comment-heart-number
    [1]: div.comment-heart-button
    [2]: p.comment-delet.button
  */
  for(let i=0; i<commentSideInfo.length; i++){
    // handle comment heart click 
    commentSideInfo[i].children[1].addEventListener('click', increaseHeartNum)
    // handle comment delete click
    commentSideInfo[i].children[2].addEventListener('click', deleteComment)
  }

}

function updateCommentNodes() {
  commentSideInfo = document.getElementsByClassName('comment-side-info');
  handleCommentSideClick();
}

init = () => {
  commentSubmitBtn.addEventListener('click', commentUpload);
  commentInput.addEventListener('keypress', uploadIfEnterKey);

  //update if comment already exists on feed.
  updateCommentNodes();
};

init();
