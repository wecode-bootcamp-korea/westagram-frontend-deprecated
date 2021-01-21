const commentBtn = document.getElementsByClassName("commentBtn")[0]
const commentContents = document.getElementsByClassName("commentValue")[0]

commentContents.addEventListener('keyup', function() {
    if (commentContents.value.length > 0) {
        commentBtn.style.color = "#0095F6";
    } else {
        commentBtn.style.color = "#CCE3FD";
    }
})

commentBtn.addEventListener('click', function() {
    if(commentContents.value.length > 1) {
        let feedComment = document.createElement("div");
        feedComment.className = "feedComment";
        
        let commentId = document.createElement("span");
        commentId.innerHTML = "castle_jooun";
        feedComment.appendChild(commentId);

        let commentValue = document.createElement("span");
        commentValue.innerHTML = commentContents.value;
        feedComment.appendChild(commentValue);

        document.getElementsByClassName("feedComment")[0].after(feedComment);
    }
})