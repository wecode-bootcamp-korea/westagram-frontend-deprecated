// Variables
const commentInput = document.querySelector('#comment');
const commentBtn = document.querySelector('.commentbtn');
const commentList = document.querySelector('#comments_list');
const userName = document.querySelector('.top_user_name');

// Events
commentBtn.addEventListener('click', addComment);

// Functions
function addComment() {
    const commentText = commentInput.value;
    const createA = document.createElement('a');
    const createLi = document.createElement('li');

    createLi.innerHTML = commentText;
    createLi.className = 'comments_comment';
    createA.innerHTML = userName.textContent;
    createA.className = 'comments_userlink';
    createA.setAttribute('href', '#');
    commentList.appendChild(createLi);
    createLi.appendChild(createA);
    createLi.prepend(createA);
};
