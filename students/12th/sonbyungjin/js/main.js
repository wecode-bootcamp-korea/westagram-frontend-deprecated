const thisIsInput = document.getElementById('commentInput');
const thisIsButton = document.getElementsByTagName('button')[0];
const thisIsUl = document.getElementsByTagName('ul')[0];

// 댓글(+ 좋아요, 삭제) 입력
thisIsInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && thisIsInput.value !== ''){
        const thisIsLi = document.createElement('li');
        const commentOption = document.createElement('div');
        const commentLike = document.createElement('span');
        const commentRemove = document.createElement('span');
        commentLike.className = 'comment--like';
        commentRemove.className = 'comment--remove';
        commentLike.innerHTML = '좋아요';
        commentRemove.innerHTML = '삭제';
        commentOption.appendChild(commentLike);
        commentOption.appendChild(commentRemove);
        thisIsLi.innerHTML = thisIsInput.value;
        thisIsLi.appendChild(commentOption);
        thisIsUl.appendChild(thisIsLi);
        thisIsInput.value = null;
}})
thisIsButton.addEventListener('click', function(){
    const thisIsLi = document.createElement('li');
    const commentOption = document.createElement('div');
    const commentLike = document.createElement('span');
    const commentRemove = document.createElement('span');
    commentLike.className = 'comment--like';
    commentRemove.className = 'comment--remove';
    commentLike.innerHTML = '좋아요';
    commentRemove.innerHTML = '삭제';
    commentOption.appendChild(commentLike);
    commentOption.appendChild(commentRemove);
    thisIsLi.innerHTML = thisIsInput.value;
    thisIsLi.appendChild(commentOption);
    thisIsUl.appendChild(thisIsLi);
    thisIsInput.value = null;
})

