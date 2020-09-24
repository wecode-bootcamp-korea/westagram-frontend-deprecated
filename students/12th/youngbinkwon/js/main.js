const commentUl = document.body.querySelector(".commentList");
const commentInput = document.body.querySelector(".commentDesc");
const commentBtn = document.body.querySelector(".commentBtn");
const profile = document.body.querySelector(".fa-user");

// 프로필 아이콘 클릭시 팝업 함수
const profileClick = () => {
  document.body.querySelector(".popup").classList.add("show");
};

// 프로필 아이콘 이외의 것을 클릭시 팝업 닫기
document.addEventListener("click", function (e) {
  let isClickInside = profile.contains(e.target);
  if (!isClickInside) {
    document.body.querySelector(".popup").classList.remove("show");
  }
});

// 댓글 달기 함수
const uploadComment = () => {
  if (commentInput.value) {
    let liNew = document.createElement("li");
    liNew.innerHTML = `
    <div>
      <span class="commentId">youngkwon315</span>
      <span class="commentDetail">${commentInput.value}</span>
    </div>
    <div>
      <span><i class="far fa-heart"></i></span>
      <span><i class="fas fa-times"></i></span>
    </div>`;
    commentUl.appendChild(liNew);
    commentInput.value = "";
    commentLike(commentLikeUpdate());
    deleteComment(commentDeleteUpdate());
  }
};

// 댓글 좋아요 버튼 업데이트 함수
const commentLikeUpdate = () => {
  let likesArr = document.body.querySelectorAll(".fa-heart");
  return likesArr;
};

// 댓글 좋아요 함수
const commentLike = (arr) => {
  arr.forEach((el) => {
    el.addEventListener("click", function (e) {
      el.classList.toggle("far");
      el.classList.toggle("fas");
    });
  });
};

// 댓글 삭제 함수
const deleteComment = (arr) => {
  arr.forEach((el) => {
    el.addEventListener("click", function (e) {
      el.parentNode.parentNode.parentNode.remove();
    });
  });
};

// 댓글 삭제 버튼 개수 업데이트 함수
const commentDeleteUpdate = () => {
  let deletesArr = document.body.querySelectorAll(".fa-times");
  return deletesArr;
};

// 댓글 요소 이벤트 리스너
commentBtn.addEventListener("click", uploadComment);
commentInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    uploadComment();
  }
});
profile.addEventListener("click", profileClick);

// 페이지 로드시 실행되는 함수
const init = () => {
  commentLike(commentLikeUpdate());
  deleteComment(commentDeleteUpdate());
};

init();
