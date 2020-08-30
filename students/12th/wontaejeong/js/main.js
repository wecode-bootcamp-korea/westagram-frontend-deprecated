// Data
const userData = [
    {
        id: 1,
        name: 'username_01',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/60248402_185528342364481_6613360775178223616_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IeY0u3R1dBAAX8A05Lr&oh=2e762ce022b2ddecc4503e2762da6eb8&oe=5F6D2C88')`,
        remark: 'westargram',
        isFollowed: true,
    },
    {
        id: 2,
        name: 'username_02',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/88281183_1563018473845799_3546805755636088832_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=9euB99wPWHwAX-UKUf_&oh=3103e74251a77b1aafcc9fa6fc34dd4b&oe=5F6E666B')`,
        remark: 'westargram',
        isFollowed: false,
    },
    {
        id: 3,
        name: 'username_03',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/88400663_293372621639241_2659297162449387520_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=dLYJrzMmlLkAX98ptz-&oh=50d4eeafdca1063460ebe515e0dfc3d8&oe=5F6E0327')`,
        remark: 'westargram',
        isFollowed: true,
    },
    {
        id: 4,
        name: 'username_04',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/16229446_1269794253086008_2534864881778163712_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=fvlr0pqjiNkAX9j7Ry8&oh=7e754c78dd96434d559f19bd4a7ec635&oe=5F6FB7EE')`,
        remark: 'westargram',
        isFollowed: false,
    },
    {
        id: 5,
        name: 'username_05',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13260837_1627121044273562_2050939278_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NdaujsPmEWkAX9ASI6j&oh=468755c58fac067537b45bdd914cf714&oe=5F6D75A8')`,
        remark: 'westargram',
        isFollowed: true,
    },
    {
        id: 6,
        name: 'username_06',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/65191523_395010011116107_1855570784068567040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wQ4r0XKcq5oAX9m05ua&oh=9b9aa6dc73dd13408318cc2d8c4389cc&oe=5F6D011B')`,
        remark: 'westargram',
        isFollowed: false,
    },
    {
        id: 7,
        name: 'username_07',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/110303233_284121302856807_3427175340584342697_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=OhmCja7otYwAX-b80-1&oh=bc49704a721313d44b924718c565b4ca&oe=5F6DE551')`,
        remark: 'westargram',
        isFollowed: true,
    },
    {
        id: 8,
        name: 'username_08',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/96712438_544610926246690_1858452196023074816_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7_pRpOioy0cAX9J2ALj&oh=7e15598c835a0f281f97e0032ff8e497&oe=5F6F295F')`,
        remark: 'westargram',
        isFollowed: false,
    },
    {
        id: 9,
        name: 'username_09',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/38096775_512917779160434_8076109941934391296_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SQ0M3d4VVR4AX9qLNb4&oh=81343a563c76169fa8b9db877370f6a5&oe=5F6D10BC')`,
        remark: 'westargram',
        isFollowed: true,
    },
    {
        id: 10,
        name: 'username_10',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94009694_628933687656993_3711796026663763968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ro1Plauv6LkAX_la3zW&oh=e99288467cc6de05150060ec4f3cf797&oe=5F6F9404')`,
        remark: 'westargram',
        isFollowed: false,
    },
];
const commentData = [
    {
        id: 0,
        user: 'username_01',
        comment: '👌',
    },
    {
        id: 1,
        user: 'username_02',
        comment: '🤟🏾',
    },
];

let signedInUser = 'Wecode';

// Search bar
const searchInput = document.querySelector('nav .search-box__input');
const searchResult = document.querySelector('.search-box .result');
const searchText = document.querySelector('.search-box__text');

createDefaultSearchResult(userData);

searchInput.addEventListener('focusin', () => handlePlaceHolderPosition('36px'));
searchInput.addEventListener('focusout', () => handlePlaceHolderPosition('50%'));
searchInput.addEventListener('keyup', showSearchResult);
searchInput.addEventListener('keyup', () => {
    searchText.innerText = searchInput.value ? '' : '검색';
});

function showSearchResult() {
    const results = document.querySelectorAll('.result__user-name');

    const newResult = [...results].filter((result) => {
        return !result.innerText.includes(searchInput.value);
    });

    newResult.forEach((el) => {
        el.parentElement.parentElement.remove();
    });

    if (!searchInput.value) {
        searchResult.innerHTML = '';
        createDefaultSearchResult(userData);
    }
}

function handlePlaceHolderPosition(position) {
    const searchText = document.querySelector('nav .search-box__text');
    searchText.style.left = position;
}

