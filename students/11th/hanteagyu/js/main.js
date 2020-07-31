const CommentBT = document.querySelector('.commentBT');


CommentBT.addEventListener('click', function() {
    let createList = document.createElement('li');
    let commentValue = document.querySelector('.commentInput').value;
    
    createList.textContent = commentValue;
    document.querySelector('.commentFrame').appendChild(createList);
    document.commentValue='';
})

