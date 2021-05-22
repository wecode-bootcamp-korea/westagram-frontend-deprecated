// 댓글 기능
const commentBtn = document.getElementById("commentButton");
const postHere = document.getElementById("commentBox");
const inputComment = document.getElementById("inputComment");
const submitBtn = document.getElementById("commentButton");
const mkDiv = document.createElement('div');
const delComment = document.getElementsByClassName('del_comment');


const postComment = (text) => {
    postHere.insertAdjacentHTML(
        "beforeend",
        `<li class='new_comment'>
            <span><b>yoon-in-verse</b></span> ${text} <button class='del_comment'>x</button>
        </li>`
    );
};

inputComment.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && inputComment.value.length != 0) {
        postComment(inputComment.value);
        
        // 초기화
        inputComment.value = "";
        submitBtn.style.color = "rgba(192, 223, 253, 1)";
    }
});

commentBtn.addEventListener("click", (e) => {
    if (inputComment.value.length != 0) {
        postComment(inputComment.value);
        
        // 초기화
        inputComment.value = "";
        submitBtn.style.color = "rgba(192, 223, 253, 1)";
    }
});

inputComment.addEventListener("keyup", (e) => {
    if (inputComment.value.length >= 1) {
        submitBtn.style.color = "blue";
    }
});

