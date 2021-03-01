const commentsBox = document.getElementsByClassName("commentsInput")[0];
const postingBtn = document.getElementsByClassName("postingBtn")[0];

// 버튼 활성화
commentsBox.addEventListener('keyup', function() {
    const comments = document.getElementsByClassName("commentsInput")[0].value;
    return comments ? postingBtn.disabled = false : postingBtn.disabled = true
});

// 댓글 추가 기능
function addComments() {
    const ulTag = document.getElementsByClassName('articleComments')[0].getElementsByTagName('ul')[0];
    const liTag = document.createElement('li');
    const aTag = document.createElement('a');
    const spanTag = document.createElement('span');
    const comments = document.getElementsByClassName("commentsInput")[0].value;
    liTag.innerHTML = "";
    aTag.innerHTML = "honglaeyoung";
    aTag.href = "https://www.instagram.com/honglaeyoung/";
    spanTag.innerHTML = comments;
    ulTag.appendChild(liTag);
    liTag.append(aTag);
    liTag.append(" ");
    liTag.append(spanTag);
    return document.getElementsByClassName("commentsInput")[0].value = ""
}

// 버튼 클릭 시 댓글 추가
postingBtn.addEventListener('click', function() {
    addComments();
});

// 엔터키 입력 시 댓글 추가
commentsBox.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addComments()
    }
});

// 화면 width가 1000 이하로 줄어들 시 aside 섹션 사라지는 기능
window.addEventListener('resize', function() {
    const browserWidth = document.querySelector("html").offsetWidth;
    const aside = document.getElementsByClassName("mainRightSide")[0];
    return (browserWidth <= 1000) ? aside.style.display = "none" : aside.style.display = "block"
});