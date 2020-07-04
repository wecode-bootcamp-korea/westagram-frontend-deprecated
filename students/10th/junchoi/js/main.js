const faker = window.faker;

// right fixed aside position handling
const rightFixed = document.querySelector('.main-right');
window.addEventListener('load', () => {
  const space = Math.floor((window.innerWidth - 895) / 2);
  rightFixed.style.left = `${space + 895 - 293}px`;
  rightFixed.style.right = `${space}px`
  rightFixed.classList.add('loaded');
});

window.addEventListener('resize', () => {
  const space = Math.floor((window.innerWidth - 895) / 2);
  rightFixed.style.left = `${space + 895 - 293}px`;
  rightFixed.style.right = `${space}px`
});

// generate fake stories by using faker.js library
const mainStories = document.querySelector('.main-stories');

const makeStories = () => {
  const thumnail = faker.image.avatar();
  const userName = faker.internet.userName();

  const storyItem = document.createElement('div');
  storyItem.className = "story-item";

  const storyImageBorder = document.createElement('div');
  storyImageBorder.className = "story-image-border";

  const storyImageTag = document.createElement('img');
  storyImageTag.src = thumnail;

  const storyId = document.createElement('div');
  storyId.className = "story-id";
  storyId.innerText = userName.slice(0, 6);

  storyImageBorder.appendChild(storyImageTag);
  storyItem.appendChild(storyImageBorder);
  storyItem.appendChild(storyId);
  mainStories.appendChild(storyItem);

};

const myRepeat = (func, times) => {
  let i = 1;
  while (i <= times) {
    func();
    i += 1;
  }
}

myRepeat(makeStories, 20);

// post button active/inactive handling
const commentInputs = [...document.querySelectorAll('.comment > input')];
const postButtons = [...document.querySelectorAll('.comment .post')];

commentInputs.forEach((commentInput, commentInputIndex) => {
  commentInput.addEventListener('keyup', () => {
    commentInputs.forEach(() => {
      const commentInputValue = commentInput.value;

      const currentPostButton = postButtons.find((postButton, postButtonIndex) => postButtonIndex === commentInputIndex);
      commentInputValue.length >= 1
        ? currentPostButton.classList.add('active')
        : currentPostButton.classList.remove('active');

     })
  })
});

// comments form submit handling
const commentForms = [...document.querySelectorAll('.comment')];
const commentsBoxes = [...document.querySelectorAll('.comments')];

commentForms.forEach((commentForm, commentFormIndex) => {
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const currentCommentInput = commentInputs.find((commentInput, commentInputIndex) => commentInputIndex === commentFormIndex);
    if (currentCommentInput.value.length === 0) return false;

    const comment = document.createElement('div');
    const user = document.createElement('div');
    user.className = "user-id";
    user.innerText = faker.internet.userName();

    const content = document.createElement('div');
    content.className = "content";
    content.innerText= currentCommentInput.value;

    comment.appendChild(user);
    comment.appendChild(content);

    const currentCommentBox = commentsBoxes.find((commentBox, commentBoxIndex) => commentBoxIndex === commentFormIndex);
    currentCommentBox.appendChild(comment);

    currentCommentInput.value = ""
  });
})

// searchBar focus/focusout event handling
const searchBarIcon = document.querySelector('.navbar-item.searchbar .icon');
const searchBarText = document.querySelector('.navbar-item.searchbar .text');

const searchbarForm = document.querySelector('.navbar-item.searchbar');
const searchbarInput = document.querySelector('#searchbar');

searchbarInput.addEventListener('focus', () => {
  searchBarIcon.classList.add('focused');
  searchBarText.classList.add('focused');
});

searchbarInput.addEventListener('focusout', () => {
  searchBarIcon.classList.remove('focused');
  searchBarText.classList.remove('focused');
  searchbarInput.value = "";
});

searchbarForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchbarInput.value = "";
});
