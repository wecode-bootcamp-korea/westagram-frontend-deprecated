const commentForm = document.querySelector('.add__comment-form');
const addComment = commentForm.querySelectorAll('.add__comment');
const addCommentBtn = document.querySelectorAll('.add__comment-btn');
const commentList = document.querySelector('.comment__list');
const userIcon = document.querySelector('.user__img');

for (let i = 0; i < addComment.length; i++) {
  addComment[i].addEventListener('keyup', function (e) {
    let commentEnter = addComment[i].value;

    if (commentEnter.length >= 1) {
      addCommentBtn[i].style.color = '#0095F6';
    } else {
      addCommentBtn[i].style.color = '#c0e0fd';
    }
  });

  // for (let i = 0; i < addComment.length; i++) {

  // }

  function addList(value) {
    const commentOne = document.createElement('li');
    const userBox = document.createElement('div')
    const userName = document.createElement('a');
    const userComment = document.createElement('span');
    const heartImg = document.createElement('button');
    const img = "<img src=" + "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" + " />";
    
    userName.innerText = 'trooioi';
    userComment.innerText = value;
    heartImg.innerHTML = img;

    commentOne.classList.add('commentLi');
    userName.classList.add('userA');
    userComment.classList.add('userSpan');
    heartImg.classList.add('heartImg');
    userBox.classList.add('userBox');

    commentOne.appendChild(userBox);
    userBox.appendChild(userName);
    userBox.appendChild(userComment);
    commentOne.appendChild(heartImg);
    commentList.appendChild(commentOne);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const currentValue = addComment[i].value;
    addList(currentValue);
    addComment[i].value = '';

  }
}

function init() {
  commentForm.addEventListener('submit', handleSubmit);
}

init();
