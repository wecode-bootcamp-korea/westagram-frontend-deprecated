const inputComment = document.getElementById("inputComment");
const commentBtn = document.getElementById("commentBtn");


// ACTIVATE BUTTON

function activateBtn() {
    if (inputComment.value !== ""){
        commentBtn.style.color= "rgb(38, 167, 218)";
        commentBtn.disabled = false;
    } else {
        commentBtn.style.color="lightblue";
        commentBtn.disabled = true;
    }
}
inputComment.addEventListener("keyup", activateBtn);



// ADD COMMENTS

function showComments(comment){
    const firstComment = document.getElementById('firstC');
    let eachComment = document.createElement('li');
    let commentId = document.createElement('strong');
    let commentValue = document.createElement('span');
    let deleteBtn = document.createElement('button');
    deleteBtn.addEventListener("click", function(){
        eachComment.parentElement.removeChild(eachComment);
    })
    eachComment.classList.add('eachComment');
    commentId.classList.add('commentId');
    commentValue.classList.add('commentValue');
    deleteBtn.classList.add('deleteBtn');
   
    const btnStyle = {
        width: '30px',
        backgroundColor: 'white',
        borderStyle: 'none',
        textAlign: 'right',
        outline: 'none',
        color: 'rgb(192, 192, 192)',

    }
    const eachCommentStyle = {
        display: 'flex',
        alginItems: 'center'
    }

    commentId.innerText = "limosum91";
    commentValue.innerText = comment + '\n';
    deleteBtn.innerText = "X";
    commentId.style.flexShrink = '0';
    commentValue.style.flexGrow = '1';
    deleteBtn.style.flexGrow = '1';

    Object.assign(deleteBtn.style, btnStyle);
    Object.assign(eachComment.style, eachCommentStyle);

    firstComment.after(eachComment);
    eachComment.appendChild(commentId);
    eachComment.appendChild(commentValue);
    eachComment.appendChild(deleteBtn);
    event.preventDefault();
    inputComment.value = "";

    // 댓글 줄바꿈
    if (comment.length > 50) {
        breakLine += showComments(comment.substring(50));
        return comment.substring(0,50);
    } else {
        return comment;
    }

}

function addComments(){
    console.log("good");
    showComments(inputComment.value);
    inputComment.value="";
}


