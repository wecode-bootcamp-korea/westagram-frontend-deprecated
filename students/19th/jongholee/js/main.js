const darkmodeBtn = document.getElementsByClassName("darkmode-btn")[0];
const container = document.getElementsByClassName('container')[0];

const storyPrevBtn = document.getElementsByClassName("story-previous")[0];
const storyNextBtn = document.getElementsByClassName("story-next")[0];
const storyList = document.getElementsByClassName('story-list')[0];
const storyContainer = document.getElementsByClassName('story-container')[0];

const ul_tag = document.getElementsByClassName('section-content-list')[0];

const commentText = document.getElementsByClassName('comment-text')[0];
const commentBtn = document.getElementsByClassName('comment-btn')[0];

const STORY_MOVE_VALUE = 200;


darkmodeBtn.addEventListener("click", darkBtnClickEvent);

storyPrevBtn.addEventListener("click", prevClickEvent);
storyNextBtn.addEventListener("click", nextClickEvent);

commentText.addEventListener('input', commentTextInput);

commentBtn.addEventListener("click", function () {
    enterInput();

    commentText.value = '';
});

commentText.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        enterInput();

        commentText.value = '';
    }
})

initPage();

function initPage() {
    if (isPrevEnd()) {
        storyPrevBtn.style.display = "none"
    }
}

function darkBtnClickEvent() {
    if (container.style.backgroundColor === 'rgb(250, 250, 250)' || container.style.backgroundColor === '') {
        container.style.backgroundColor = "rgb(32, 32, 32)";
        darkmodeBtn.innerHTML = "white"
    } else {
        container.style.backgroundColor = 'rgb(250, 250, 250)'
        darkmodeBtn.innerHTML = "dark"
    }
}

function prevClickEvent() {
    if (!isPrevEnd()) {
        storyList.style.transition = "0.4s";
        storyList.style.left = `${storyList.offsetLeft + STORY_MOVE_VALUE}px`

        storyNextBtn.style.display = "inline"

        if (isPrevEndBefore()) {
            storyPrevBtn.style.display = "none"
        }
    }
}

function nextClickEvent() {
    if (!isNextEnd()) {
        storyList.style.transition = "0.4s";
        storyList.style.left = `${storyList.offsetLeft - STORY_MOVE_VALUE}px`

        storyPrevBtn.style.display = "inline"

        if (isNextEndBefore()) {
            storyNextBtn.style.display = "none"
        }
    }
}

function isPrevEnd() {
    return storyList.offsetLeft === 0 ? true : false
}

function isPrevEndBefore() {
    return storyList.offsetLeft >= -STORY_MOVE_VALUE ? true : false
}

function isNextEnd() {
    return (storyList.offsetWidth + storyList.offsetLeft < storyContainer.offsetWidth) ? true : false
}

function isNextEndBefore() {
    return (storyList.offsetWidth + storyList.offsetLeft - STORY_MOVE_VALUE < storyContainer.offsetWidth) ? true : false
}

function commentTextInput() {
    if (commentText.value.length > 0) {
        commentBtn.disabled = false;
        commentBtn.style.color = "#0095f6"
    } else {
        commentBtn.disabled = true;
        commentBtn.style.color = "#b6e2ff"
    }
}

// 댓글 입력 후 엔터 이벤트
function enterInput() {
    addComment(document.getElementsByClassName('comment-text')[0].value);
}

// 댓글 추가 기능
function addComment(input_value) {
    // 댓글 객체 만들기
    let new_comment_li = document.createElement('li');
    new_comment_li.className = 'section-content-box article-div';

    let new_comment_name = document.createElement('span');
    new_comment_name.className = 'section-content-nickname';
    new_comment_name.innerHTML = 'jongho';

    let new_comment_content = document.createElement('span');
    new_comment_content.className = 'section-content-content';
    new_comment_content.innerHTML = input_value;

    let new_heart_icon = document.createElement('i');
    new_heart_icon.className = 'far fa-heart';
    new_heart_icon.addEventListener('click', function (e) {
        clickHeart(e);
    });

    let new_delete_icon = document.createElement('i');
    new_delete_icon.className = 'far fa-trash-alt';
    new_delete_icon.addEventListener('click', function (e) {
        clickDelete(e);
    });

    new_comment_li.appendChild(new_comment_name);
    new_comment_li.appendChild(new_comment_content);
    new_comment_li.appendChild(new_heart_icon);
    new_comment_li.appendChild(new_delete_icon);

    ul_tag.appendChild(new_comment_li);
}

const heartIcon = document.getElementsByClassName('fa-heart')[0];

