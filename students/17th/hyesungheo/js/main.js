'use strict';

const commentInput = document.getElementById('comment-line');
const submitClick = document.getElementById('submit-box');

commentInput.addEventListener('keyup', function (event) {
    const commentValue = document.getElementById('comment-line').value;
    const submitBtn = document.getElementById('submit-box');

    submitBtn.style.color = commentValue ? '#0896F7' : '#C0DFFD';
});

const superUser = "2929_9999";

function commentWrite() { 
    let btag = document.createElement("b");
    btag.innerHTML = superUser;    
    let commentViewSpan = document.createElement('span'); 
    let commentText = commentInput.value;       
    commentViewSpan.innerHTML = commentText;
    let result = document.getElementsByClassName("comment-box");
    result.appendChild(btag);    
    result.appendChild(commentViewSpan);
    let brtag = document.createElement("br");
    result.appendChild(brtag);  
}

submitClick.addEventListener("click", function() {
    commentWrite();
});

commentInput.addEventListener('keydown', function(e) {    
    if (e.keyCode === 13 ) {
        commentWrite();
    }
})