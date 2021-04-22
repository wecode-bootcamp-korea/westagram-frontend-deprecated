const articleComment = document.querySelector(".article__comment");
const postCommentBtn = document.querySelector(".postCommentBtn");
const postCommentInput = document.querySelector(".postCommentInput");
const commentTime = document.querySelector(".commentTime");
const pushLike = document.querySelector(".heartImg");
const likeNum = document.querySelector(".likeNum");

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
    postCommentBtn.classList.remove("blue");

    const comments = document
        .querySelector(".commentContainer")
        .cloneNode(true);
    comments.classList.remove("hide");
    comments.querySelector(".commenter").textContent = "Shaman king";
    comments.querySelector(".comment").textContent = postCommentInput.value;

    articleComment.append(comments);
    postCommentInput.value = "";
    postCommentInput.focus();
    commentTime.textContent = "방금";

    const commentDeleteBtn = document.querySelectorAll(".commentDeleteBtn");
    commentDeleteBtn.forEach((e, i) => {
        // 0번째 인덱스는 cloneNode를 위한 것이므로 실제 댓글인 첫번째 인덱스부터 잡는다.
        if (i == 0) {
            return;
        }
        e.addEventListener("click", () => {
            e.parentNode.remove();
        });
    });

    // toggle로 하면 forEach문이 실행한 후 끝까지 돌면서, 짝수 혹은 홀수일때만 좋아요가 눌리는 문제
    //stopflag 를 이용했는데 코드가 너무 안좋아보임...
    const commentLikesBtn = document.querySelectorAll(".commentLikesBtn");
    commentLikesBtn.forEach((e, i) => {
        e.addEventListener("click", () => {
            let emptyHeart = e.querySelector(".emptyHeart");
            let redHeart = e.querySelector(".redHeart");

            toggleHeart(emptyHeart, redHeart);
        });
    });
};

let stopflag = false;

const toggleHeart = (emptyHeart, redHeart) => {
    if (stopflag) {
        return;
    }
    emptyHeart.classList.toggle("hide");
    redHeart.classList.toggle("hide");

    stopflag = true;
    setTimeout(() => {
        stopflag = false;
    }, 4);
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
