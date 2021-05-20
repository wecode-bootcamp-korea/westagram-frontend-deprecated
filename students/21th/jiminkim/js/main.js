const loginId = `jemizem`;

const appendComment = (event) => {
    
    let commentId = event.target.id.substr(-2);
    const commentTextarea = document.getElementById('textComment'+commentId);
    const commentAddButton = document.getElementById('commentButton'+commentId);
    const commentList = document.getElementById('commentList'+commentId);

    let commentStr = commentTextarea.value;
    commentStr = commentStr.replace(/(?:\r\n|\r|\n)/g,'');

    if (commentStr == '' ) {
        commentAddButton.classList.add("inactive");
        return;
    } else {
        commentAddButton.classList.remove("inactive");
    }

    if (event.target.nodeName === 'TEXTAREA') {
        if (event.key != 'Enter') return;
    }

    let commentLi = document.createElement('li')
    commentList.appendChild(commentLi);

    // 댓글 element 만들기 프로필사진 / 아이디 / 댓글내용 / 삭제 / 하트
    let commenter = document.createElement('span');
    commenter.innerHTML = `${loginId}`;
    commenter.className = "nickname bold";
    commentLi.appendChild(commenter);

    let commentContent = document.createElement('span');
    commentContent.innerHTML = commentTextarea.value;
    commentContent.className = "comment";
    commentLi.appendChild(commentContent);
    commentTextarea.value = "";
    
    let commentButtonDiv = document.createElement('div');
    commentButtonDiv.className = "button-list";
    commentLi.appendChild(commentButtonDiv);

    let commentDeleteButton = document.createElement('button');
    commentDeleteButton.innerHTML = "✖️";
    commentDeleteButton.className = "comment-delete-button";
    commentDeleteButton.addEventListener('click',(event)=>{ 
        const parentUl = event.target.parentElement.parentElement.parentElement;
        const deleteLi = event.target.parentElement.parentElement;
        parentUl.removeChild(deleteLi);
    });
    commentButtonDiv.appendChild(commentDeleteButton);
    
    let commentHeartButton = document.createElement('button');
    commentHeartButton.innerHTML = "♡";
    commentHeartButton.className = "comment-heart-button";
    commentHeartButton.addEventListener('click',(event)=>{ 
        if (event.target.innerHTML == '♡') {
            event.target.innerHTML = "♥︎";
        } else {
            event.target.innerHTML = "♡";
        }
     });
    commentButtonDiv.appendChild(commentHeartButton);
    commentAddButton.classList.add("inactive");
} 



var commentButtons = document.getElementsByClassName('commentButton');

for(var i = 0; i < commentButtons.length; i++) {
    commentButtons[i].addEventListener('click', appendComment);
}

var commentTextareas = document.getElementsByClassName('commentTextarea');

for(var i = 0; i < commentTextareas.length; i++) {
    commentTextareas[i].addEventListener('keyup', appendComment);
}