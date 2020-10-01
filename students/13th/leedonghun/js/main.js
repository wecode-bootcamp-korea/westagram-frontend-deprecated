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


const followersData = {
  'agst_1014': 'agst_1014.png',
  'alessa_bebe': 'alessa_bebe.png',
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
  'permanentstylelondon': 'permanentstylelondon.png',
  'phi_choi': 'phi_choi.png',
  'seo_nani': 'seo_nani.png',
  'seojuhyun_s': 'seojuhyun_s.png',
  'sk17rina': 'sk17rina.png',
  'stevelee_jh': 'stevelee_jh.png',
  'sunghopaik89': 'sunghopaik89.png',
  'sweetpotatos2': 'sweetpotatos2.png',
  'therake': 'therake.png',
  'thisisdklee': 'thisisdklee.png',
  'yueergu': 'yueergu.png',
  'wecode_bootcamp': 'wecode_bootcamp.png'
}

let followersIds = [];
let followersProfilePics = [];

for (let key in followersData) {
  followersIds.push(key);
  followersProfilePics.push(followersData[key]);
}

const story = document.querySelector('ul.story');
const storyArrowButtonRight = document.querySelector('div.story-arrow-button.right');
const storyArrowButtonLeft = document.querySelector('div.story-arrow-button.left');

const storySectionWidth = 610;
const storyItemWidth = 80;
const storyLastItemRightMargin = 14;

function slideStoryLeft() {
  const storyPosition = story.style.transform;
  const xCurrentStartIdx = (storyPosition.indexOf('-') === -1) ? storyPosition.indexOf('(') + 1 : storyPosition.indexOf('-') + 1;
  const xCurrentEndIdx = storyPosition.indexOf('%');
  const xCurrentAbs = Number(storyPosition.substring(xCurrentStartIdx, xCurrentEndIdx));
  console.log('xCurrentAbs: ' + xCurrentAbs);
  const xIncrement = ((storyItemWidth * 4) / storySectionWidth) * 100;
  const xRemainder = 100 - xIncrement;
  const storyTotalWidth = (((storyItemWidth * followersIds.length) + storyLastItemRightMargin) / storySectionWidth) * 100;
  const isMaxReached = xCurrentAbs + xIncrement >=  storyTotalWidth - 100;
  const xTranslated = isMaxReached ? (storyTotalWidth - 100) * -1 : (xCurrentAbs + xIncrement) * -1;
  console.log('isMaxReached?: ' + isMaxReached);
  console.log('xTranslated: ' + xTranslated);
  story.style.transform = `translate(${xTranslated}%, 0)`;
  story.style.transition = 'transform 600ms';
  storyArrowButtonRight.style.display = isMaxReached ? 'none' : 'flex';
  storyArrowButtonLeft.style.display = 'flex';
}

function slideStoryRight() {
  const storyPosition = story.style.transform;
  const xCurrentStartIdx = (storyPosition.indexOf('-') === -1) ? storyPosition.indexOf('(') + 1 : storyPosition.indexOf('-') + 1;
  const xCurrentEndIdx = storyPosition.indexOf('%');
  const xCurrentAbs = Number(storyPosition.substring(xCurrentStartIdx, xCurrentEndIdx));
  console.log('xCurrentAbs: ' + xCurrentAbs);
  const xIncrement = ((storyItemWidth * 4) / storySectionWidth) * 100;
  const xRemainder = 100 - xIncrement;
  const storyTotalWidth = (((storyItemWidth * followersIds.length) + storyLastItemRightMargin) / storySectionWidth) * 100;
  const wasMaxReached = xCurrentAbs + (xIncrement - xRemainder) >= storyTotalWidth - 100;
  const isMinReached = xCurrentAbs - xIncrement <= 0;
  const xTranslated = wasMaxReached ? (xCurrentAbs - xRemainder) * -1 : (isMinReached ? 0 : (xCurrentAbs - xIncrement) * -1);
  console.log('wasMaxReached?: ' + wasMaxReached);
  console.log('isMinReached?: ' + isMinReached);
  console.log('xTranslated: ' + xTranslated);
  story.style.transform = `translate(${xTranslated}%, 0)`;
  story.style.transition = 'transform 600ms';
  storyArrowButtonLeft.style.display = isMinReached ? 'none' : 'flex';
  storyArrowButtonRight.style.display = 'flex';
}

storyArrowButtonRight.addEventListener('click', slideStoryLeft);
storyArrowButtonLeft.addEventListener('click', slideStoryRight);



function generateStory(num) {
  const storyProfilePicImg = document.createElement('img');
  storyProfilePicImg.setAttribute('class', 'story-profile-pic');
  storyProfilePicImg.setAttribute('src', `img/main/user_followers/${followersProfilePics[num]}`);
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
  storyProfileId.innerHTML = `${followersIds[num]}`;
  const storyElementLink = document.createElement('a');
  storyElementLink.setAttribute('class', 'story-element-link');
  storyElementLink.setAttribute('href', '#');
  storyElementLink.appendChild(storyProfilePicOuterGlow);
  storyElementLink.appendChild(storyProfileId);
  const storyElement = document.createElement('li');
  storyElement.setAttribute('class', `story-element story-${num}`);
  storyElement.appendChild(storyElementLink);
  story.appendChild(storyElement);
}

