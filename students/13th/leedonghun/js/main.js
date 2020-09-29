const body = document.querySelector('body');
const navSearchBox = document.querySelector('.nav-search-box');
const navSearchIcon = document.querySelector('img.nav-search-icon');
const navSearchClearIcon = document.querySelector('img.nav-search-clear-icon');

function navSearchBoxSelected() {
  navSearchBox.style.textIndent = '12%';
  navSearchBox.style.color = 'black';
  navSearchIcon.style.left = '3%';
  navSearchClearIcon.style.display = 'block';
}

function navSearchBoxUnselected(e) {
  if (!e.target.matches('.nav-search-box, .nav-search-icon, .nav-search-clear-icon')) {
    navSearchBox.style.textIndent = '41%';
    navSearchBox.style.color = '#959595';
    navSearchIcon.style.left = '31.5%';
    navSearchClearIcon.style.display = 'none';
  }
}

function clearSearch() {
  navSearchBox.value = '';
  body.addEventListener('click', navSearchBoxUnselected);
  body.click();
}

navSearchBox.addEventListener('click', navSearchBoxSelected);
body.addEventListener('click', navSearchBoxUnselected);
navSearchClearIcon.addEventListener('click', clearSearch);

const navMenuItems = document.querySelectorAll('.nav-menu-item');
const navMenuAvatar = document.querySelector('.nav-menu-item.avatar');
const navMenuAvatarBorder = document.querySelector('.nav-menu-item.avatar-outer-border');
const navMenuHomeIcon = document.querySelector('.menu-item-icon.home-icon');
const navMenuDropdown = document.querySelector('div.nav-menu-dropdown');

function toggleDropdownDisplay() {
  const isDropdownShown = navMenuDropdown.style.display !== 'none';
  navMenuDropdown.style.display = isDropdownShown ? 'none' : 'block';
  isDropdownShown ? navMenuHomeIcon.setAttribute('src', 'img/main/nav_menu_home_icon.png') : navMenuHomeIcon.setAttribute('src', 'img/main/onclick_icons/nav_menu_home_icon_white.png');
  navMenuHomeIcon.style.width = isDropdownShown ? '130%' : '120%';
  navMenuAvatar.style.marginRight = isDropdownShown ? '0' : '-7.5%';
  navMenuAvatarBorder.style.border = isDropdownShown ? 'none' : '1.5px solid black';
  navMenuAvatar.addEventListener('click', toggleDropdownDisplay);
}

navMenuAvatar.addEventListener('click', toggleDropdownDisplay);

function add_comment() {
  const feedComments = document.querySelector('ul.feed-comments');
}

const postButton = document.querySelector('.post-button');

function activatePostButton(e) {
  const postInput = e.target.value.length > 0;
  postButton.style.opacity = postInput ? 1 : 0.3;
  postButton.style.cursor = postInput ? 'pointer' : 'default';
}

const postCommentBox = document.querySelector('.post-comment-box');
postCommentBox.addEventListener('input', activatePostButton);

const feedElement = document.querySelector('.feed-element');
const feedActionHeartIcon = feedElement.querySelectorAll('.feed-action-heart');
const feedCommentHeartIcon = feedElement.querySelectorAll('.feed-comment-heart');
const feedActionTagIcon = feedElement.querySelectorAll('.feed-action-tag');

let iconImgSrcOriginal = {};
feedActionHeartIcon.forEach(el => iconImgSrcOriginal[el.className] = 'img/main/nav_menu_heart_icon.png');
feedCommentHeartIcon.forEach(el => iconImgSrcOriginal[el.className] = 'img/main/nav_menu_heart_icon.png');
feedActionTagIcon.forEach(el => iconImgSrcOriginal[el.className] = 'img/main/nav_menu_tag_icon.png');

let iconImgSrcAfterSelect = {};
feedActionHeartIcon.forEach(el => iconImgSrcAfterSelect[el.className] = 'img/main/onclick_icons/nav_menu_heart_icon_red.png');
feedCommentHeartIcon.forEach(el => iconImgSrcAfterSelect[el.className] = 'img/main/onclick_icons/nav_menu_heart_icon_red.png');
feedActionTagIcon.forEach(el => iconImgSrcAfterSelect[el.className] = 'img/main/onclick_icons/nav_menu_tag_icon_black.png');

function isIconSelected(e) {
  if (e.target.getAttribute('src') === iconImgSrcOriginal[e.target.className]) {
    return false;
  } else if (e.target.getAttribute('src') === iconImgSrcAfterSelect[e.target.className]) {
    return true;
  }
}

