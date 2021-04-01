const inputComment = document.getElementsByClassName('comment_input')[0];
const commentBtn = document.getElementsByClassName("comment_btn")[0];

const commentBox = document.body.querySelector(".comment");

function addCommentPtag(){
    let addPtag = document.createElement('p');
    addPtag.className="comment_text";
    addPtag.innerHTML=inputComment.value;
    commentBox.appendChild(addPtag);
}

commentBtn.addEventListener("click",function(){
    addCommentPtag();  
});

inputComment.addEventListener("keypress",function(e){
    if(e.keyCode===13){addCommentPtag();}
});

