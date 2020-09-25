function add_comment() {
  const feedComments = document.querySelector('ul.feed-comments');
}

function activatePostButton(e) {
  const postButton = document.querySelector('.post-button');
  if (e.target.value.length > 0) {
    postButton.style.opacity = 1;
    postButton.style.cursor = 'pointer';
  } else {
    postButton.style.opacity = 0.3;
    postButton.style.cursor = 'default';
  }
}

const postCommentBox = document.querySelector('.post-comment-box');
postCommentBox.addEventListener('input', activatePostButton);


function isLiked(e) {
  if (e.target.getAttribute('src') == 'img/main/nav_menu_heart_icon.png') {
    return false;
  } else if (e.target.getAttribute('src') == 'img/main/onclick_icons/nav_menu_heart_icon_red.png') {
    return true;
  }
}

function isIconEnlarged(e) {
  const iconWidth = e.target.style.width;
  if (parseInt(iconWidth.substr(0,2)) <= 120) {
    return false;
  } else {
    return true;
  }
}

function changeHeartColor(e) {
  console.log(e.target.getAttribute('src'));
  if (!isLiked(e)) {
    e.target.setAttribute('src', 'img/main/onclick_icons/nav_menu_heart_icon_red.png');
    e.target.style.width = '120%';
  } else {
    e.target.setAttribute('src', 'img/main/nav_menu_heart_icon.png');
    e.target.style.width = '100%';
  }
}

const feedElement = document.querySelector('.feed-element');
const feedActionHeartIcon = feedElement.querySelectorAll('.feed-action-heart');

if (feedActionHeartIcon.length > 0) {
  feedActionHeartIcon.forEach(el => el.addEventListener('click', changeHeartColor));
}


const feedCommentHeartIcon = feedElement.querySelectorAll('.feed-comment-heart');
if (feedCommentHeartIcon.length > 0) {
  feedCommentHeartIcon.forEach(el => el.addEventListener('click', changeHeartColor));
}


function isTagSelected(e) {
  if (e.target.getAttribute('src') == 'img/main/nav_menu_tag_icon.png') {
    return false;
  } else if (e.target.getAttribute('src') == 'img/main/onclick_icons/nav_menu_tag_icon_black.png') {
    return true;
  }
}

function changeTagColor(e) {
  console.log(e.target.getAttribute('src'));
  if (!isTagSelected(e)) {
    e.target.setAttribute('src', 'img/main/onclick_icons/nav_menu_tag_icon_black.png');
    e.target.style.width = '120%';
  } else {
    e.target.setAttribute('src', 'img/main/nav_menu_tag_icon.png');
    e.target.style.width = '100%';
  }
}

const iconOriginal = {
  'heart': {
    'img-src': ''
  }
}

const iconAfterSelect = {
  'img-src': ''
}

function isIconSelected(e) {
  if (e.target.getAttribute('src') == iconOriginal['img-src']) {
    return false;
  } else if (e.target.getAttribute('src') == iconAfterSelect['img-src']) {
    return true;
  }
}

function changeIconColor(e) {
  if (!isIconSelected(e)) {
    e.target.setAttribute('src', iconAfterSelect(e));
    e.target.style.width = '120%';
  } else {
    e.target.setAttribute('src', iconOriginal(e));
    e.target.style.width = '100%';
  }
}

// const feedActionTagIcon = feedElement.querySelectorAll('.feed-action-tag');
// if (feedActionTagIcon.length > 0) {
//   feedActionTagIcon.forEach(el => el.addEventListener('click', changeTagColor));
// }

const feedActionTagIcon = feedElement.querySelectorAll('.feed-action-tag');
if (feedActionTagIcon.length > 0) {
  feedActionTagIcon.forEach(el => el.addEventListener('click', changeTagColor));
}