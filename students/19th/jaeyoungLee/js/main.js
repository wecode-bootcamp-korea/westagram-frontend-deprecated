const inputCommnet = document.querySelector(".inputcomment");
const buttonPostion = document.querySelector(".posting_button");
const commentBox = document.querySelector(".friend_comment");
console.log(inputCommnet);
console.log(buttonPostion);
console.log(commentBox);

/*const leaveComment = () => {
    let writeComment = document.querySelector(".inputcomment").value;
    let addP = document.createElement('p'); 
    document.commentBox.appendChild(addP);

    commentBox.innerHTML = writeComment;
}*/

inputCommnet.addEventListener('keyup',() => {
    let writeComment = document.querySelector(".inputcomment").value;
    let addP = document.createElement('p'); 
    const keycode = window.event.keyCode;
    if(keycode == 13){
        //commentBox.appendChild(addP);
        commentBox.innerHTML = writeComment;
    }
});