var writeComment = document.querySelectorAll('.write');

var btn = document.querySelectorAll('.article-btn');
let targetDiv = document.getElementById('shown-comment');
let searchImg = document.getElementById('search-img');
let keyword = document.getElementById('search');
let sign = document.getElementsByClassName("logo-sign")[0];
let logotxt = document.getElementsByClassName("logo-text")[0];


//class로 바꾸면 안됨. [0]붙여주면 처음 div만 적용됨
function showAndHide() {
    var comments = document.get('.hidden-comment');
    for (let i= 0; i < 3; i++) {
        if (comments[i].style.display == 'none') {
            comments[i].style.display = 'block';
        } else {
            comments[i].style.display = 'none';
        }
    }
}

var activatePost = function () {
    for (let i = 0; i<4; i++){
    if (writeComment[i].value.length !== 0) {
        btn[i].style.color = '#0095f6';
    } else {
        btn[i].style.color = '#c0e0fd';
    }
    
}
};
writeComment.addEventListener('keyup', activatePost);

btn.addEventListener('click', addComment);
writeComment.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        addComment();
    }
});


function addComment(e) {
    if (writeComment.value.length !== 0) {
        let newDiv = document.createElement("div");
        targetDiv.appendChild(newDiv);

        let firstSpan = document.createElement("span");
        firstSpan.setAttribute("class", "comment-id");
        firstSpan.innerHTML = "claire_bbo&nbsp;&nbsp;";

        let commentImg = document.createElement("img");
        commentImg.setAttribute("class", "comment-heart");
        commentImg.setAttribute("src", "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png");


        let secondSpan = document.createElement("span");
        secondSpan.setAttribute("class", "comment-content");
        secondSpan.innerHTML += writeComment.value;

        newDiv.appendChild(firstSpan);
        newDiv.appendChild(secondSpan);
        newDiv.appendChild(commentImg);

        writeComment.value = "";
        return;
    }
}


function eraseImg() {
    searchImg.style.display = "none";
}

function showImg() {
    searchImg.style.display = "flex";
}


keyword.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        window.open("https://www.instagram.com/explore/tags/" + keyword.value, '_blank');
    }

})


function reload() {
    window.location.reload();
}

sign.addEventListener("click", reload);
logotxt.addEventListener("click", reload);