const comment = document.getElementsByClassName('commentBox')[0];
const button = document.getElementsByClassName('commentBtn')[0];
const replyBox = document.getElementsByClassName('replyContent')[0];
const myId = document.getElementById('myId');

comment.addEventListener('keydown',function(e) {
    let commentContents = document.getElementsByClassName('commentBox')[0].value;
    let creatingDiv = document.createElement('div'); 
    if(commentContents.length !== 0 && e.keyCode === 13) {
        replyBox.appendChild(creatingDiv);
        creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
        document.getElementsByClassName('commentBox')[0].value = null;
    }
    else if (commentContents.length === 0 && e.keyCode === 13) {
        alert("comment를 입력해주세요!")
    }
})
button.addEventListener('click',function() {
    let commentContents = document.getElementsByClassName('commentBox')[0].value;
    let creatingDiv = document.createElement('div'); 
    if(commentContents.length !== 0) {
        replyBox.appendChild(creatingDiv);
        creatingDiv.innerHTML = `hm_Son7 ${commentContents}`;
        document.getElementsByClassName('commentBox')[0].value = null;
}
    else if (commentContents.length === 0) {
        alert("comment를 입력해주세요!")
    }
})

