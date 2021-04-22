const articleComment = document.querySelector(".articleComment");
const postCommentBtn = document.querySelector(".postCommentBtn");
const postCommentInput = document.querySelector(".postCommentInput");
const commentTime = document.querySelector(".commentTime");
const pushLike = document.querySelector(".heartImg");
const likeNum = document.querySelector(".likeNum");
const navSearch = document.querySelector(".navSearch");
const searchPopup = document.querySelector(".searchPopup");
const users = [
    { id: "jiyon", img: "./images/hao.jpg" },
    { id: "Shaman_king", img: "./images/hao2.jpg" },
    { id: "iu", img: "./images/iu.jpg" },
    { id: "Jeon_dongseok", img: "./images/dongseok.jpg" },
    { id: "kakashi", img: "./images/kakashi.png" },
    { id: "gaara", img: "./images/gaara.jpg" },
    { id: "hyoshin", img: "./images/hyoshin.jpeg" },
    { id: "lock-li", img: "./images/lock-li.jpg" },
    { id: "naruto", img: "./images/naruto.jpg" },
];
const userIds = users.reduce((pre, cur) => {
    return [...pre, cur.id];
}, []);
const userImgs = users.reduce((pre, cur) => {
    return [...pre, cur.img];
}, []);

const createProfileLists = (dom, imgsrc, profileName, postedTime) => {
    const asideMain = document.querySelector(`${dom} .asideMain`);
    const imgAndId = document.createElement("li");
    const asideProfileImg = document.createElement("img");
    const idAndTime = document.createElement("div");
    const profileId = document.createElement("div");
    const postTime = document.createElement("div");

    imgAndId.classList.add("imgAndId");
    asideProfileImg.classList.add("asideProfileImg");
    idAndTime.classList.add("idAndTime");
    profileId.classList.add("profileId");
    postTime.classList.add("postTime");
    postTime.classList.add("grey");

    idAndTime.append(profileId);
    idAndTime.append(postTime);
    imgAndId.append(asideProfileImg);
    imgAndId.append(idAndTime);
    asideMain.append(imgAndId);

    profileId.textContent = profileName;
    postTime.textContent = postedTime;
    asideProfileImg.setAttribute("src", imgsrc);
};

users.forEach((user) => {
    createProfileLists(".story", user.img, user.id, "20분 전");
});
users.forEach((user) => {
    createProfileLists(
        ".recommend",
        user.img,
        user.id,
        "000님이 팔로우합니다."
    );
});

navSearch.addEventListener("keyup", () => {
    if (userIds.includes(navSearch.value)) {
        const searchedList = document.createElement("li");
        const profileImg = document.createElement("img");
        const idAndNickname = document.createElement("div");
        const userid = document.createElement("div");
        const nickname = document.createElement("div");

        userid.textContent = navSearch.value;
        let userIdIndex = userIds.indexOf(navSearch.value);
        profileImg.setAttribute("src", users[userIdIndex].img);

        idAndNickname.append(userid);
        idAndNickname.append(nickname);
        searchedList.append(profileImg);
        searchedList.append(idAndNickname);
        searchPopup.append(searchedList);
    }
    if (navSearch.value.length === 0) {
        searchPopup.innerHTML = "";
    }
});
navSearch.addEventListener("blur", () => {
    searchPopup.innerHTML = "";
});
navSearch.addEventListener("click", () => {
    alert("유저id를 쳐보세요 ex) iu, kakashi ...");
});

pushLike.addEventListener("click", (e) => {
    e.preventDefault();
    if (pushLike.style.backgroundPosition.slice(0, 4) === "-156") {
        pushLike.style.backgroundPosition = `-130px -478px`;
        likeNum.textContent = Number(likeNum.textContent) + 1;
    } else {
        pushLike.style.backgroundPosition = `-156px -478px`;
        likeNum.textContent = Number(likeNum.textContent) - 1;
    }
});

const clickCommentBtn = () => {
    const commentWrap = document.createElement("div");
    const commenter = document.createElement("span");
    const comment = document.createElement("span");
    const commentDeleteBtn = document.createElement("button");
    const commentLikesBtn = document.createElement("button");

    commentWrap.classList.add("commentWrap");
    commenter.classList.add("commenter");
    comment.classList.add("comment");
    commentDeleteBtn.classList.add("commentBtn");
    commentLikesBtn.classList.add("commentBtn");

    // 구현중
    // commentDeleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
    // commentLikesBtn.innerHTML = `<i class="emptyHeart far fa-heart"></i><i class="redHeart fas fa-heart red hide"></i>`;

    commentWrap.append(commenter);
    commentWrap.append(comment);
    articleComment.append(commentWrap);

    commenter.textContent = "Shaman_king";
    comment.textContent = postCommentInput.value;

    postCommentInput.value = "";
    postCommentInput.focus();
    commentTime.textContent = "방금";
    postCommentBtn.classList.remove("blue");

    // 구현중 delete, like btn 클릭시
    const commentDeleteBtns = document.querySelectorAll(".commentDeleteBtn");
    commentDeleteBtns.forEach((e, i) => {
        // 0번째 인덱스는 cloneNode를 위한 것이므로 실제 댓글인 첫번째 인덱스부터 잡는다.
        if (i == 0) {
            return;
        }
        e.addEventListener("click", () => {
            e.parentNode.remove();
        });
    });

    // toggle로 하면 forEach문이 실행한 후 끝까지 돌면서, 짝수 혹은 홀수일때만 좋아요가 눌리는 문제
    const commentLikesBtns = document.querySelectorAll(".commentLikesBtn");
    commentLikesBtns.forEach((e, i) => {
        e.addEventListener("click", () => {
            let emptyHeart = e.querySelector(".emptyHeart");
            let redHeart = e.querySelector(".redHeart");

            emptyHeart.classList.toggle("hide");
            redHeart.classList.toggle("hide");
        });
    });
};

postCommentBtn.addEventListener("click", () => {
    clickCommentBtn();
});

postCommentInput.addEventListener("keyup", (e) => {
    postCommentInput.value.length > 0
        ? postCommentBtn.classList.add("blue")
        : postCommentBtn.classList.remove("blue");
    if (e.keyCode !== 13) {
        return;
    } else {
        clickCommentBtn();
    }
});
