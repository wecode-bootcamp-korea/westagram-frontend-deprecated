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
    let makeDiv = document.createElement("div");
    let commentViewSpan = document.createElement('span'); 
    let commentSpan = document.createElement('span'); 

    let result = document.getElementsByClassName("comment-box");
      
    let commentText = commentInput.value;       
    commentViewSpan.innerHTML = commentText;
    
    result.appendChild(makeDiv);    
    result.appendChild(commentViewSpan);
    result.appendChild(commentSpan);  
}

submitClick.addEventListener("click", function() {
    commentWrite();
});

commentInput.addEventListener('keydown', function(e) {    
    if (e.keyCode === 13 ) {
        commentWrite();
    }
})