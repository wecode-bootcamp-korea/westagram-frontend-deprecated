const commentInputBtn = document.getElementById('comment-input-btn');
const displayComment = document.getElementById('comment-side');
const commentInputSide = document.getElementById('comment-input-side');

// 댓글 작성시 게시버튼 활성화
function checkComment() {

    if (commentInputSide.value !== '') {
        commentInputBtn.classList.add("activeLogin")
        commentInputBtn.classList.remove('inactiveLogin')

    } else {
        commentInputBtn.classList.add('inactiveLogin')
        commentInputBtn.classList.remove("activeLogin")

    }
}

// 댓글 게시
function inputComment(e) {
    checkComment()

    if ((commentInputSide.value !== '' && e.target == commentInputBtn) || (commentInputSide.value !== '' && e.keyCode === 13)) {

        const commentGroup = document.getElementById('comment-group')
        commentGroup.innerHTML += `
        <div class="user-account-name" id="comment-side">
            <div class="mensions-list">
                <span><b>ryuwisdom</b>
                    &nbsp;${commentInputSide.value}</span>
            </div>
            <div class="mention-like">
                <img src="./image/heart.png" alt="like">
            </div>
        </div>
        `
    }
}

commentInputSide.addEventListener('keydown', inputComment);
commentInputBtn.addEventListener('click', inputComment);

const icons = [{
        iconImage: "home"
    },
    {
        iconImage: "direct"
    },
    {
        iconImage: "explore"
    },
    {
        iconImage: "heart"
    },
    {
        iconImage: "profile"
    }
]

const iconGroup = document.getElementById('icon-group')
const storyGroup = document.getElementsByClassName('story-place')[0]
const commendGroup = document.getElementById('commend-group');
let startNum = 9

// nav바 오른쪽 상단 아이콘 삽입
icons.map((icon) => iconGroup.innerHTML += `
    <li class="icon-menu">
    <img src="./image/${icon.iconImage}.png" alt="${icon.iconImage}">
    </li>
`)

// 스토리 삽입
const storys = [{
        personalStory: "eunbary_"
    },
    {
        personalStory: "soaya_"
    },
    {
        personalStory: "geemsuf"
    },
    {
        personalStory: "dreamfeels"
    },
    {
        personalStory: "geemsuf"
    },
    {
        personalStory: "dodam_..."
    },
    {
        personalStory: "jeo_mi.."
    },
    {
        personalStory: "summer"
    }
]

storys.map((story, index) => storyGroup.innerHTML +=
    ` <div class="personal-story">
<div class="story-image">
    <img src="./image/${index+1}.jpg" alt="${index+1}">
</div>
<p class="normal story-name">${story.personalStory}</p>
</div>`)


// 친구 추천 리스트
const commends = [
    {
        commendId : "honey081012", currentFriend : "xoxo"
    },
    {
        commendId : "3__ming" , currentFriend : "inspire__"
    },
    {
        commendId : "dooreplay" , currentFriend : "love_stbt"
    },
    {
        commendId : "g_0_2" , currentFriend : "exdoeun"
    },
    {
        commendId : "ohtaytayo" , currentFriend : "h.maniii_"
    }
]

commends.map((commend,index) => commendGroup.innerHTML +=
    `
<li class="recommend">
    <div class="other-profile">
        <div class="other-profile-photo">
        <img src="./image/${startNum+index}.jpg" alt="${startNum+index}">
        </div>
        <div class="other-account-info">
        <p class="bold">${commend.commendId}</p>
        <p class="normal">${commend.currentFriend}님 외 ${Math.floor((Math.random() * 15) + 1)}명이 팔로우합니다</p>
        </div>
    </div>
        <div class="follow-btn">
        <button>팔로우</button>
        </div>
</li>
`)