function createDefaultSearchResult(data) {
    const searchResult = document.querySelector('.search-box .result');

    data.forEach((obj, index) => {
        searchResult.innerHTML = `
        ${searchResult.innerHTML}
        <li class="result__user">
            <div class="result__photo" id="result__photo${index}"></div>
            <div class="result__text">
                <span class="result__user-name">${obj.name}</span>
                <span class="result__remark">${obj.remark}</span>
            </div>
        </li>
        `;

        const photoElement = document.querySelector(`#result__photo${index}`);

        photoElement.style.background = `${obj.photo}`;
        photoElement.style.backgroundSize = 'contain';
    });
}

// Sub-Menu
const userMenu = document.querySelector('.menu__user a');
const subMenu = document.querySelector('.menu__sub-menu');

userMenu.addEventListener('click', () => subMenu.classList.toggle('clicked'));
document.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target !== userMenu) {
        subMenu.classList.remove('clicked');
    }
});

// Suggestion
(createSuggestion = () => {
    const suggestions = document.querySelector('.suggestion');

    userData.forEach((obj) => {
        const { id, name, photo, isFollowed } = obj;

        if (!isFollowed) {
            suggestions.innerHTML = `
            ${suggestions.innerHTML}
            <li>
                <div class="suggestion__photo" id="suggestion__photo${id}"></div>
                <div class="suggestion__text">
                    <span class="suggestion__user-name">${name}</span>
                    <span class="suggestion__follower">
                        unknown님 외 ${Math.ceil(
                            Math.random() * 30
                        )}명이 팔로우하고 있습니다.
                    </span>
                </div>
                <div class="suggestion__follow-button">팔로우</div>
            </li>
            `;

            const photoElement = document.querySelector(`#suggestion__photo${id}`);

            photoElement.style.background = `${photo}`;
            photoElement.style.backgroundSize = 'contain';
        }
    });
})();

// Story
(createStories = () => {
    const stories = document.querySelector('.story-container');

    userData.forEach((obj) => {
        const { id, name, photo, isFollowed } = obj;

        if (isFollowed) {
            stories.innerHTML = `
            ${stories.innerHTML}
            <li class="story">
                <div class="story__photo-wrap">
                    <div class="story__photo" id="story__photo${id}"></div>
                </div>
                <div class="story__gradient-bg"></div>
                <span class="story__username">${name}</span>
            </li>
        `;

            const photoElement = document.querySelector(`#story__photo${id}`);

            photoElement.style.background = `${photo}`;
            photoElement.style.backgroundSize = 'contain';
        }
    });
})();

// Comment
const commentsBox = document.querySelector('.comments');
const commentInput = document.querySelector('.feed__text .input input');
const submitButton = document.querySelector('.input button');
const showAllCommentsButton = document.querySelector('.comments-box-handler');

let isClicked = false;

showAllCommentsButton.addEventListener('click', handleCommentBoxSize);

commentInput.addEventListener('keyup', () => {
    submitButton.className = commentInput.value ? 'hasValue' : '';
});
commentInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        commentData.push({ user: signedInUser, comment: commentInput.value });
        createComment();
        commentInput.value = '';

        // 새로운 노드리스트 전달
        removeComment();
        handleLikesButtonColor();
    }
});

submitButton.addEventListener('click', () => {
    commentData.push({ user: signedInUser, comment: commentInput.value });
    createComment();
    commentInput.value = '';
    commentInput.focus();

    // 새로운 노드리스트 전달
    removeComment();
    handleLikesButtonColor();
});

createComment();
removeComment();
handleLikesButtonColor();

function removeComment() {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
            commentData.splice(e.target.id[0], 1);
        });
    });
}

function handleLikesButtonColor() {
    const likesButtons = document.querySelectorAll('.like');

    likesButtons.forEach((likesButton) => {
        likesButton.addEventListener('click', (e) => {
            e.target.classList.toggle('clicked');
        });
    });
}

function createComment() {
    const comments = document.querySelector('.comments');

    comments.innerHTML = '';
    commentData.forEach((obj, index) => {
        obj.id = index;

        comments.innerHTML = `
        <li class="comment">
            <div>
                <span class="comment__user-name">${obj.user}</span>
                <span class="comment__text">${obj.comment}</span>
            </div>
            <div>
                <span class="like"></span>
                <span class="delete-button" id="${index}comment">✂️</span>
            </div>
        </li>
        ${comments.innerHTML}
    `;
    });
}

function handleCommentBoxSize() {
    commentsBox.style.maxHeight = isClicked ? '45px' : '100%';
    showAllCommentsButton.innerText = isClicked ? '모든 댓글 보기' : '댓글 접기';

    isClicked = !isClicked;
}
