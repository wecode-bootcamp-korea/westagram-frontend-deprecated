'use strict'

const commentInput = document.querySelector('.commentInput');
const commentBtn = document.querySelector('.commentBtn');

function changeColorOfBtn() {
    if (commentInput.value) {
        commentBtn.removeAttribute('disabled');
        commentBtn.classList.add('active');
    } else {
        commentBtn.setAttribute('disabled', 'disabled');
        commentBtn.classList.remove('active');
    }
};

commentInput.addEventListener('input', changeColorOfBtn);

function addComment(crrInput) {
    const commentModel = document.querySelector('.comment');
    const newCommentBox = commentModel.cloneNode(true);
    const ul = document.querySelector('ul');

    newCommentBox.querySelector(".CM").innerHTML = crrInput;
    ul.append(newCommentBox)
    newCommentBox.classList.toggle('invisible')
}

const commentForm = document.querySelector('form');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const crrInput = commentForm.elements.commentInput.value;
    if (!crrInput) {
        alert("댓글을 입력해주세요!")
    } else {
      addComment(crrInput);
    }
    commentForm.elements.commentInput.value = '';
})