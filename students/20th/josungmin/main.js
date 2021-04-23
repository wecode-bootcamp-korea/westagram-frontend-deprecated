const commentInput = document.getElementById('input_comment');
const commentBtn = document.getElementsByClassName('submit_comment')[0];
const commentList = document.getElementsByClassName('comments')[0];



commentBtn.addEventListener('click', function(){
    if (commentInput.value) {
        const newComment = document.createElement('li')
        newComment.innerHTML = `<span><span class="point-span userID">josungmin</span>` + commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
})

commentInput.addEventListener('keydown', function(e){
    if (commentInput.value) {
        if (e.which === 13) {
            var newComment = document.createElement('li')
            newComment.innerHTML = `<span><span class="point-span userID">thisisyourhyung</span>` + this.value
            commentList.appendChild(newComment);
            this.value = "";
        }
    }
})




commentInput.addEventListener('keyup', function(event) {
    if (commentInput.value) {
        commentBtn.disabled = false;
    }
    else {
        commentBtn.disabled = true;
    }
})

