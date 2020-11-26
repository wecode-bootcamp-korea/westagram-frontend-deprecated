
const commentBtn = document.querySelector('.commentBtn');
const commentBox = document.querySelector('.commentBox');
const uploadComment = document.querySelector('.uploadComment');

//엔터로 댓글 삽입
function onKeyDown(){
    if(event.keyCode == 13){
    commentHandler()
    }
}

//버튼 클릭으로 댓글 삽입 
commentBtn.addEventListener('click', commentHandler);

function commentHandler(){
    // event.preventDefault();
    const commentBoxValue = commentBox.value;
    addComment(commentBoxValue);
    commentBox.value = "";
}

function addComment(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const instaId = "devCecy";
    span.innerHTML = `${instaId}  ${text}`;
    li.appendChild(span);
    uploadComment.appendChild(li);
}


