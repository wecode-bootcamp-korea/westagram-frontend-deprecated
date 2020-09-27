// Variables
const commentInput = document.querySelector('#comment');
const commentBtn = document.querySelector('.commentbtn');
const commentList = document.querySelector('#comments_list');

// Events
commentBtn.addEventListener('click', addComment);

// Functions
function addComment() {
    const commentText = commentInput.value;
    const createLi = document.createElement('li');

    createLi.innerHTML = commentText;
    createLi.className = 'comments_comment';
    commentList.appendChild(createLi);
};
/*
입력 => value값
li 생성, 
value값은 li로
class name > comments_comment (스타일 적용)
li를 ul로 붙인다
*/
