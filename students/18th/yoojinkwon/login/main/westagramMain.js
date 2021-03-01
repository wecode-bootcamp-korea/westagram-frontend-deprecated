const feedComment = document.getElementsByClassName('commentInput')[0];
const feedCommentButton = document.getElementsByClassName('commentButton')[0];


feedComment.addEventListener('keyup', function(){
    if(feedComment.value.length > 0){
        feedCommentButton.style.opacity = 1;
    }else{
        feedCommentButton.style.opacity = 0.5;
    }
}
);

feedCommentButton.addEventListener('click', function(){
    document.getElementById('firstComment').textContent = feedComment.value;
    feedComment.value = null;
}
);
