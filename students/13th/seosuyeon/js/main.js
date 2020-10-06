// Variables
const commentInput = document.querySelector('#comment');
const commentBtn = document.querySelector('.commentbtn');
const commentList = document.querySelector('#comments_list');
const userName = document.querySelector('.top_user_name');
const commentDeletBtn = document.querySelector('.comments_deletebtn');
const commentLikeI = document.querySelectorAll('.comments_btnwrap i');

// Events
commentBtn.addEventListener('click', addComment);

function addComment() {
    const createLi = document.createElement('li');
    commentList.appendChild(createLi);
    createLi.innerHTML = `<li class="comments_linewrap">
        <div class="comments_comment">
            <a class="comments_userlink" href="#">${userName.textContent}</a>
            ${commentInput.value}
        </div>
        <div class="comments_btnwrap">
            <i class="far fa-heart"></i>
            <button class="comments_deletebtn">삭제</button>
        </div>
    </li>`

    commentInput.value = '';
};