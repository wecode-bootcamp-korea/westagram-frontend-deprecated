import { dummyUsers } from './dummy_users.js';
const commentSubmitBtn = document.querySelector('.feed-comment-upload-button button');
const commentInput = document.querySelector('.feed-new-comment-input');
const navSearchInput = document.querySelector('input.nav-search');
const navSearchUserModal = document.querySelector('section.nav-search-modal');

const currentUser = "jhyeon_300";

// 전역 변수로 있는 것이 불편하다. 클로저를 써서 해결해보고 싶다.
let commentSideInfo = document.getElementsByClassName('comment-side-info');

// 엔터 혹은 게시 버튼을 눌렀을 때 댓글을 업로드 하는 함수.
function commentUpload() {
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

function uploadIfEnterKey(e) {
  if(e.keyCode === 13){
    commentUpload();
  }
}

function increaseHeartNum(e) {
  // 하트를 누른 댓글에 해당하는 하트 수 HTML element
  const heartNumberElement = e.path[2].querySelector('.comment-heart-number');
  const currentHeartNum = Number(heartNumberElement.innerHTML);
  heartNumberElement.innerHTML = currentHeartNum +1;
}

function deleteComment(e) {
  // 삭제 버튼을 누른 댓글에 해당하는 댓글 li HTML element
  const commentElement = e.path[2];
  commentElement.remove();
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

function deleteUserList() {
  navSearchUserModal.innerHTML = "";
}

// 유저 검색 결과 알파벳 순으로 정렬
function getFilteredUserList() {
  const splitedSearchKeyword = navSearchInput.value.split(' ');
  let userList = []
  dummyUsers.forEach((elem)=>{
    for(let i=0; i<splitedSearchKeyword.length; i++){
      if(elem.includes(splitedSearchKeyword[i]) && splitedSearchKeyword[i]){
        userList.push(elem);
        break;
      }
    }
  })
  return userList.sort()
}

function makeUserList() {
  const filteredUserList = getFilteredUserList();

  deleteUserList();
  createUserList(filteredUserList);
}

function updateUserList() {
  if(!navSearchInput.value){
    navSearchUserModal.style.display = "none";
  }else{
    navSearchUserModal.style.display = "block";
    makeUserList();
  }
}

function onNavSearchFocus() {
  navSearchInput.style.backgroundColor = "white";
  navSearchInput.style.color = "black"
  navSearchInput.addEventListener('input', updateUserList);
}

function onNavSearchBlur() {
  navSearchInput.style.backgroundColor = "transparent";
  navSearchUserModal.style.display = "none";
  navSearchInput.style.color = "var(--darker-gray)"
}

function createUserElement(userName){
  let newUser = document.createElement('div');
  newUser.classList.add('user-in-nav-search-modal');
  newUser.innerHTML = userName;
  navSearchUserModal.appendChild(newUser);
}

function createUserList(UserList) {
  const filteredUserNum = UserList.length; 
  for(let i=0; i<filteredUserNum; i++){
    createUserElement(UserList[i]);
  }
}

function init() {
  commentSubmitBtn.addEventListener('click', commentUpload);
  commentInput.addEventListener('keypress', uploadIfEnterKey);
  
  navSearchInput.addEventListener('focus', onNavSearchFocus);
  navSearchInput.addEventListener('blur', onNavSearchBlur);
  //update if comment already exists on feed.
  updateCommentNodes();

};

init();
