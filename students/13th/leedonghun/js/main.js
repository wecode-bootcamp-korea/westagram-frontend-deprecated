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


function changeHeartColor(e) {
  console.log('clicked heart!');
  function isLiked() {
    if (e.target.src = "../img/main/nav-menu_heart_icon.png") {
      return false;
    } else if (e.target.src = "../img/main/onclick_icons/nav_menu_heart_icon_red.png") {
      return true;
    }
  }
  
  if (!isLiked()) {
    console.log('not yet liked!');
    e.target.src = "../img/main/onclick_icons/nav_menu_heart_icon_red.png";
  } else if (isLIked()) {
    e.target.src = "../img/main/nav_menu_heart_icon.png";
  }
}

const feedElement = document.querySelector('.feed-element');
const feedActionHeartIcon = feedElement.querySelectorAll('.feed-action-heart');

if (feedActionHeartIcon.length > 0) {
  feedActionHeartIcon.forEach(el => el.addEventListener('click', changeHeartColor));
}

