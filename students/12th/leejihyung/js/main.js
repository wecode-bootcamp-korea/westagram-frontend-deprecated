const commentInput = document.getElementsByClassName('input-comment')[0];
const commentBtn = document.getElementsByClassName('submit-comment')[0];
const commentList = document.getElementsByClassName('comments')[0];
const searchInput = document.getElementById('searchInput');
const searchList = document.getElementsByClassName('search-list')[0];
const resultBox = document.getElementsByClassName('search-result-box')[0];

// 댓글 데이터
const commentArray = [
    {id: "postmalone",
    content: "내가 입으면 더 잘 어울릴 것 같아",
    deletebutton: `<img alt="more" class="comment-more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png">`,
    likebutton: `<div class="comment-like">
                    <img alt="하트" class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
                    <img alt="좋아요된하트" class="comment-heart-liked" src="img/liked.png">
                </div>`}
]

// 계정 데이터
const userArray = [
    {id: "todayis_wendy",
    nickname: "Wendy",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/74914119_2349586052018182_981153319919550464_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=gFvrVFRXS4QAX_niWLz&oh=836ff9d75f3affb832016653d67d4cdd&oe=5F700D7A"},
    {id: "wecode_bootcamp",
    nickname: ">wecode | 위코드",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_EviRwIlS2MAX8jQXKS&oh=ca6eceb4c8e5b2585adee1288530eb67&oe=5F6F0970"},
    {id: "wecodedk",
    nickname: "WeCode",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13116730_1706709109589154_716567936_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Gd6lkIN9ZKwAX-nZpP2&oh=a63d55e475caa8f29781541fa15ad43b&oe=5F6FB373"},
    {id: "thisisyourhyung",
    nickname: "JIHYUNG LEE",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71022783_513111249480681_2188078115513696256_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7Rl_bMO8TN4AX9C-AKS&oh=64741fc0f2635ebb63f94d5285798e08&oe=5F6A0524"},
    {id: "wedding_limwegi",
    nickname: "이예림 플래너 | 베리굿웨딩",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100767610_1180085765716998_1803428214647816192_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=2TkZdzw15bcAX95u-8X&oh=e05f8e7959bb2743170a8aeb6a8936ce&oe=5F6FC96E"},
    {id: "wecode_founder",
    nickname: "송은우 (Eun Woo Song)",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/95487199_185290135875370_3869726896170205184_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Mc2n37ZUt-YAX_uuSnU&oh=da46ba94f0e7f252813118343352f5f8&oe=5F7240C5"},
    {id: "shall_we_moncher",
    nickname: "몽쉘",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73361719_819771735159714_3093402774210084864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_27Mx444a3wAX-Rlp84&oh=540e6d0b29d2382c6edfd3398f8fa8e9&oe=5F70D4BF"},
    {id: "welcometosoomin",
    nickname: "SOOMIN",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/80604651_569390977037188_1043545901806649344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=l_AyCjOv94UAX9PhYlW&oh=53e4f29aef04e2404af997b4710ed49e&oe=5F702588"},
    {id: "wecode_korea",
    nickname: "",
    picture: "https://instagram.fcnq2-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcnq2-2.fna.fbcdn.net&_nc_ohc=7xEzH-b7neEAX8c6Zss&oh=13cd686873745bec4aa9aea6ade7d2d5&oe=5F6EA40F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"},
    {id: "diuun_",
    nickname: "Jiyoon",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/92815808_654640765087774_3569504833889107968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IWig0tbhq5IAX9pYuIX&oh=ea8c41b47956e02c59b656ea6f21b467&oe=5F6F5643"},
    {id: "ssem_ni",
    nickname: "세 민",
    picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/117155857_903863120099240_2371507172497494303_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=MG5LtHwXexUAX8JmCGN&oh=17c235482e73a66bfe99d6173930e198&oe=5F7205F2"},
]

// 댓글 데이터 노출
commentArray.forEach(function(e) {
    showComments(e)
});

function showComments(comment) {
    const newComment = document.createElement('li');
    newComment.innerHTML = `
        <span>
            <span class="point-span userID">${comment.id}</span>${comment.content}
        </span>
            <div>
                ${comment.deletebutton}
                ${comment.likebutton}
            </div>`;
    commentList.appendChild(newComment);
}

// 댓글 추가
function addComment() {
    const commentList = document.getElementsByClassName('comments')[0];
    while (commentList.hasChildNodes()) {
        commentList.removeChild(commentList.firstChild);
    }
    const newComment = {
        id: "thisisyourhyung",
        content: `${commentInput.value}`,
        deletebutton: `<img alt="more" class="comment-more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png">`,
        likebutton: `
            <div class="comment-like">
                <img alt="하트" class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
                <img alt="좋아요된하트" class="comment-heart-liked" src="img/liked.png">
            </div>`}
    commentArray.push(newComment);
    commentInput.value = "";
    commentBtn.disabled = true;
    commentArray.forEach(function(e) {
        showComments(e)
    });
    likeComment();
    deleteComment();
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

// 삭제, 좋아요 기능
function deleteComment() {
    const deleteBtn = document.querySelectorAll('.comment-more');
    deleteBtn.forEach(function(event) {
        event.addEventListener('click', function() {
            commentArray.pop(event.parentNode.parentNode);
            this.parentNode.parentNode.remove();
        });
    })
}

function likeComment() {
    const commentLike = document.querySelectorAll('.comment-like');
    commentLike.forEach(function(event) {
        event.addEventListener('click', function() {
            const likeBtn = this.querySelector('.comment-heart');
            const likedBtn = this.querySelector('.comment-heart-liked');

            if (likeBtn.style.display === 'none') {
                likeBtn.style.display = 'inline-block';
                likedBtn.style.display = 'none';
            } else {
                likeBtn.style.display = 'none';
                likedBtn.style.display = 'inline-block';
            }
        })
    })
}

likeComment();
deleteComment();

// 아이디 검색 기능
function matchSearch(value) {
    const searchID = searchInput.value;
    return value.indexOf(searchID) != -1;
}

function showFilteredID(id) {
    resultBox.style.display = "flex";
    const filteredUser = document.createElement('li');
    filteredUser.innerHTML = `
        <img class="img-profile" src=${id.picture} alt=${id.id}님의 프로필 사진">
        <div class="profile-text">
        <span class="userID point-span">${id.id}</span>
        <span class="sub-span">${id.nickname}</span>  
        </div>`
    searchList.appendChild(filteredUser);
}

searchInput.addEventListener('keyup', function() {
    searchList.innerHTML = '';
    resultBox.style.display = "none";
    if (searchInput.value) {
        const filteredID = userArray.filter( x => matchSearch(x.id))
        if (filteredID) {
            filteredID.forEach(function(e) {
                showFilteredID(e)
            })
        }
    }
})

searchInput.addEventListener('focusout', function() {
    resultBox.style.display = "none";
})

