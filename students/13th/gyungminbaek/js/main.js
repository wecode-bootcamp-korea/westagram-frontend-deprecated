function activateUploadButton() {
    const uploadButton = document.querySelector(".upload_button");
    const comment = document.querySelector(".write_newComment").value;
    
    (comment.length>=1) ?
    uploadButton.style.color='#0095F6':
    uploadButton.style.color='#B2dffc';
}

document.querySelector('.write_newComment').addEventListener('keyup', function(){
    activateUploadButton();
})

function addComment() {    
    const commentClass = document.querySelector(".comment");
    const newDivtag = document.createElement("div");
    newDivtag.className = "previous_comment"
    let comment = document.querySelector(".write_newComment").value;
    newDivtag.innerHTML = `<p><b>jjburi_</b> ${comment} </p><img class="comment_likebutton" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">`;
    commentClass.appendChild(newDivtag);
}

document.querySelector(".upload_button").addEventListener("click", function(){
    addComment();
    document.querySelector(".write_newComment").value = "";
})

document.querySelector(".write_newComment").addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
    addComment();
    document.querySelector(".write_newComment").value = "";
    }
})


