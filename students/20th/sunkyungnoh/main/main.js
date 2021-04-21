'use strict'
const commentInput = document.querySelector('.commentInput');
const commentBtn = document.querySelector('.commentBtn');

console.log(commentInput);

commentBtn.innerHTML.style.color = "red";


function active() {
    if (commentInput.value) {
        commentBtn.toggleAttribute('disabled');
        commentBtn.innerHTML.style.color = 'rgb(0, 149, 246)';
    } else {
        commentBtn.toggleAttribute('disabled');
        commentBtn.innerHTML.style.color = 'rgb(179,223,252)';
    }
};

commentInput.addEventListener('input', active);
