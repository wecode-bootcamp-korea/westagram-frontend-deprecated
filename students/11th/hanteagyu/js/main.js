const CommentBT = document.querySelector('.commentBT');
const commentText = document.querySelector('.commentInput');


CommentBT.addEventListener('click', function() {
    let createList = document.createElement('li');
    let commentValue = document.querySelector('.commentInput').value;
    
    createList.textContent = commentValue;
    document.querySelector('.commentFrame').appendChild(createList);
    commentText.value='';
})

commentText.addEventListener('keydown', function(event) {
    if(event.keyCode == 13){
        let createList = document.createElement('li');
        let commentValue = document.querySelector('.commentInput').value;
        let commentText = document.querySelector('.commentInput');
    
        createList.textContent = commentValue;
        document.querySelector('.commentFrame').appendChild(createList);
        commentText.value='';
    }
 })

  