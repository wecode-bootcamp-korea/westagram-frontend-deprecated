const commentPostButton = document.getElementsByClassName('feed-comment-input-button')[0];
const instaID = document.getElementsByClassName('main-right-profile-name')[0].innerText;
const commentSection = document.getElementsByClassName('feed-comment')[0];
const rightNow = new Date(); // 처음 접속했을 때 시간을 기록

// 코멘트 element를 만들어서 코멘트 섹션에 넣어준다. 
const createAndAppendCommentElement = (commentInputValue) => {
    const newComment = document.createElement('div');
    newComment.className = ('feed-comment-row');
    newComment.innerHTML = `<span><strong>${instaID}</strong>&nbsp;${commentInputValue}</span><i class="far fa-heart"></i>`;
    commentSection.appendChild(newComment);
}

// 코멘트 타임태그 element를 만들어서 코멘트 섹션에 넣어준다. 
const createAndAppendTimeTag = (rightNowAfter) => {
    const newTimeTag = document.createElement('div');
    newTimeTag.className = ('feed-comment-timetag');
    newTimeTag.innerHTML = `${Math.round((rightNowAfter - rightNow) / 1000)}초 전`;
    commentSection.appendChild(newTimeTag);
}

const postComment = (event) => {
    event.preventDefault();
    
    const commentInput = document.getElementsByClassName('feed-comment-input-content')[0]; // 코멘트 인풋태그
    const commentInputValue = document.getElementsByClassName('feed-comment-input-content')[0].value; // 코멘트 인풋태그 값
    const rightNowSecond = new Date(); // 이벤트가 일어 났을 때 시간을 기록

    if (commentInputValue) {
        createAndAppendCommentElement(commentInputValue);
        createAndAppendTimeTag(rightNowSecond);
    }
    commentInput.value = ""; 
}


commentPostButton.addEventListener('click', postComment);