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
    goodIcon.className = 'fas fa-heart fa-xs';
    delBtn.className = 'feed__comments__delBtn';
    delIcon.className = 'fas fa-minus-circle delBtn';

    commentLists.appendChild(commentList);
    commentList.appendChild(comentPara);
    commentList.appendChild(goodBtn);
    goodBtn.appendChild(goodIcon);
    commentList.appendChild(delBtn);
    delBtn.appendChild(delIcon);

    comentPara.innerText = commentBar.value;
    commentBar.value = '';

    // goodBtn
    goodBtn.addEventListener('click', () => {
        const changeGood = goodIcon.classList;

        if(changeGood.contains('goodBtn')) {
            changeGood.remove('goodBtn');
        } else {
            changeGood.add('goodBtn');
        }
    })
    
    // delBtn
    delBtn.addEventListener('click', () => {
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

profileBtn.addEventListener('click', () => {
    const profileClass = profileNav.classList;

    if(!profileClass.contains('profile__nav__showHide')){
        profileClass.add('profile__nav__showHide');
    } else {
        profileClass.remove('profile__nav__showHide');
    }
    });


// search__people__container
const searchContianer = document.querySelector('.search__people__container');
const searchBar = document.querySelector('.nav__searchBar');

searchBar.addEventListener('focus', () => {
    const searchBarClass = searchContianer.classList;

    if(searchBarClass.contains('profile__nav__showHide')){
        searchBarClass.remove('profile__nav__showHide');
    }
})

searchBar.addEventListener('blur', () => {
    const searchBarClass = searchContianer.classList;

    if(!searchBarClass.contains('profile__nav__showHide')){
        searchBarClass.add('profile__nav__showHide');
    }
})

