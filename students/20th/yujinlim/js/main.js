const feeds = Array.from(document.querySelectorAll(".feed"));
const commentInputs = Array.from(document.querySelectorAll(".feed__input"));
const buttons = Array.from(document.querySelectorAll("button"));

const myID = document.querySelector(".main-right__my-id").innerText;
const OPACITY = "feed__submit-btn--opacity";

//버튼 클릭시 새로고침 막기
buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    e.preventDefault();
  })
);

//상위 요소 feed에 이벤트 할당
feeds.forEach((feed) =>
  feed.addEventListener("click", function (e) {
    const commentInput = feed.querySelector(".feed__input");
    const commentList = feed.querySelector(".js-feed-comments");
    const inputValue = commentInput.value;
    const commentColumn = document.createElement("div");
    const likesCountSpan = feed.querySelector(".js-likes-count");
    const FEED_COMMENT = `
      <div class="js-feed-comment">
        <span>${myID}</span>
        <span>${inputValue}</span>
        <div class="js-comment-btns">
            <button class="js-comment-btn like-btn">
                <i class="far fa-heart"></i>
            </button>
            <button class="js-comment-btn delete-btn">
                <i class="fas fa-times"></i>
            </button>
        </div>
      </div>
        `;
    commentColumn.innerHTML = FEED_COMMENT;

    //이벤트 위임. e path[0]을 가지고 판단
    //게시 버튼
    if (e.target && e.target.className === "feed__submit-btn") {
      commentList.appendChild(commentColumn);
      commentInput.value = "";
      e.target.classList.add(OPACITY);
    } else if (
      //좋아요 버튼
      (e.target && e.target.className === "far fa-heart") ||
      (e.target && e.target.className === "fas fa-heart")
    ) {
      const isFeedLikePressed = e.target.classList.contains("fas");
      const currentLikeCount = parseInt(likesCountSpan.innerText);

      if (!isFeedLikePressed) {
        likesCountSpan.innerText = currentLikeCount + 1;
        e.target.classList.replace("far", "fas");
      }

      if (isFeedLikePressed) {
        likesCountSpan.innerText = currentLikeCount - 1;
        e.target.classList.replace("fas", "far");
      }
    } else if (
      //댓글 삭제 버튼
      e.target &&
      e.target.className === "fas fa-times"
    ) {
      const selectedComment = e.target.closest(".js-feed-comment");
      selectedComment.remove();
    } else {
      //그 외 의도하지 않은 다른 요소에 클릭 이벤트가 발생했을 경우
      return;
    }
  })
);

//input입력시 버튼 활성화
function removeSubmitBtnOpacity(commentInputValue, submitBtn) {
  if (commentInputValue) {
    submitBtn.classList.remove(OPACITY);
  }

  if (!commentInputValue) {
    submitBtn.classList.add(OPACITY);
  }
}

function getCommentValues(e) {
  const commentInputValue = e.target.value;
  const submitBtn = e.target.parentNode.querySelector(".feed__submit-btn");
  removeSubmitBtnOpacity(commentInputValue, submitBtn);
}

commentInputs.forEach((el) => {
  el.addEventListener("keyup", getCommentValues);
});
