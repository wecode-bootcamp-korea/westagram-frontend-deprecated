import { personalInfo } from './personal_db.js';

const body = document.body;
const commentList = document.querySelector('.comment-list');
const inputComment = document.querySelector('.input-comment');
const commentSubmitButton = document.querySelector('.input-submit');
const searchBar = document.querySelector('.search-bar');
const searchResult = document.querySelector('.search-result');
const searchResultTriangle = document.querySelector('.search-result-triangle');

let comment = '';

const changeLikeButtonColor = (e) => {
  if (!e.target.className.includes('active')) {
    e.target.classList.add('active');
  } else {
    e.target.classList.remove('active');
  }
};

const removeComment = (e) => {
  e.target.parentNode.remove();
};

const displayComment = () => {
  if (comment) {
    const li = document.createElement('li');
    const commentId = document.createElement('span');
    const commentText = document.createElement('span');
    const commentLike = document.createElement('span');
    const commentRemove = document.createElement('span');

    commentId.textContent = 'xoxoxo_S2';
    commentId.classList.add('commentor-id');
    commentText.textContent = comment;
    commentText.classList.add('comment-content');
    commentLike.innerHTML = '<i class="fas fa-heart"></i>';
    commentLike.classList.add('comment-like-button');
    commentLike.addEventListener('click', (e) => changeLikeButtonColor(e));
    commentRemove.textContent = '삭제';
    commentRemove.classList.add('comment-remove-button');
    commentRemove.addEventListener('click', (e) => removeComment(e));

    li.appendChild(commentId);
    li.appendChild(commentText);
    li.appendChild(commentLike);
    li.appendChild(commentRemove);
    commentList.appendChild(li);
  } else {
    return;
  }
  comment = '';
  inputComment.value = '';
};

const addCommentHandler = (e) => {
  comment = e.target.value;

  if (e.key === 'Enter' && comment.length !== 0) {
    displayComment();
  }
};

const displayStory = (value) => {
  const storyDataContainer = document.querySelector('.story-container');
  const storyData = document.createElement('div');
  const storyPicture = document.createElement('img');
  const storyUserId = document.createElement('span');

  const { id, img_url } = value;

  storyPicture.setAttribute('src', img_url);
  storyPicture.setAttribute('alt', `user: ${id} profile image`);
  storyPicture.classList.add('story-picture');
  storyUserId.textContent = `${id.slice(0, 9)}...`;
  storyUserId.classList.add('story-user');
  storyData.appendChild(storyPicture);
  storyData.appendChild(storyUserId);
  storyData.classList.add('story-data');
  storyDataContainer.appendChild(storyData);
};

const displayPersonalMenu = (e) => {
  const personalMenu = document.querySelector('.personal-menu');
  const personalMenuTriangle = document.querySelector('.personal-menu-triangle');

  if (e.target.className !== 'nav-button-profile') {
    personalMenuTriangle.style.display = 'none';
    personalMenu.style.display = 'none';
  } else {
    personalMenuTriangle.style.display = 'block';
    personalMenu.style.display = 'flex';
  }
};

const displayRecommendUser = (value) => {
  const recommendUserContainer = document.querySelector('.user-recommend-container');
  const userRecommendSection = document.createElement('section');
  const userImage = document.createElement('img');
  const userId = document.createElement('span');
  const followText = document.createElement('span');

  const { index, id, img_url } = value;

  if (index < 5) {
    userImage.setAttribute('src', img_url);
    userImage.setAttribute('alt', `user: ${id} profile image`);
    userImage.classList.add('recommend-user-picture');
    userId.textContent = id;
    userId.classList.add('recommend-user-id');
    followText.textContent = '팔로우';
    followText.classList.add('recommend-follow-text');
    userRecommendSection.appendChild(userImage);
    userRecommendSection.appendChild(userId);
    userRecommendSection.appendChild(followText);
    userRecommendSection.classList.add('recommend-section');
    recommendUserContainer.appendChild(userRecommendSection);
  } else {
    return;
  }
};

const searchID = (value) => {
  const inputValue = searchBar.value;
  return value.id.indexOf(inputValue) !== -1;
};

const displaySearchResults = (value) => {
  const searchResultData = document.createElement('article');
  searchResultData.innerHTML = `
  <img src="${value.img_url}" class="search-image"/>
  <span class="search-id">${value.id}</span>
  `;
  searchResult.appendChild(searchResultData);
  searchResult.style.display = 'flex';
  searchResultTriangle.style.display = 'block';
};

const init = () => {
  personalInfo.forEach((value) => {
    displayStory(value), displayRecommendUser(value);
  });
};

searchBar.addEventListener('input', () => {
  searchResult.innerHTML = '';
  searchResult.style.display = 'none';
  searchResultTriangle.style.display = 'none';
  if (searchBar.value) {
    const filterdId = personalInfo.filter((value) => searchID(value));
    if (filterdId) {
      filterdId.forEach((value) => {
        displaySearchResults(value);
      });
    }
  }
});
inputComment.addEventListener('keyup', addCommentHandler);
commentSubmitButton.addEventListener('click', displayComment);
body.addEventListener('click', displayPersonalMenu);

init();
