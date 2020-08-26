const userData = [
    {
        name: 'username_01',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/60248402_185528342364481_6613360775178223616_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IeY0u3R1dBAAX8A05Lr&oh=2e762ce022b2ddecc4503e2762da6eb8&oe=5F6D2C88')`,
        remark: 'westargram',
    },
    {
        name: 'username_02',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/88281183_1563018473845799_3546805755636088832_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=9euB99wPWHwAX-UKUf_&oh=3103e74251a77b1aafcc9fa6fc34dd4b&oe=5F6E666B')`,
        remark: 'westargram',
    },
    {
        name: 'username_03',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/88400663_293372621639241_2659297162449387520_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=dLYJrzMmlLkAX98ptz-&oh=50d4eeafdca1063460ebe515e0dfc3d8&oe=5F6E0327')`,
        remark: 'westargram',
    },
    {
        name: 'username_04',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/16229446_1269794253086008_2534864881778163712_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=fvlr0pqjiNkAX9j7Ry8&oh=7e754c78dd96434d559f19bd4a7ec635&oe=5F6FB7EE')`,
        remark: 'westargram',
    },
    {
        name: 'username_05',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13260837_1627121044273562_2050939278_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NdaujsPmEWkAX9ASI6j&oh=468755c58fac067537b45bdd914cf714&oe=5F6D75A8')`,
        remark: 'westargram',
    },
    {
        name: 'username_06',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/65191523_395010011116107_1855570784068567040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wQ4r0XKcq5oAX9m05ua&oh=9b9aa6dc73dd13408318cc2d8c4389cc&oe=5F6D011B')`,
        remark: 'westargram',
    },
    {
        name: 'username_07',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/110303233_284121302856807_3427175340584342697_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=OhmCja7otYwAX-b80-1&oh=bc49704a721313d44b924718c565b4ca&oe=5F6DE551')`,
        remark: 'westargram',
    },
    {
        name: 'username_08',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/96712438_544610926246690_1858452196023074816_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7_pRpOioy0cAX9J2ALj&oh=7e15598c835a0f281f97e0032ff8e497&oe=5F6F295F')`,
        remark: 'westargram',
    },
    {
        name: 'username_09',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/38096775_512917779160434_8076109941934391296_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SQ0M3d4VVR4AX9qLNb4&oh=81343a563c76169fa8b9db877370f6a5&oe=5F6D10BC')`,
        remark: 'westargram',
    },
    {
        name: 'username_10',
        photo: `url('https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94009694_628933687656993_3711796026663763968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ro1Plauv6LkAX_la3zW&oh=e99288467cc6de05150060ec4f3cf797&oe=5F6F9404')`,
        remark: 'westargram',
    },
];

const handleSearchText = () => {
    const searchInput = document.querySelector('nav .search-box__input');
    const searchText = document.querySelector('nav .search-box__text');

    searchInput.addEventListener('focusin', () => {
        searchText.style.left = '36px';
    });
    searchInput.addEventListener('focusout', () => {
        searchText.style.left = '50%';
    });
};

handleSearchText();

const showMenuOnClick = () => {
    const userMenu = document.querySelector('.menu__user a');
    const subMenu = document.querySelector('.menu__sub-menu');
    let isClicked = true;

    userMenu.addEventListener('click', () => {
        if (isClicked) {
            subMenu.classList.add('clicked');
        } else {
            subMenu.classList.remove('clicked');
        }
        isClicked = !isClicked;
    });

    document.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target !== userMenu) {
            subMenu.classList.remove('clicked');
            isClicked = !isClicked;
        }
    });
};

showMenuOnClick();

const createSearchResult = (data) => {
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
};

createSearchResult(userData);

const handleSearchResult = () => {
    const input = document.querySelector('.search-box__input');
    const searchResult = document.querySelector('.search-box .result');
    let results = document.querySelectorAll('.result__user-name');

    input.addEventListener('keyup', () => {
        results = document.querySelectorAll('.result__user-name');

        const newResult = [...results].filter((result) => {
            return !result.innerText.includes(input.value);
        });

        newResult.forEach((el) => {
            el.parentElement.parentElement.remove();
        });

        if (!input.value) {
            searchResult.innerHTML = '';
            createSearchResult(userData);
        }
    });
};

handleSearchResult();

const removeSearchTextOnKeyUp = () => {
    const searchText = document.querySelector('.search-box__text');
    const searchInput = document.querySelector('.search-box__input');

    searchInput.addEventListener('keyup', () => {
        searchText.innerText = searchInput.value ? '' : '검색';
    });
};

