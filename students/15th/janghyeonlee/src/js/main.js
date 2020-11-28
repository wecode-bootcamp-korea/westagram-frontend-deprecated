import { dummyUsers, dummyStory, dummyRecommendUser } from './dummy_data.js';
const commentSubmitBtn = document.querySelector('.feed-comment-upload-button');
const commentInput = document.querySelector('.feed-new-comment-input');
const navSearchInput = document.querySelector('input.nav-search');
const navSearchUserModal = document.querySelector('section.nav-search-modal');
const CURRENT_USER_ID = "jhyeon_300";

function commentUpload() {
  let commentsList = document.getElementById('feed-comment-list');
  let newCommentList = document.createElement('li');
  const newCommentString = document.getElementsByClassName('feed-new-comment-input')[0].value;
  const newCommentHTML = `<p><span class="comment-userid">${CURRENT_USER_ID} </span>${newCommentString}</p>`;
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
  </div>
  `
  if(newCommentString) {
    newCommentList.innerHTML = newCommentHTML+commentSideHTML;
    commentsList.appendChild(newCommentList);
    commentInput.value = '';
    updateCommentNodes();
  }else{
    commentInput.placeholder = '빈 댓글을 달 수는 없습니다.';
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

function updateUserList() {
  if(!navSearchInput.value) {
    navSearchUserModal.style.display = "none";
  }else{
    navSearchUserModal.style.display = "block";
    makeUserList();
  }
}

function makeUserList() {
  const filteredUserList = getFilteredUserList();

  deleteUserList();
  createUserList(filteredUserList);
}

function getFilteredUserList() {
  const splitedSearchKeyword = navSearchInput.value.split(' ');
  let userListToShow = []
  dummyUsers.forEach((elem)=>{
    for(let i=0; i < splitedSearchKeyword.length; i++) {
      if(elem.includes(splitedSearchKeyword[i]) && splitedSearchKeyword[i]) {
        userListToShow.push(elem);
        break;
      }
    }
  })
  return userListToShow.sort()
}

function deleteUserList() {
  navSearchUserModal.innerHTML = "";
}

function createUserList(UserList) {
  const filteredUserNum = UserList.length; 
  for(let i=0; i < filteredUserNum; i++) {
    createUserElement(UserList[i]);
  }
}

function createUserElement(userName) {
  const newUser = document.createElement('div');
  newUser.classList.add('user-in-nav-search-modal');
  newUser.innerHTML = userName;
  navSearchUserModal.appendChild(newUser);
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

function toggleNavProfileModal(e) {
  const userProfileModal = document.querySelector('section.nav-profile-modal');
  const didClickedModal = e.target.classList[0] === 'nav-profile-modal';
  const didClickedProfile = e.target.classList[0] === 'nav-icon-profile';
  if(didClickedProfile) {
    userProfileModal.style.display = 'flex'
  }else if(userProfileModal.style.display && !didClickedModal) {
    userProfileModal.style.display = 'none'
  }
}

// 댓글 최신화 및 하트/삭제 event listener
function updateCommentNodes() {
  const commentSideInfo = document.getElementsByClassName('comment-side-info');
  for(let i=0; i < commentSideInfo.length; i++) {
    // handle comment heart click 
    commentSideInfo[i].children[1].addEventListener('click', increaseHeartNum)
    // handle comment delete click
    commentSideInfo[i].children[2].addEventListener('click', deleteComment)
  }
}

function renderStories() {
  const storyBox = document.getElementsByClassName('story-box')[0];
  dummyStory.forEach(story=>{
    const storyHtmlElement = document.createElement('figure');
    story = `<img src="${story.src}" alt="${story.alt}">`
    storyHtmlElement.classList.add('story-icon-profile', 'westa-border', 'westa-feed-padding-x');
    storyHtmlElement.innerHTML = story;
    storyBox.appendChild(storyHtmlElement);
  })
}

function renderRecommend() {
  const recommendUserBox = document.getElementsByClassName('aside-recommend-box')[0];
  dummyRecommendUser.forEach(user=>{
    const userHtmlElement = document.createElement('div');
    user = `
    <div class="aside-recommend-user-info">
      <figure class="aside-recommend-user-profile">
        <img src="${user.imgUrl}" alt="recommend ${user.userId} profile">
      </figure>
      <div class="aside-recommend-user-text-info">
        <p class="aside-recommend-user-id">
          ${user.userId}
        </p>
        <p class="aside-recommend-user-name">Follows you</p>
      </div>
    </div>
    <button class="aside-follow-recommend-user-button">팔로우</button>
    `
    userHtmlElement.classList.add('aside-recommend-user-box');
    userHtmlElement.innerHTML = user;
    recommendUserBox.appendChild(userHtmlElement);
  })
}

function init() {
  //update if comment already exists on feed.
  updateCommentNodes();
  renderStories();
  renderRecommend();
  commentSubmitBtn.addEventListener('click', commentUpload);
  commentInput.addEventListener('keypress', (e) => { if(e.keyCode === 13) commentUpload() } )
  navSearchInput.addEventListener('focus', onNavSearchFocus);
  navSearchInput.addEventListener('blur', onNavSearchBlur);
  document.addEventListener('click', toggleNavProfileModal);
};

init();