function changeIconColor(e) {
  if (!isIconSelected(e)) {
    e.target.setAttribute('src', iconImgSrcAfterSelect[e.target.className]);
    e.target.style.width = '110%';
  } else {
    e.target.setAttribute('src', iconImgSrcOriginal[e.target.className]);
    e.target.style.width = '90%';
  }
}

if (feedActionHeartIcon.length > 0) {
  feedActionHeartIcon.forEach(el => el.addEventListener('click', changeIconColor));
}

if (feedCommentHeartIcon.length > 0) {
  feedCommentHeartIcon.forEach(el => el.addEventListener('click', changeIconColor));
}

if (feedActionTagIcon.length > 0) {
  feedActionTagIcon.forEach(el => el.addEventListener('click', changeIconColor));
}

function postComment() {
  if (postCommentBox.value.length > 0) {
    const feedComments = document.querySelector('.feed-comments');
    const newCommentPoster = document.createElement('a')
    newCommentPoster.setAttribute('href','');
    newCommentPoster.setAttribute('class', 'feed-profile-id');
    const currentAccountUser = document.querySelector('p.account-profile-id').innerText;
    newCommentPoster.innerHTML = currentAccountUser;
    const newCommentContent = document.createElement('p');
    newCommentContent.setAttribute('class', 'feed-comment');
    const commentContent = postCommentBox.value;
    newCommentContent.innerHTML = commentContent;
    const newCommentHeartIcon = document.createElement('img');
    newCommentHeartIcon.setAttribute('src', 'img/main/nav_menu_heart_icon.png');
    newCommentHeartIcon.setAttribute('alt', 'feed comment like heart icon');
    newCommentHeartIcon.setAttribute('class', 'feed-comment-heart');
    newCommentHeartIcon.addEventListener('click', changeIconColor);
    const newCommentHeartIconDiv = document.createElement('div');
    newCommentHeartIconDiv.setAttribute('class', 'feed-comment-like');
    newCommentHeartIconDiv.appendChild(newCommentHeartIcon);
    const newFeedComment = document.createElement('li');
    newFeedComment.setAttribute('class', 'feed-comment-item');
    newFeedComment.appendChild(newCommentPoster);
    newFeedComment.appendChild(newCommentContent);
    newFeedComment.appendChild(newCommentHeartIconDiv);
    feedComments.appendChild(newFeedComment);
    postCommentBox.value = '';
    postButton.style.opacity = 0.3;
    postButton.style.cursor = 'default';
    postButton.disabled = "true";
  }
}

postCommentBox.addEventListener('keyup', function(e) {
  if(e.keyCode === 13) {
    postComment();
  }
});
postButton.addEventListener('click', postComment);

const story = document.querySelector('ul.story');
const storyArrowButtonRight = document.querySelector('div.story-arrow-button.right');
const storyArrowButtonLeft = document.querySelector('div.story-arrow-button.left');

function slideStoryLeft() {
  const storyPosition = story.style.transform;
  const xCorCurrentStartIdx = storyPosition.indexOf('-') === -1 ? storyPosition.indexOf('(') + 1 : storyPosition.indexOf('-') + 1;
  const xCorCurrentEndIdx = storyPosition.indexOf('%');
  const xCorCurrentAbs = Number(storyPosition.substring(xCorCurrentStartIdx, xCorCurrentEndIdx));
  const xCorIncrement = 52;
  const isMaxReached = xCorCurrentAbs + xCorIncrement >= 100;
  const isMinReached = xCorCurrentAbs + xCorIncrement <= 0;
  const xCorTranslated = isMaxReached ? -100 : (xCorCurrentAbs + xCorIncrement) * -1;
  story.style.transform = `translate(${xCorTranslated}%, 0)`;
  story.style.transition = 'transform 600ms';
  storyArrowButtonRight.style.display = isMaxReached ? 'none' : 'flex';
  storyArrowButtonLeft.style.display = isMinReached ? 'none' : 'flex';
}