function generateOrderedArr(min, max) {
  let newOrderedArr = [];
  for (let i=min; i<max; i++) {
    newOrderedArr.push(i);
  }
  return newOrderedArr;
}

function generateRandomOrderArr(orderedArr) {
  let randomOrderArr = [];
  while (orderedArr.length !== 0) {
    let randIdx = Math.floor(Math.random() * orderedArr.length);
    let randNum = orderedArr[randIdx];
    orderedArr.splice(randIdx, 1);
    randomOrderArr.push(randNum);
  }
  return randomOrderArr;
}

let followersNumArr = generateOrderedArr(0, followersIds.length);
let followersRandNumArr = generateRandomOrderArr(followersNumArr);

for (let i in followersRandNumArr) {
  generateStory(followersRandNumArr[i]);
}



const placesData = [
  '',
  'Seoul',
  'Yeouido',
  'Hannam-dong',
  'Euljiro',
  'Yongsan-gu',
  'Seocho-gu',
  'Gangnam-gu',
  'Chungdam-dong',
  'Incheon',
  'Busan',
  'Jeju',
  'Tokyo',
  'Osaka',
  'Kyoto',
  'Hokkaido, Japan',
  'Shanghai',
  'Beijing',
  'Chengdu',
  'Hong Kong',
  'New York',
  'Ithaca',
  'Los Angeles',
  'San Francisco',
  'Mountain View, California',
  'Cupertino, California',
  'Miami',
  'Boston',
  'Seattle',
  'Portland, Oregon',
  'Chicago',
  'Milano',
  'Napoli',
  'London',
  'Paris',
  'Geneva',
  'Frankfurt',
  'Barcelona',
  'Madrid',
  'Praha'
];

const feedPicsData = [
  'beef.png',
  'beef2.png',
  'homeparty.png',
  'pizza2.png',
  'sushi.png',
  'sushi2.png',
  'wines.png',
  'risotto.png',
  'asianfood.png',
  'roomservice.png',
  'snack.png',
  'macchiato.png',
  'porterhouse2.png',
  'barbeque.png',
  'steak.png'
]

const sampleFeedExpData = [
  'les girit~',
  'sooooo good',
  'love it!',
  'in love <3',
  'rockin the day',
  'this is so good',
  'yeaaaaaaaa',
  'let\'s begin!',
  'the best there is',
  'rollin on',
  'can\'t resist'
]

const sampleCommentsData = [
  'woahhh where is this??',
  'awesome!!!',
  'omg!!!!!!!!',
  'looks amazing! ><',
  'that looks soooooooo nice',
  'woah that\ looks fly',
  'wowwowowowww',
  'looks so goooooood',
  'i\'ll join you next time!',
  'hey hit me up!'
]

