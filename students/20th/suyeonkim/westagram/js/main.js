const commentBar = document.querySelector('.feed__commentBar');
const commentLists = document.querySelector('.feed__comments__lists');
const commentUploadBtn = document.querySelector('.feed__comment__upload');

// addComment

const addComment = () => {
    const commentList = document.createElement('li');
    const comentPara = document.createElement('p');
    const goodBtn = document.createElement('div');
    const goodIcon = document.createElement('i');
    const delBtn = document.createElement('div');
    const delIcon = document.createElement('i');


    // addComment
    commentList.className = 'feed__comments__list';
    comentPara.className = 'feed__comments__contents';
    goodBtn.className = 'feed__comments__goodBtn';
    goodIcon.className = 'fas fa-heart fa-xs goodBtn';
    delBtn.className = 'feed__comments__delBtn';
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



// profile__nav

const profileBtn = document.querySelector('.profile__navBtn');
const profileNav = document.querySelector('.profile__nav');

profileBtn.addEventListener('click', function() {
    if(profileNav.classList.contains('profile__nav__showHide') === false){
        profileNav.classList.add('profile__nav__showHide');
    } else {
        profileNav.classList.remove('profile__nav__showHide');
    }
    });
