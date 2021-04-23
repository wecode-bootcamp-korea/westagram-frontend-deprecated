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

        return (changeGood.contains('goodBtn') ? changeGood.remove('goodBtn') : changeGood.add('goodBtn'));
    })
    
    // delBtn
    delBtn.addEventListener('click', () => {
        commentLists.removeChild(commentList);
    })
};

// init
const addCommentInit = () => {
    commentBar.addEventListener('keydown', function(e){
        if(e.keyCode == 13 && commentBar.value) {
            addComment(commentBar.value);
        }
    })

    commentUploadBtn.addEventListener('click', function() {
        if(commentBar.value) {
            addComment(commentBar.value);
        }
    })
}
addCommentInit();

// profile__nav
const profileBtn = document.querySelector('.profile__navBtn');
const profileNav = document.querySelector('.profile__nav');

profileBtn.addEventListener('click', () => {
    const profileClass = profileNav.classList;

    return (!profileClass.contains('profile__nav__showHide') ? profileClass.add('profile__nav__showHide') : profileClass.remove('profile__nav__showHide'));
    });

// search__people__container
const searchContianer = document.querySelector('.search__people__container');
const searchBar = document.querySelector('.nav__searchBar');
const searchBarClass = searchContianer.classList;

const searchBarGetSet = () => {
    return (searchBarClass.contains('profile__nav__showHide') ? searchBarClass.remove('profile__nav__showHide') : searchBarClass.add('profile__nav__showHide'));
}

searchBar.addEventListener('focus', () => {
    searchBarGetSet();
})

searchBar.addEventListener('blur', () => {
    searchBarGetSet();
})

// search__id
const PEOPLE_LIST = [
    {
        name: 'syeon',
        img: 'images/avator.JPG',
        state: 'it is me'
    },
    
    {
        name: 'junmo',
        img: 'images/avator.JPG',
        state: 'Good_man'
    },
    
    {
        name: 'ojea',
        img: 'images/avator.JPG',
        state: 'first_team'
    },

    {
        name: 'wecode',
        img: 'images/avator.JPG',
        state: 'learning_place'
    },
    
    {
        name:'wongeun',
        img: 'images/avator.JPG',
        state: 'funny'
}];

const searchContainerPerson = document.querySelector('.search__people__container');

searchBar.addEventListener('keyup', (e) => {
    const searchBarValue = searchBar.value;
    if(!searchBar.value) {
        return
    }
    searchContainerPerson.innerHTML = '';

    PEOPLE_LIST.map(element => {
        const objName = element.name;
        
        if(searchBarValue === objName.slice(0, searchBarValue.length)){
            const searchContainerLi = document.createElement('li');

            searchContainerLi.innerHTML = `
            <li class="search__person">
                <img src="${element.img}">
                <div class="search__personNames">
                    <div class="search__person__nickName">
                        ${element.name}
                    </div>
                    <div class="search__person__realName">
                        ${element.state}
                    </div>
                </div>
            </li>
            `
            searchContainerPerson.appendChild(searchContainerLi);
        }
    })
})