// Variables
const commentInput = document.querySelector('#comment');
const commentBtn = document.querySelector('.commentbtn');
const commentList = document.querySelector('#comments_list');
const userName = document.querySelector('.top_user_name');
const commentLikeBtn = document.querySelector('.comments_likebtn');
const commentDeletBtn = document.querySelector('.comments_deletebtn');
const commentLikeI = document.querySelector('.far fa-heart');

// Events
commentBtn.addEventListener('click', addComment);
commentLikeBtn.addEventListener('click', changeColor);


// Functions
function addComment() {
    const commentText = commentInput.value;
    const createA = document.createElement('a');
    const createLi = document.createElement('li');
    const createLineWrap = document.createElement('div');
    const createBtnWrap = document.createElement('div');
    const createBtnI = document.createElement('i');
    const createLikeBtn = document.createElement('button');
    const createDeleteBtn = document.createElement('button');

    createLineWrap.className = 'comments_linewrap';
    createBtnWrap.className = 'comments_btnwrap';
    createLikeBtn.className = 'comments_likebtn';
    createDeleteBtn.className = 'comments_deletebtn';
    createBtnI.className = 'far fa-heart';
    createLi.className = 'comments_comment';
    createA.className = 'comments_userlink';

    createBtnI.setAttribute('src', 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png')
    createA.setAttribute('href', '#');
    createDeleteBtn.innerHTML = commentDeletBtn.textContent;
    createLi.innerHTML = commentText;
    createA.innerHTML = userName.textContent;
    
    commentList.appendChild(createLineWrap);
    createLineWrap.appendChild(createLi);
    createLineWrap.appendChild(createBtnWrap);

    createLi.appendChild(createA);
    createLi.prepend(createA);

    createBtnWrap.appendChild(createLikeBtn);
    createLikeBtn.appendChild(createBtnI);
    createBtnWrap.appendChild(createDeleteBtn);
};

// function changeColor() {
//     commentLikeI.toggle('comments_like');
// }