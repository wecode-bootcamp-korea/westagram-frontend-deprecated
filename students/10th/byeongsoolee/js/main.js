const thisIsComment = document.getElementsByClassName('commentBox')[0];
const thisIsButton = document.getElementsByClassName('commentBtn')[0];
const thisIsReplyBox = document.getElementsByClassName('replyContent')[0];
const thisIsMyId = document.getElementById('myId');
// const commentContents = document.getElementsByClassName('commentBox')[0].value;
// const creatingDiv = document.createElement('div'); 

// function uploadReply() {
// if(e==='keydown'&& commentContents.length !== 0 && e.keyCode === 13) {
//     thisIsReplyBox.appendChild(creatingDiv);
//     creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
//     }
// else if (e==='click'&& commentContents.length !== 0) {
//     thisIsReplyBox.appendChild(creatingDiv);
//     creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
//     }
// }

// thisIsComment.addEventListener('keydown',uploadReply(e));
// thisIsComment.addEventListener('click',uploadReply(e));



//     const commentContents = document.getElementsByClassName('commentBox')[0].value;
//     const creatingDiv = document.createElement('div'); 
//     if(commentContents.length !== 0 && (e.keyCode === 13 || ) {
//         thisIsReplyBox.appendChild(creatingDiv);
//         creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
// }  

thisIsComment.addEventListener('keydown',function(e) {
    const commentContents = document.getElementsByClassName('commentBox')[0].value;
    const creatingDiv = document.createElement('div'); 
    if(commentContents.length !== 0 && e.keyCode === 13) {
        thisIsReplyBox.appendChild(creatingDiv);
        creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
        commentContents.innerHTML = null;
} 
})

thisIsButton.addEventListener('click',function() {
    const commentContents = document.getElementsByClassName('commentBox')[0].value;
    const creatingDiv = document.createElement('div'); 
    if(commentContents.length !== 0) {
        thisIsReplyBox.appendChild(creatingDiv);
        creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
        commentContents.innerHTML = null;
}
})