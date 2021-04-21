//댓글 게시 버튼 활성화

const input = document.getElementsByTagName("input")[0];
const comment = document.getElementsByTagName("input")[1];
const btn = document.querySelector("button");
const commentForm = document.querySelector(".comments form");

function activate() {
    if(comment.value) {
        btn.style.color = "#4295F6";
        btn.style.cursor = "pointer";
        btn.removeAttribute('disabled');
    } else {
        btn.style.color = "#B2DFFC";
        btn.style.cursor = "default";
        btn.setAttribute("disabled", "disabled");
    }
}

comment.addEventListener("input", activate);



//댓글 추가&좋아요&삭제

function handlesubmit(e) {
    e.preventDefault();
    const currentValue = comment.value;
    leaveaComment(currentValue);
    comment.value = "";
}

const inputValue = document.location.search;
const inputId = inputValue.slice(4, inputValue.indexOf('&'));

function leaveaComment(text) {
    const newComment = document.createElement("div");
    const contents = document.querySelector(".contents");
    newComment.className="blahblah";
    const id = document.createElement("p");
    id.className = "id";
    inputId? id.innerHTML = inputId+' ' : id.innerHTML = 'unknown ';
    const say = document.createElement("p");
    say.innerHTML = text;

    const likeComment = document.createElement("img");
    likeComment.setAttribute('src', './img/heart.png');
    likeComment.className = "likeComment";
    const likeCommentRed = document.createElement("img");
    likeCommentRed.setAttribute('src', './img/redheart.png');
    likeCommentRed.className = "likeComment liked hide";

    likeComment.addEventListener("click", ()=>{likeCommentRed.classList.toggle('hide')});
    likeCommentRed.addEventListener("click", ()=>{likeCommentRed.classList.toggle('hide')});

    const delBtn = document.createElement("img");
    delBtn.setAttribute('src', './img/dot.png');
    delBtn.id = "smalldot";
    delBtn.addEventListener("click", delComment);

    newComment.appendChild(id);
    newComment.appendChild(say);
    newComment.appendChild(delBtn);
    newComment.appendChild(likeComment);
    newComment.appendChild(likeCommentRed);
    contents.appendChild(newComment);
}

function delComment() {
    if (confirm("삭제하시겠습니까?")) {
        this.parentElement.remove();
    }
}

commentForm.addEventListener("submit", handlesubmit);



//좋아요&취소

const likes = document.querySelector("#likes");
const red = document.querySelector("#red");
const likeBtn = document.querySelector(".tab img");

function addlike() {
    likeBtn.classList.toggle("pop");
    setTimeout(() => {red.style.display = "inline"}, 200);
    likes.innerHTML = "좋아요 20개";
}

function sublike() {
    likeBtn.classList.toggle("pop");
    red.style.display = "none";
    likes.innerHTML = "좋아요 19개";
}

likeBtn.addEventListener("click", addlike);
red.addEventListener("click", sublike);



//아이디 검색
const typing = document.querySelector(".search input");
const idList = document.querySelector(".idList");

const idArray = ['apple', 'banana', 'cacao'];


typing.addEventListener('input', () => {
if(typing.value) {
    const matchedIds = idArray.map((i) => {i.startsWith(typing.value)})
    console.log(matchedIds);
    const matchId = document.createElement("li");
}
});