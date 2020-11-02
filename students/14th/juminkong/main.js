// input 댓글
let comment = document.querySelector('.add_comment'); 
// 버튼 킅릭
let button = document.querySelector('#btn');
// 댓글추가하는 박스
const comment_added = document.querySelector('.comment.added');
// comment를 넣으려고 하는 박스 
const your_feed_text = document.querySelector('.your_feed_text');

function addComment() {
    const container = document.createElement("div");
    const friends = document.createElement("span");
    const comments = document.createElement("span");
    let myID = "im__zulie";
    container.setAttribute("class", "comment_added");
    friends.setAttribute("id", "feed_js_id");
    comments.setAttribute("id", "feed_js_text");
    friends.innerHTML = myID;
    comments.innerHTML = comment.value;

    your_feed_text.appendChild(container);
    container.appendChild(friends);
    container.appendChild(comments);

    comment.value = '';
}

button.addEventListener("click", addComment);

comment.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        return addComment();
    }
});

comment.addEventListener("keyup", function() {
    if(comment.value) {
        button.style.color = '#0095f6';
    } else {
        button.style.color = '#e3f1fe'
    }
});


// 코멘트 치면 버튼 색
let input_comment = document.querySelector('.add_comment');

input_comment.addEventListener('keydown', () => {
    let button = document.querySelector('button');
    button.style.opacity = 1;
});