function slideStoryRight() {
  const storyPosition = story.style.transform;
  const originalPosition = story.style.transform === 'translate(-0, 0)';
  const xCorCurrentStartIdx = storyPosition.indexOf('-') + 1;
  const xCorCurrentEndIdx = storyPosition.indexOf('%');
  const xCorCurrentAbs = Number(storyPosition.substring(xCorCurrentStartIdx, xCorCurrentEndIdx));
  const xCorIncrement = -48;
  const isMaxReached = xCorCurrentAbs + xCorIncrement >= 100;
  const isMinReached = xCorCurrentAbs + xCorIncrement <= 4;
  const xCorTranslated = isMinReached ? 0 : (xCorCurrentAbs + xCorIncrement) * -1;
  story.style.transform = `translate(${xCorTranslated}%, 0)`;
  story.style.transition = 'transform 600ms';
  storyArrowButtonLeft.style.display = isMinReached ? 'none' : 'flex';
  storyArrowButtonRight.style.display = isMaxReached ? 'none' : 'flex';
}


storyArrowButtonRight.addEventListener('click', slideStoryLeft);
storyArrowButtonLeft.addEventListener('click', slideStoryRight);

const userFollowers = {
  'agst_1014': 'agst_1014.png',
  'alessa_bebe': 'alessa_bebe.png' ,
  'arnocee': 'arnocee.png',
  'ashkkny': 'ashkkny.png',
  'blacq_swan': 'blacq_swan.png',
  'bydaeun': 'bydaeun.png',
  'chanjinni': 'chanjinni.png',
  'clairesyyoon25': 'clairesyyoon25.png',
  'dongkyun_woo': 'dongkyun_woo.png',
  'estherjyn': 'estherjyn.png',
  'haein_stella': 'haein_stella.png',
  'howon92': 'howon92.png',
  'jupo_park': 'jupo_park.png',
  'khan89_gb': 'khan89_gb.png',
  'knoparablem': 'knoparablem.png',
  'ldosy': 'ldosy.png',
  'minoonooo': 'minoonooo.png',
  'paulchoi24': 'paulchoi24.png',
  'phi_choi': 'phi_choi.png',
  'porsche': 'porsche.png',
  'seo_nani': 'seo_nani.png',
  'sk17rina': 'sk17rina.png',
  'stevelee_jh': 'stevelee_jh.png',
  'sweetpotatos2': 'sweetpotatos2.png',
  'therake': 'therake.png',
  'thisisdklee': 'thisisdklee.png',
  'yueergu': 'yueergu.png'
}

let userFollowersIds = [];
let userFollowersProfilePics = [];

for (let key in userFollowers) {
  userFollowersIds.push(key);
  userFollowersProfilePics.push(userFollowers[key]);
}

function generateStory(num) {
  console.log('generating story...');
  const randNum = Math.floor(Math.random() * num);
  const storyProfilePicImg = document.createElement('img');
  storyProfilePicImg.setAttribute('class', 'story-profile-pic');
  storyProfilePicImg.setAttribute('src', `img/main/user_followers/${userFollowersProfilePics[randNum]}`);
  const storyProfilePicDiv = document.createElement('div');
  storyProfilePicDiv.setAttribute('class', 'story-profile-pic');
  storyProfilePicDiv.appendChild(storyProfilePicImg);
  const storyProfilePicMidWhiteDiv = document.createElement('div');
  storyProfilePicMidWhiteDiv.setAttribute('class', 'story-profile-pic-mid-white');
  storyProfilePicMidWhiteDiv.appendChild(storyProfilePicDiv);
  const storyProfilePicOuterGlow = document.createElement('div');
  storyProfilePicOuterGlow.setAttribute('class', 'story-profile-pic-outer-glow');
  storyProfilePicOuterGlow.appendChild(storyProfilePicMidWhiteDiv);
  const storyProfileId = document.createElement('p');
  storyProfileId.setAttribute('class', 'story-profile-id');
  storyProfileId.innerHTML = `${userFollowersIds[randNum]}`;
  const storyElementLink = document.createElement('a');
  storyElementLink.setAttribute('class', 'story-element-link');
  storyElementLink.setAttribute('href', '#');
  storyElementLink.appendChild(storyProfilePicOuterGlow);
  storyElementLink.appendChild(storyProfileId);
  const storyElement = document.createElement('li');
  storyElement.setAttribute('class', `story-element story-${randNum}`);
  storyElement.appendChild(storyElementLink);
  story.appendChild(storyElement);
  console.log('story generation complete');
}

for (let i=userFollowersIds.length-1; i>=0; i--) {
  generateStory(i);
}

// let randomOrderList = [];

// function generateRandomOrderList() {
//   for (let i=userFollowersIds.length-1; i>=0; i--) {
//     let randNum = Math.floor(Math.random * i);
//     randomOrderList.push(randNum);
//   }
// }