function generateFeed(picNum) {
  let profileRandNumArr = generateRandomOrderArr(generateOrderedArr(0, followersIds.length));
  let profileNum = profileRandNumArr[0];
  let profileNum2 = profileRandNumArr[1];
  let placeRandNumArr = generateRandomOrderArr(generateOrderedArr(0, placesData.length));
  let placeNum = placeRandNumArr[0];
  let expRandNumArr = generateRandomOrderArr(generateOrderedArr(0, sampleFeedExpData.length));
  let expNum = expRandNumArr[0];
  let commentRandNumArr = generateRandomOrderArr(generateOrderedArr(0, sampleCommentsData.length));
  let commentNum = commentRandNumArr[0];
  let randomCommentsCount = Math.floor(Math.random() * 3 + 1);
  const feedsDiv = document.querySelector('div.feeds');
  const feed = document.createElement('div');
  feed.className = `feed-element feed-${placeNum}`;
  feed.innerHTML = `
    <div class="feed-header">
      <div class="feed-profile-pic-outer-glow">
        <div class="feed-profile-pic-mid-white">
          <div class="feed-profile-pic">
            <a href="#" class="feed-profile-pic">
              <img src="img/main/user_followers/${followersProfilePics[profileNum]}" alt="story user profile picture" class="feed-profile-pic">
            </a>
          </div>
        </div>
      </div>
      <div class="feed-profile-id-n-place">
        <a href="" class="feed-profile-id">${followersIds[profileNum]}</a>
        <p class="feed-place">${placesData[placeNum]}</p>
      </div>
      <div class="feed-option">
        <img src="img/main/three_dots_horizontal.png" alt="feed option button" class="feed-option">
      </div>
    </div>
    <div class="feed-main">
      <img src="img/main/feed_pics/${feedPicsData[picNum]}" alt="feed picture" class="feed-main-pic">
    </div>
    <div class="feed-actions">
      <div class="feed-action feed-like">
        <img src="img/main/nav_menu_heart_icon.png" alt="feed like heart icon" class="feed-action-heart">
      </div>
      <div class="feed-action feed-comment">
        <img src="img/main/nav_menu_comment.png" alt="see comment icon" class="feed-action-comment">
      </div>
      <div class="feed-action feed--dm">
        <img src="img/main/nav_menu_dm_icon.png" alt="" class="feed-action-dm">
      </div>
      <div class="feed-action feed-tag">
        <img src="img/main/nav_menu_tag_icon.png" alt="" class="feed-action-tag">
      </div>
    </div>
    <div class="feed-likes">
      <div class="focused-liker-img">
        <img class=focused-liker-img src="img/main/user_followers/${followersProfilePics[profileNum2]}" alt="profile image of the focused person who liked the feed">
      </div>
        <p class="likes-count">Liked by <span>${followersIds[profileNum2]}</span> and <span>${Math.floor(Math.random() * 200 + 5)} others</span></p>
    </div>
      <div class="feed-exp-box">
      <a href="" class="feed-profile-id">${followersIds[profileNum]}</a>
      <p class="feed-exp">${sampleFeedExpData[expNum]}</p>
    </div>
    <ul class="feed-comments">
      <li class="feed-comment-item">
        <a href="" class="feed-profile-id">${followersIds[Math.floor(Math.random() * followersIds.length)]}</a>
        <p class="feed-comment">${sampleCommentsData[commentNum]}</p>
        <div class="feed-comment-like">
          <img src="img/main/nav_menu_heart_icon.png" alt="feed comment like heart icon" class="feed-comment-heart">
        </div>
      </li>
    </ul>
    <p class="feed-posted-time">${Math.floor(Math.random() * 10 + 2)} HOURS AGO</p>
    <div class="feed-post-comment">
      <input type="text" class="post-comment-box" placeholder="Add a comment...">
      <div class="post-button">Post</div>
    </div>
    `;
    feedsDiv.appendChild(feed);
  }
  
  
  let feedNumArr = generateOrderedArr(0, feedPicsData.length);
  let feedRandNumArr = generateRandomOrderArr(feedNumArr);
  
  for (let i in feedRandNumArr) {
    generateFeed(feedRandNumArr[i]);
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



const suggestedData = {
  'rolex': 'rolex.png',
  'wework': 'wework.png',
  'nusr_et': 'nusr_et.png',
  'davidbeckham': 'davidbeckham.png',
  'lamborghini': 'lamborghini.png',
  'ferrari': 'ferrari.png',
  'seoyejidaily': 'seoyejidaily.png',
  'porsche': 'porsche.png',
  'victoriassecret': 'victoriassecret.png',
  'disney': 'disney.png',
  'bentleymotors': 'bentleymotors.png',
  'cristiano': 'cristiano.png',
  'hermes': 'hermes.png',
  'palaceskateboards': 'palaceskateboards.png',
  'nike': 'nike.png',
  'rogerfederer': 'rogerfederer.png',
  'kingjames': 'kingjames.png',
  'lucascheon': 'lucascheon.png',
  'google': 'google.png',
  'apple': 'apple.png',
  'cornelluniversity': 'cornelluniversity.png',
  'teslamotors': 'teslamotors.png',
  'thisisbillgates': 'thisisbillgates.png',
  'momstouch_love': 'momstouch_love.png',
  'subway': 'subway.png',
  'kakaofriends_official': 'kakaofriends_official.png',
  'hublot': 'hublot.png',
  'patekphilippe': 'patekphilippe.png',
  'audemarspiguet': 'audemarspiguet.png',
  'yjoo_oh': 'yjoo_oh.png',
  'yj_loves': 'yj_loves.png'
}

let suggestedIds = [];
let suggestedProfilePics = [];

for (let key in suggestedData) {
  suggestedIds.push(key);
  suggestedProfilePics.push(suggestedData[key]);
}

function generateSuggestions(num) {
  let followedByStatementOptions = [
    `Followed by ${followersIds[Math.floor(Math.random() * followersIds.length)]}`,
    `Followed by ${followersIds[Math.floor(Math.random() * followersIds.length)]} +${Math.floor(Math.random() * 19) + 1} more`,
    'Suggested for you'
  ];
  const suggestionsList = document.querySelector('ul.suggestions-list');
  const suggestionItem = document.createElement('li');
  suggestionItem.className = `suggestion-item suggestion-item-${num}`;
  suggestionItem.innerHTML = `
    <div class="suggested-profile-pic">
      <a href="#" class="suggested-profile-pic">
        <img src="img/main/suggested/${suggestedProfilePics[num]}" alt="suggested user profile picture" class="suggested-profile-pic">
      </a>
    </div>
    <div class="suggested-profile-id-n-followers">
      <a href="" class="suggested-profile-id">${suggestedIds[num]}</a>
      <p class="followed-by">${followedByStatementOptions[Math.floor(Math.random() * 3)]}</p>
    </div>
    <a href="#" class="follow"><p class="follow">Follow</p></a>
  `;
  suggestionsList.appendChild(suggestionItem);
}

let suggestedNumArr = generateOrderedArr(0, suggestedIds.length);
let suggestedRandNumArr = generateRandomOrderArr(suggestedNumArr);

for (let i in suggestedRandNumArr) {
  if (i > 4) {
    break;
  }
  generateSuggestions(suggestedRandNumArr[i]);
}



