function activateUploadButton() {
    const uploadButton = document.querySelector(".uploadButton");
    const comment = document.querySelector(".writeNewComment").value;
    
    (comment.length>=1) ?
    uploadButton.style.color='#0095F6':
    uploadButton.style.color='#B2dffc';
}

document.querySelector('.writeNewComment').addEventListener('keyup', function(){
    activateUploadButton();
})

function addComment() {    
    const commentClass = document.querySelector(".comment");
    const newDivtag = document.createElement("div");
    newDivtag.className = "previousComment"
    let comment = document.querySelector(".writeNewComment").value;
    newDivtag.innerHTML = `<p><b>jjburi_</b> ${comment} </p><img class="miniLikeButton" alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">`;
    commentClass.appendChild(newDivtag);
}

document.querySelector(".uploadButton").addEventListener("click", function(){
    addComment();
    document.querySelector(".writeNewComment").value = "";
})

document.querySelector(".writeNewComment").addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
    addComment();
    document.querySelector(".writeNewComment").value = "";
    }
})


