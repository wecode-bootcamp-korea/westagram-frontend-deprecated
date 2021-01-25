const commentInput = document.getElementsByClassName('textarea1')[0];
const commentBtn = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];

commentInput.addEventListener('keypress', function(e){
const newInput = commentInput.value;
    if (commentInput.value) {
        if (e.which === 13) {
            let newComment = document.createElement('li');
            newComment.innerHTML = `
            <span><span class="comment_userID">ggiiiaa</span><span="comment2">&nbsp&nbsp${commentInput.value}</span>
            <i class="far fa-heart"></i></div> 
            `;
            newComment.classList.add('comment_ul')
            commentList.appendChild(newComment);
            commentInput.value = "";
        }
    }
})

commentBtn.addEventListener('click', function(){
    const newInput = commentInput.value;
    if (commentInput.value) {
        let newComment = document.createElement('li')
        newComment.innerHTML = `
            <span><span class="comment_userID">ggiiiaa</span><span="comment2">&nbsp&nbsp${commentInput.value}</span>
            <i class="far fa-heart"></i></div> 
            `;
            newComment.classList.add('comment_ul')
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
})

commentInput.addEventListener('keyup', function(event) {
    const comment = commentInput.value;
    if (comment.length > 0) {
        return commentBtn.removeAttribute('disabled');
    }
    else {
        return commentBtn.setAttribute('disabled','disabled')
    }   
})