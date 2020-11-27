
const commentBtn = document.querySelector('.commentBtn');
const commentBox = document.querySelector('.commentBox');
const uploadComment = document.querySelector('.uploadComment');

//엔터로 댓글 삽입 
function onKeyDown(){
    if(event.keyCode == 13){
    commentHandler()
    }
}

//버튼 클릭으로 댓글 삽입 및 삭제 
function addComment(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const instaId = "devCecy";
    span.innerHTML = `${instaId}  ${text}`;
    li.appendChild(span);
    uploadComment.appendChild(li);
}

function commentHandler(){
    // event.preventDefault();
    const commentBoxValue = commentBox.value;
    addComment(commentBoxValue);
    commentBox.value = "";
}

// function loadComment (){
//     const loadedComments = localStorage.getItem();
//     if (loadedComments !== null){  //localStorage에서 가져올 아이템이 있다면, 
        
//     }

function init(){
    commentBtn.addEventListener('click', commentHandler);
}

init();

