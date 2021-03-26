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
