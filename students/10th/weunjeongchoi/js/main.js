let logoSign = document.getElementsByClassName("logo-sign")[0];
let logotxt = document.getElementsByClassName("logo-text")[0];
let searchImg = document.getElementById('search-img');
let searchKeyword = document.getElementById('search');
let commentLine = document.getElementsByClassName('comment-line');
let deleteBtn = document.getElementsByClassName('comment-delete');
let postBtn = document.getElementsByClassName('article-btn');
let showCommentBtn = document.getElementsByClassName('footer-btn');
let hiddenComments = document.getElementsByClassName('hidden-comment');
let writeComment = document.getElementsByClassName('write');
let commentContainer = document.getElementsByClassName('shown-comment');

// reload page
function reload() {
    window.location.reload();
}
logoSign.addEventListener("click", reload);
logotxt.addEventListener("click", reload);

// show and hide search img
function eraseImg() {
    searchImg.style.display = "none";
}
function showImg() {
    searchImg.style.display = "flex";
}

// search keyword
searchKeyword.addEventListener('keyup', (e)=> {
    if (e.keyCode === 13) {
        window.open("https://www.instagram.com/explore/tags/" + searchKeyword.value, '_blank');
    }
})

// show hidden comments
function showAndHide(num) {
    hiddenComments[num].style.display = ((hiddenComments[num].style.display == 'block') ? 'none' : 'block');
    showCommentBtn[num].innerHTML = ((hiddenComments[num].style.display == 'block') ? 'View comments' : 'Hide comments');
}
for (let k = 0; k < showCommentBtn.length; k++) {
    showCommentBtn[k].addEventListener("click", () => showAndHide(k));
}

// activate comment button
function activatePost(num) {
    postBtn[num].style.color = ((writeComment[num].value.length !== 0) ? '#0095f6' : '#c0e0fd');
}

// add comments
function addComment(num) {
    if (writeComment[num].value.length !== 0) {
        let newDiv = document.createElement("div");
        commentContainer[num].appendChild(newDiv);

        let firstSpan = document.createElement("span");
        firstSpan.setAttribute("class", "comment-id");
        firstSpan.innerHTML = "claire_bbo&nbsp;&nbsp;";

        let commentImg = document.createElement("img");
        commentImg.setAttribute("class", "comment-heart");
        commentImg.setAttribute("src", "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png");

        let secondSpan = document.createElement("span");
        secondSpan.setAttribute("class", "comment-content");
        secondSpan.innerHTML += writeComment[num].value;

        newDiv.appendChild(firstSpan);
        newDiv.appendChild(secondSpan);
        newDiv.appendChild(commentImg);

        writeComment[num].value = "";
        return;
    }
}
for (let i = 0; i < writeComment.length; i++) {
    writeComment[i].addEventListener('keyup', () => activatePost(i));
    postBtn[i].addEventListener('click', () => addComment(i));
    writeComment[i].addEventListener("keyup", (e)=> {
        if (e.keyCode === 13) {
            addComment(i);
        }
    });
}
