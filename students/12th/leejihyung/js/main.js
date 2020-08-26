const commentInput = document.getElementsByClassName('input-comment')[0];
const commentBtn = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];

// 댓글 달기

function addComment() {
    var newComment = document.createElement('li')
    newComment.innerHTML = `<span><span class="point-span userID">thisisyourhyung</span>` + commentInput.value + `</span>`;

    // 코멘트에 더해지는 버튼 생성
    let commentBtns = document.createElement('div');

    let deleteBtn = document.createElement('img');
    deleteBtn.classList.add("comment-more");
    deleteBtn.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png";
    deleteBtn.alt = "more";

    let likeBtn = document.createElement('img');
    likeBtn.classList.add("comment-heart");
    likeBtn.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    likeBtn.alt = "하트";

    let likedBtn = document.createElement('img');
    likedBtn.classList.add("comment-heart-liked");
    likedBtn.src = "img/liked.png";
    likedBtn.alt = "좋아요된하트";

    let commentLike = document.createElement('div');
    commentLike.classList.add("comment-like");

    // 버튼에 함수 선언
    deleteBtn.addEventListener('click', function() {
        this.parentNode.parentNode.remove();
    })

    commentLike.addEventListener('click', () => {
        if (likeBtn.style.display === 'none') {
            likeBtn.style.display = 'inline-block';
            likedBtn.style.display = 'none';
        } else {
            likeBtn.style.display = 'none';
            likedBtn.style.display = 'inline-block';
        }
    })

    // 코멘트에 버튼 추가
    commentLike.appendChild(likeBtn);
    commentLike.appendChild(likedBtn);
    commentBtns.appendChild(deleteBtn);
    commentBtns.appendChild(commentLike);
    newComment.appendChild(commentBtns);
    commentList.appendChild(newComment);
    commentInput.value = "";
    commentBtn.disabled = true;
}

commentBtn.addEventListener('click', function(){
    if (commentInput.value) {
        addComment();
    }
})

commentInput.addEventListener('keyup', function(e){
    if (commentInput.value) {
        commentBtn.disabled = false;
        if (e.which === 13) {
            addComment();
        }
    }
    else {
    commentBtn.disabled = true;
    }
})

// 댓글 지우기

let deleteBtn = document.querySelectorAll('.comment-more');
deleteBtn.forEach(function(event) {
    event.addEventListener('click', function() {
        this.parentNode.parentNode.remove();
    });
})

// 댓글 좋아요

let commentLike = document.querySelectorAll('.comment-like');
commentLike.forEach(function(event) {
    event.addEventListener('click', function() {
        var likeBtn = this.querySelector('.comment-heart');
        var likedBtn = this.querySelector('.comment-heart-liked');

        if (likeBtn.style.display === 'none') {
            likeBtn.style.display = 'inline-block';
            likedBtn.style.display = 'none';
        } else {
            likeBtn.style.display = 'none';
            likedBtn.style.display = 'inline-block';
        }
    })
})


