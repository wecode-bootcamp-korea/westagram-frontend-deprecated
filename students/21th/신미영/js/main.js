const storyListArr = ['dlwlrma', 'skuukzky', 'sooyaaa__', 'sjkuksee', 'wecode', 'le2jh']
const suggestedListArr = ['jparkitrighthere', 'leejunhyuk05', 'goldenretrievers', 'jennierubyjane', 'wilcoxroom']

const commentInput = document.querySelector('#commentInput');
const postButton = document.querySelector('#postButton');
const commentsList = document.querySelector('.commentUl');
const storiesList = document.querySelector('.stories');
const suggestedLists = document.querySelector('.suggestedLists');
const searchInput = document.querySelector('.searchInput');
const searchLabel = document.querySelector('.searchLabel');
const searchLabelText = document.querySelector('.searchLabelText');
const searchDeleteButton = document.querySelector('.searchDeleteButton');


commentInput.addEventListener('keyup', activatePostButton);

function activatePostButton() {
  if(commentInput.value !== '') {
    postButton.disabled = false;
    postButton.classList.add('postButtonOn');
  } else {
    postButton.disabled = true;
    postButton.classList.remove('postButtonOn');
  }
};

postButton.addEventListener('click', addComment);

commentInput.addEventListener('keyup', (e) => {
  const isEnterKeyValid = !postButton.disabled && e.code === 'Enter'

  if(isEnterKeyValid){
    addComment();
  }
});

function addComment() {
  const newComment = 
    `<li>
      <span class="commentId">my_sshin </span>
      <span class="commentText">${commentInput.value}</span>
      <button class="commentDeleteButton">delete</button>
      <button><img class="commentLikesButton" src="./images/main/icon/heart.png" alt="heart icon"/></button>
    </li>`
  
  commentsList.insertAdjacentHTML('beforeend', newComment);
  commentInput.value = '';
  activatePostButton();
  removeComment();
  likesComment();
}

function removeComment() {
  const commentDeleteButton = document.querySelectorAll('.commentDeleteButton');

  for(let i=0; i<commentDeleteButton.length; i++) {
    const clickedButton = commentDeleteButton[i];

    clickedButton.addEventListener('click', () => {
      clickedButton.parentElement.remove();
    });
  }
}

function likesComment() {
  const commentLikesButton = document.querySelectorAll('.commentLikesButton');

  for(let i=0; i<commentLikesButton.length; i++) {
    const buttonOff = './images/main/icon/heart.png';
    const buttonOn = './images/main/icon/heart_black.png';
    const clickedButton = commentLikesButton[i];
    const isLikesButtonOff = commentLikesButton[i].getAttribute('src') === buttonOff;

    clickedButton.addEventListener('click', () => {
      if(isLikesButtonOff) {
        clickedButton.setAttribute('src', buttonOn);
      } else {
        clickedButton.setAttribute('src', buttonOff);
      }
    });
  }
}

showStoryList();

function showStoryList() {
  for (let i of storyListArr) {
    storiesList.insertAdjacentHTML('beforeend', 
    `<div class="story">
        <div class="storyBg">
          <img class="storyProfile" src="./images/main/profile/${i}-profile.jpeg" alt="dlwlrma profile image" />
        </div>
        <div class="storyId">
          ${i}
        </div>
      </div>`
    );
  }
}

showSuggestedList();

function showSuggestedList() {
  for (let i of suggestedListArr) {
    suggestedLists.insertAdjacentHTML('beforeend', 
    `<div class="suggestedUser">
      <img src="./images/main/profile/${i}-profile.jpeg" alt="suggested User's profile image" />
        <div>
          <div class="suggestedId">${i}</div>
          <div class="suggestedText">Suggested for you</div>
        </div>
      <button class="sideButton">Follow</button>
    </div>`
    );
  }
}
/* 사용자 검색 기능 구현 중...
searchLabel.addEventListener('click', () => {
  searchInput.focus();
  searchInput.classList.add('searchFocus');
  searchDeleteButton.classList.add('searchDeleteButtonOn');
  searchLabel.classList.remove('searchLabel');
  searchLabel.classList.add('searchLabelFocus');

  if(searchLabelText.innerText !== 'Search') {
    searchInput.value = searchLabelText.innerText;
    searchLabelText.innerText = '';
    searchInput.select();
  } 
});

searchInput.addEventListener('keyup', () => {
  if(searchInput.value === '') {
    searchLabelText.innerHTML = 'Search';
  } else {
    searchLabelText.innerText = searchInput.value;
    searchLabelText.innerText = '';
  }
})

searchDeleteButton.addEventListener('click', () => {
  if(searchInput.value !== '') {
    searchInput.value = '';
  }
});

searchInput.addEventListener('focusout', FocusOutSearch);

function FocusOutSearch() {
  searchInput.classList.add('searchInput');
  searchInput.classList.remove('searchFocus');
  searchLabel.classList.add('searchLabel')
  searchLabel.classList.remove('searchLabelFocus');
  searchDeleteButton.classList.remove('searchDeleteButtonOn');

  if(searchInput.value !== '') {
    searchLabelText.innerText = searchInput.value;
    searchInput.value = '';
  } else {
    searchLabelText.innerText = 'Search';
  }
}
*/