//댓글 게시 버튼 활성화

const input = document.getElementsByTagName("input")[0];
const comment = document.getElementsByTagName("input")[1];
const btn = document.querySelector("button");
const commentForm = document.querySelector(".comments form");

function activate() {
    if(comment.value) {
        btn.classList.add("active");
        btn.removeAttribute('disabled');
    } else {
        btn.classList.remove("active");
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
    likeComment.setAttribute('alt', 'like comment');
    likeComment.setAttribute('src', 'img/heart.png');
    likeComment.className = "likeComment";
    const likeCommentRed = document.createElement("img");
    likeCommentRed.setAttribute('alt', 'liked comment');
    likeCommentRed.setAttribute('src', 'img/redheart.png');
    likeCommentRed.className = "likeComment liked hide";

    likeComment.addEventListener("click", ()=>{likeCommentRed.classList.toggle('hide')});
    likeCommentRed.addEventListener("click", ()=>{likeCommentRed.classList.toggle('hide')});

    const delBtn = document.createElement("img");
    delBtn.setAttribute('alt', 'comment ellipsis');
    delBtn.setAttribute('src', 'img/dot.png');
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
const searchList = document.querySelector(".searchList");

const usersToSearch = [{
    id: 'skuukzky',
    profileImg: 'img/skuukzky.jpg',
    description: '숮이 💄💅👡👠🎀👙🌂👗🌂🎀💋💌'
}, {
    id: '_imyour_joy',
    profileImg: 'img/_imyour_joy.jpg',
    description: 'Joy 🌺'
}, {
    id: 'cafeknotted',
    profileImg: 'img/cafeknotted.jpg',
    description: '노티드 Cafe Knotted'
}, {
    id: 'jennierubyjane',
    profileImg: 'img/jennierubyjane.jpg',
    description: 'J'
}, {
    id: 'bts.bighotofficial',
    profileImg: 'img/bts.bighotofficial.jpg',
    description: 'BTS | BANGTAN | 방탄소년단'
}, {
    id: 'skawngur',
    profileImg: 'img/skawngur.jpg',
    description: '남주혁'
}, {
    id: '_victoria_bakery',
    profileImg: 'img/_victoria_bakery.jpg',
    description: 'Victoria Bakery'
}, {
    id: 'yeojin9oo',
    profileImg: 'img/yeojin9oo.jpg',
    description: '여진구 Yeo Jin Goo'
}, {
    id: 'akmu_suhyun',
    profileImg: 'img/akmu_suhyun.jpg',
    description: '이수현 1999.05.04'
}, {
    id: 'nct_dream',
    profileImg: 'img/nct_dream.jpg',
    description: 'NCT DREAM OFFICIAL'
}, {
    id: 'wm_ohmygirl',
    profileImg: 'img/wm_ohmygirl.jpg',
    description: 'OHMYGIRL (오마이걸) WM ENT 오마이걸 공식 인스타그램'
}, {
    id: 'twicetagram',
    profileImg: 'img/twicetagram.jpg',
    description: 'TWICE'
}, {
    id: 'youngji_02',
    profileImg: 'img/youngji_02.jpg',
    description: '이영지'
}, {
    id: 'saddlerhaus_bakery',
    profileImg: 'img/saddlerhaus_bakery.jpg',
    description: 'french waffle'
}, {
    id: 'onyourm__ark',
    profileImg: 'img/onyourm__ark.jpg',
    description: 'Mark 🐯🌱'
}, {
    id: 'songkang_b',
    profileImg: 'img/songkang_b.jpg',
    description: '송강'
}, {
    id: 'roses_are_rosie',
    profileImg: 'img/roses_are_rosie.jpg',
    description: 'ROSÉ'
}, {
    id: 'dlwlrma',
    profileImg: 'img/dlwlrma.jpg',
    description: '이지금 IU'
}];

function showAllId() {
    searchList.innerHTML="";
    usersToSearch.forEach(i => {
        const matchedId = document.createElement('div');
        matchedId.innerHTML = `<div class="searchedUser">
        <img alt="user's profile image" src=${i.profileImg}>
        <div class="userId">
        <p class="id">${i.id}</p>
        <p class="gray twelve" id="description">${i.description}</p>
        </div>
        </div>`
        searchList.appendChild(matchedId);
    }
    )}
    
    function showSomeId() {
        searchList.innerHTML="";
    const matchedUsers = [];
    usersToSearch.forEach((i) => {  
    i.id.startsWith(typing.value)? matchedUsers.push(i) : null;
    });
    if(matchedUsers.length === 0) {
        searchList.innerHTML='<p>검색결과가 없습니다.</p>';
    }
    matchedUsers.forEach(i => {
        const matchedId = document.createElement('div');
        matchedId.innerHTML = `<div class="searchedUser">
        <img alt="user's profile image" src=${i.profileImg}>
        <div class="userId">
          <p class="id">${i.id}</p>
          <p class="gray twelve" id="description">${i.description}</p>
        </div>
        </div>`
        searchList.appendChild(matchedId);
    })
}

typing.addEventListener('click', showAllId);
typing.addEventListener('input', () => !typing.value? showAllId() : showSomeId());



//추천 친구

const recommendList = document.querySelector(".recommend");
const recommendUsers = usersToSearch.slice(6, 11);
recommendUsers.forEach((i) => {
    const friend = document.createElement("div");
    friend.innerHTML = `<div class="user">
    <div class="profile">
    <img alt="user's profile image" src="img/${i.id}.jpg">
    </div>
    <div class="userid">
    <p class="id">${i.id}</p>
    <p class="gray twelve">${i.description}</p>
    </div>
    <div class="follow">
    <p class="blue">팔로우</p>
    </div>
    </div>`
    recommendList.appendChild(friend);
});



//스토리

const storyBox = document.querySelector(".storyBox");
const storySpan = document.querySelector(".storySpan");
const usersForStory = [...usersToSearch].reverse();

usersForStory.forEach(i => {
    const story = document.createElement("div");
    story.className = "story";
    story.innerHTML = `
    <div>
    <img src="img/storyring.png" id="storyring">
    <img alt="user's profile image" src="img/${i.id}.jpg" id="storyprofile">
    </div>
    <p>${i.id}</p>
    `;
    storySpan.appendChild(story);
})

const ids = document.querySelectorAll(".story p");
ids.forEach(i => {
    if(i.innerHTML.length > 10) {
        const longId = i.innerHTML;
        i.innerHTML = longId.slice(0, 8)+'...';
    }
})

const prevBtn = document.querySelector(".fa-chevron-circle-left");
const nextBtn = document.querySelector(".fa-chevron-circle-right");
let right;
storySpan.style.right? right = parseInt(storySpan.style.right) : right = 0;

function next() {
    if(right < 795) {
        right += 265;
        storySpan.style.right = `${right}px`;
    }
}

function prev() {
    if(right > 0) {
        right -= 265;
        storySpan.style.right = `${right}px`;
    }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);