removeSearchTextOnKeyUp();

const createSuggestion = () => {
    for (let i = 0; i < 5; i++) {
        const suggestions = document.querySelector('.suggestion');
        const randomNumberA = Math.ceil(Math.random() * userData.length);
        const randomNumberB = Math.ceil(Math.random() * userData.length);

        suggestions.innerHTML = `
        ${suggestions.innerHTML}
        <li>
            <div class="suggestion__photo" id="suggestion__photo${i}"></div>
            <div class="suggestion__text">
                <span class="suggestion__user-name">username_${
                    randomNumberA >= 10 ? randomNumberA : '0' + randomNumberA
                }</span>
                <span class="suggestion__follower">
                    ${userData[randomNumberB - 1].name}님 외 ${
            randomNumberA * 2
        }명이 팔로우하고 있습니다.
                </span>
            </div>
            <div class="suggestion__follow-button">팔로우</div>
        </li>
        `;

        const photoElement = document.querySelector(`#suggestion__photo${i}`);

        photoElement.style.background = `${userData[i].photo}`;
        photoElement.style.backgroundSize = 'contain';
    }
};

createSuggestion();

const createStories = () => {
    const stories = document.querySelector('.story-container');

    userData.forEach((obj, index) => {
        const newStory = document.createElement('li.story');

        newStory.innerHTML = `
            <div class="story__photo-wrap">
                <div class="story__photo" id="story__photo${index}"></div>
            </div>
            <div class="story__gradient-bg"></div>
            <span class="story__username">${obj.name}</span>
        `;

        stories.appendChild(newStory);

        const photoElement = document.querySelector(`#story__photo${index}`);

        photoElement.style.background = `${obj.photo}`;
        photoElement.style.backgroundSize = 'contain';
    });
};

createStories();

const createComment = (input, user) => {
    const comments = document.querySelector('.comments');

    comments.innerHTML = `
        <li class="comment">
            <div>
                <span class="comment__user-name">${user}</span>
                <span class="comment__text">${input.value}</span>
            </div>
            <div>
                <span class="like"></span>
                <span class="delete-button">✂️</span>
            </div>
        </li>
        ${comments.innerHTML}
    `;
};

const handleCommentsBoxSize = () => {
    const commentsBox = document.querySelector('.comments');
    const button = document.querySelector('.comments-box-handler');

    let isClicked = false;

    button.addEventListener('click', () => {
        commentsBox.style.height = isClicked ? '40px' : '100%';
        button.innerText = isClicked ? '모든 댓글 보기' : '댓글 접기';

        isClicked = !isClicked;
    });
};

const handleCommentEvents = () => {
    const input = document.querySelector('.feed__text .input input');
    const submitButton = document.querySelector('.input button');

    let deleteButtons = document.querySelectorAll('.delete-button');
    let likesButtons = document.querySelectorAll('.like');

    input.addEventListener('keyup', () => {
        submitButton.className = input.value ? 'hasValue' : '';
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            createComment(input, 'Wecode');
            input.value = '';

            deleteButtons = document.querySelectorAll('.delete-button');
            likesButtons = document.querySelectorAll('.like');

            removeComment();
            handleLikesButtonColor();
        }
    });

    submitButton.addEventListener('click', (e) => {
        createComment(input, 'Wecode');
        input.value = '';
        input.focus();

        deleteButtons = document.querySelectorAll('.delete-button');
        likesButtons = document.querySelectorAll('.like');

        removeComment();
        handleLikesButtonColor();
    });

    function removeComment() {
        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener('click', (e) => {
                deleteButtons = deleteButtons;

                e.target.parentElement.parentElement.remove();
            });
        });
    }

    function handleLikesButtonColor() {
        likesButtons.forEach((likesButton) => {
            let isClicked = false;

            likesButton.addEventListener('click', () => {
                if (isClicked) {
                    likesButton.style.background = `url('./img/heart.png') no-repeat 0 0`;
                    likesButton.style.backgroundSize = 'contain';
                } else {
                    likesButton.style.background = `url('./img/heart_clicked.png') no-repeat 0 0`;
                    likesButton.style.backgroundSize = 'contain';
                }

                isClicked = !isClicked;
            });
        });
    }

    removeComment();
    handleCommentsBoxSize();
    handleLikesButtonColor();
};

handleCommentEvents();
