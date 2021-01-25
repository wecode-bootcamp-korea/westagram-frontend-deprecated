'use strict';

const commentInput = document.getElementById('comment-line');
const submitClick = document.getElementById('submit-box');
let result = document.querySelector(".commentBox");


commentInput.addEventListener('keyup', function (event) {
    const commentValue = document.getElementById('comment-line').value;
    const submitBtn = document.getElementById('submit-box');

    submitBtn.style.color = commentValue ? '#0896F7' : '#C0DFFD';
});

function commentWrite(event) {
    if(event.keyCode === 13){
        event.preventDefault();
    const makeDiv = document.createElement("div");
    const superUser = document.createElement("span");
    const commentViewSpan = document.createElement("span");
    superUser.classList.add("feed-user");
    superUser.textContent = "2929_9999";
    commentViewSpan.textContent = commentInput.value;
    makeDiv.appendChild(superUser);
    makeDiv.appendChild(commentViewSpan);
    result.appendChild(makeDiv);
    }
}

commentInput.addEventListener('keydown', commentWrite);