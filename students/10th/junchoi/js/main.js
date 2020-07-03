const faker = window.faker;

// right fixed aside position handling
window.addEventListener('load', () => {
  const space = Math.floor((window.innerWidth - 895) / 2);
  rightFixed.style.left = `${space + 895 - 293}px`;
  rightFixed.style.right = `${space}px`
  rightFixed.style.visibility = 'visible'
});

const rightFixed = document.querySelector('.main-right');
window.addEventListener('resize', () => {
  const space = Math.floor((window.innerWidth - 895) / 2);
  rightFixed.style.left = `${space + 895 - 293}px`;
  rightFixed.style.right = `${space}px`
});

// generate fake stories by using faker.js library
const mainStoriesTag = document.querySelector('.main-stories');

const makeStories = () => {
  const thumnail = faker.image.avatar();
  const userName = faker.internet.userName();

  const storyItemTag = document.createElement('div');
  storyItemTag.className = "story-item";

  const storyImageBorderTag = document.createElement('div');
  storyImageBorderTag.className = "story-image-border";

  const stroyImageTag = document.createElement('img');
  stroyImageTag.src = thumnail;

  const storyId = document.createElement('div');
  storyId.className = "story-id";
  storyId.innerText = userName.slice(0, 6);

  storyImageBorderTag.appendChild(stroyImageTag);
  storyItemTag.appendChild(storyImageBorderTag);
  storyItemTag.appendChild(storyId);
  mainStoriesTag.appendChild(storyItemTag);

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
const commentInputs = document.querySelectorAll('.comment > input');
const postButtons = document.querySelectorAll('.comment .post');

commentInputs.forEach((commentInput, commentInputIndex) => {

  commentInput.addEventListener('keyup', () => {
    commentInputs.forEach(() => {
      const commentInputValue = commentInput.value;

      postButtons.forEach((postButton, postButtonIndex) => {
        if (postButtonIndex === commentInputIndex) {
          commentInputValue.length >= 1
            ? postButton.classList.add('active')
            : postButton.classList.remove('active');
        }
      })
    })
  });
})

// comments form submit handling
const commentForms = document.querySelectorAll('.comment');
const commentsBox = document.querySelectorAll('.comments');

commentForms.forEach((commentForm, commentFormIndex) => {

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    commentInputs.forEach((commentInput, commentInputIndex) => {
      if (commentInputIndex === commentFormIndex) {
        if (commentInput.value.length === 0) return; // 바로 return 한다.
    
        const commentTag = document.createElement('div');
        const user = document.createElement('div');
        user.className = "userId";
        user.innerText = faker.internet.userName();
    
        const content = document.createElement('div');
        content.className = "content";
        content.innerText= commentInput.value;
    
        commentTag.appendChild(user);
        commentTag.appendChild(content);
    
        commentsBox.forEach((comments, commentsBoxIndex) => { // 같은 commentBox에 댓글이 달리게 한다.
          if (commentsBoxIndex === commentFormIndex) {
            comments.appendChild(commentTag);
          }
        })

        commentInput.value = "";
      }
    })
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
