const commentBar = document.querySelector('.feeds__commentBar');
const commentLists = document.querySelector('.feeds__comments__lists');
const commentUploadBtn = document.querySelector('.feeds__comment__upload');

// addComment

const addComment = () => {
    const commentList = document.createElement('li');
    const comentPara = document.createElement('p');
    const goodBtn = document.createElement('div');
    const goodIcon = document.createElement('i');
    const delBtn = document.createElement('div');
    const delIcon = document.createElement('i');

    // addComment
    commentList.className = 'feeds__comments__list';
    comentPara.className = 'feeds__comments__contents';
    goodBtn.className = 'feeds__comments__goodBtn';
    goodIcon.className = 'fas fa-heart fa-xs goodBtn';
    delBtn.className = 'feeds__comments__delBtn';
    delIcon.className = 'fas fa-minus-circle delBtn';

    comentPara.innerText = commentBar.value;

    commentLists.appendChild(commentList);
    commentList.appendChild(comentPara);
    commentList.appendChild(goodBtn);
    goodBtn.appendChild(goodIcon);
    commentList.appendChild(delBtn);
    delBtn.appendChild(delIcon);

    commentBar.value = '';

    // goodBtn
    goodBtn.addEventListener('click', function() {
        if(goodIcon.style.color === 'inherit') {
            goodIcon.style.color = 'var(--heart-color)';
        } else {
            goodIcon.style.color = 'inherit';
        }
    })
    

    // delBtn
    delBtn.addEventListener('click', function() {
        commentLists.removeChild(commentList);
    })

};


// init
const addCommentInit = () => {
    commentBar.addEventListener('keydown', function(e){
        if(e.keyCode == 13 && commentBar.value !== '') {
            addComment();
        }
    })

    commentUploadBtn.addEventListener('click', function() {
        if(commentBar.value !== '') {
            addComment();
        }
    })
}
addCommentInit();

