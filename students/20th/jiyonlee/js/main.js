const articleComment = document.querySelector(".article__comment");
const postCommentBtn = document.querySelector(".postCommentBtn");
const postCommentInput = document.querySelector(".postCommentInput");
const commentTime = document.querySelector(".commentTime");

const clickCommentBtn = () => {
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

    //toggle로 하면 forEach문이 실행한 후 끝까지 돌면서, 짝수 혹은 홀수일때만 좋아요가 눌리는 문제

    const commentLikesBtn = document.querySelectorAll(".commentLikesBtn");
    commentLikesBtn.forEach((e, i, arr) => {
        {
            e.addEventListener("click", (event) => {
                const emptyHeart = e.querySelector(".emptyHeart");
                const redHeart = e.querySelector(".redHeart");

                emptyHeart.classList.toggle("hide");
                redHeart.classList.toggle("hide");
            });
        }
    });
};

postCommentBtn.addEventListener("click", () => {
    clickCommentBtn();
});

postCommentInput.addEventListener("input", (e) => {
    e.keyCode === 13 ? clickCommentBtn() : null;
    postCommentInput.value.length > 0
        ? postCommentBtn.classList.add("blue")
        : postCommentBtn.classList.remove("blue");
});
