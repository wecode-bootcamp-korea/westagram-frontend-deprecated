const inputCommnet = document.querySelector(".inputcomment");
const buttonPostion = document.querySelector(".posting_button");
const commentBox = document.querySelector(".friend_comment");



const enter = () => {
    let writeComment = document.querySelector(".inputcomment").value;
    console.log(writeComment);
    let addP = document.createElement('p'); 
    const keycode = window.event.keyCode;

    if(keycode == 13){
        commentBox.appendChild(addP);
        addP.innerHTML = writeComment
        writeComment = "";
    }

   
}

inputCommnet.addEventListener('keypress', enter);
