const thisIsComment = document.getElementsByClassName('commentBox')[0];
const thisIsButton = document.getElementsByClassName('commentBtn')[0];
const thisIsReplyBox = document.getElementsByClassName('replyContent')[0];
const thisIsMyId = document.getElementById('myId');

thisIsComment.addEventListener('keydown',function(e) {
    let commentContents = document.getElementsByClassName('commentBox')[0].value;
    let creatingDiv = document.createElement('div'); 
    if(commentContents.length !== 0 && e.keyCode === 13) {
        thisIsReplyBox.appendChild(creatingDiv);
        creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
        document.getElementsByClassName('commentBox')[0].value = null;
} 
})

thisIsButton.addEventListener('click',function() {
    let commentContents = document.getElementsByClassName('commentBox')[0].value;
    let creatingDiv = document.createElement('div'); 
    if(commentContents.length !== 0) {
        thisIsReplyBox.appendChild(creatingDiv);
        creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
        document.getElementsByClassName('commentBox')[0].value = null;
}
})

