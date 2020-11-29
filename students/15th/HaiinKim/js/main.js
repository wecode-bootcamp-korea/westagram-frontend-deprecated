
const form = document.querySelector('.mainFeedCommentBox');
const input = document.querySelector('.mainFeedCommentBoxInput');
const btn = document.querySelector('.mainFeedBtn');
const heart = document.querySelector('.mainFeedCommentLikeHeart');
const ul = document.querySelector('.mainFeedComments');
const deletes = document.querySelectorAll('.mainFeedCommentDel');
const lists = document.querySelectorAll('.mainFeedComment');
const hearts = document.querySelectorAll('.mainFeedCommentLikeHeart');

form.addEventListener('submit', addComment)
input.addEventListener('keyup', moreThanOne)

for (let i = 0; i < hearts.length; i ++) {
    hearts[i].addEventListener('click', function(){
        this.classList.toggle("flipped");
        })
}

for (let i = 0; i < deletes.length; i ++) {
    deletes[i].addEventListener('click', function() {
        lists[i].remove();
    })
}

function addComment (event) {
    event.preventDefault();
    
    const divList = document.createElement('div');
    const divLike = document.createElement('div');
    const li = document.createElement('li');
    const spanUser = document.createElement('span');
    const spanComm = document.createElement('span');
    li.classList.add('mainFeedComment');
    spanComm.className = 'commentComm';
    divList.classList.add('mainFeedCommentList');
    divLike.classList.add('mainFeedCommentLike');
    
    divList.innerHTML = '<span class="commentUser">Haiin.k</span>';
    spanComm.innerHTML = input.value;
    divList.appendChild(spanComm);
    divLike.innerHTML = '<i class="far fa-heart mainFeedCommentLikeHeart"></i>';
    divLike.innerHTML = '<span class="mainFeedCommentDel">삭제</span>';
    li.appendChild(divList);
    li.appendChild(divLike);
    ul.appendChild(li);
    input.value = "";
}

function moreThanOne () {
    const newComment = input.value;
   
    if (newComment.length >= 1) {
        btn.style.color = "rgb(44, 134, 224)";
    } else {
        btn.style.color = "#CAE3FC";
    }
}