function clickHeart(e) {
    if (e.target.className === 'fas fa-heart') {
        e.target.className = 'far fa-heart'
    } else {
        e.target.className = 'fas fa-heart';
    }
}

heartIcon.addEventListener('click', function (e) {
    clickHeart(e);
})

const deleteIcon = document.getElementsByClassName('fa-trash-alt')[0];

deleteIcon.addEventListener('click', function (e) {
    clickDelete(e);
})

function clickDelete(e) {
    e.target.parentElement.remove();
}

const navSearchInput = document.getElementsByClassName('nav-search-input')[0];

const navSearchContainer = document.getElementsByClassName('nav-search-container')[0];

navSearchInput.addEventListener('focus', function (e) {
    e.target.parentNode.firstElementChild.style.marginLeft = '5px';
    // e.target.placeholder.style.textAlign = 'left';

    // 검색 창 보이기
    navSearchContainer.style.display = 'inline-block';

    // next버튼 안보이게 하기
    storyNextBtn.style.display = 'none';
})

navSearchInput.addEventListener('focusout', function (e) {
    e.target.parentNode.firstElementChild.style.marginLeft = '79px';
    // e.target.placeholder.style.textAlign = 'center';

    navSearchContainer.style.display = 'none';
    storyNextBtn.style.display = 'inline-block';
})
const navSearchList = document.getElementsByClassName('nav-search-list')[0];

// 키 입력시 값을 찾는다.
navSearchInput.addEventListener('input', function () {
    // input의 값을 변수에 저장 == keyword
    const keyword = navSearchInput.value;

    if (keyword.length == 0) {
        navSearchList.innerHTML = ''
        return
    }
    // key에 해당하는 값들을 배열에 담음
    const arr = findFriend(friend_list, keyword);
    // 해당 값을 ul에 넣는다.

    arr.forEach((friend, index) => {
        let new_li = document.createElement('li')
        let new_nickname = document.createElement('span');
        let new_name = document.createElement('span')

        new_nickname.innerHTML = friend.nickname;
        new_name.innerHTML = friend.name;
        new_li.appendChild(new_nickname)
        new_li.appendChild(new_name)

        navSearchList.appendChild(new_li);
    })
})
// 42개의 친구 목록
const friend_list = makeSumNickname();

function makeSumNickname() {
    let friend_list = [];

    for (let i = 0; i < 42; i++) {
        let arr = []

        arr.push(makeChar(arr))
        arr.push('_')
        arr.push(makeNum(arr));

        friend_list.push(arr.join(''))
    }
    friend_list = makeKor(friend_list)

    return friend_list
}

function makeKor(friend_list) {
    let kor_arr = [
        '강서형'
        , '김근호'
        , '김남선'
        , '김도희'
        , '김동현'
        , '김영훈'
        , '김태현'
        , '김현영'
        , '김효진'
        , '김희열'
        , '문희원'
        , '박단비'
        , '박성은'
        , '박세리'
        , '박형섭'
        , '백승찬'
        , '서동이'
        , '서득영'
        , '서민석'
        , '손주영'
        , '신지원'
        , '안정현'
        , '양명진'
        , '원재연'
        , '유동헌'
        , '윤서준'
        , '이명진'
        , '이병재'
        , '이서진'
        , '이예원'
        , '이윤형'
        , '이재영'
        , '이재은'
        , '이종호'
        , '정새미'
        , '정재유'
        , '채준형'
        , '함경재'
        , '홍진아'
        , '홍태경'
        , '황수민'
        , '황재원'
    ]
    // let new_friend_list = friend_list.map((item, index) => {
    //     return item + '_' + kor_arr[index]
    // })

    // return new_friend_list
    let new_friend_list = [];

    friend_list.forEach((item, index) => {
        let obj = {
            nickname: item,
            name: kor_arr[index]
        }

        new_friend_list.push(obj)
    })

    return new_friend_list
}

function makeChar(arr) {
    let len = ranFunc(3, 5)

    for (let j = 0; j < len; j++) {
        let ran_num = ranFunc(97, 122)
        let ascii = String.fromCharCode(ran_num)
        arr.push(ascii)
    }

    return arr;
}

function makeNum(arr) {
    let len = ranFunc(3, 5)

    for (let j = 0; j < len; j++) {
        let ran_num = ranFunc(0, 9)
        arr.push(ran_num)
    }
}

function ranFunc(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function findFriend(friends, keyword) {
    let result = []

    friends.forEach(a => {
        if (a.nickname.match(keyword) != null) {
            result.push(a)
        } else if (a.name.match(keyword) != null) {
            result.push(a)
        }
    })

    return result;
}