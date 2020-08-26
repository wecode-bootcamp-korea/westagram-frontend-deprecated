const commentUl = document.body.querySelector(".commentList");
const commentInput = document.body.querySelector(".commentDesc");
const commentBtn = document.body.querySelector(".commentBtn");
const profile = document.body.querySelector(".fa-user");

// 프로필 아이콘 클릭시 함수
const profileClick = () => {
  document.body.querySelector(".popup").classList.toggle("show");
};

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

// 댓글 좋아요 기능 함수
const commentLikeUpdate = () => {
  let likesArr = document.body.querySelectorAll(".fa-heart");
  return likesArr;
};

const commentLike = (arr) => {
  //let isClicked = true;

  arr.forEach((el) => {
    el.addEventListener("click", function (e) {
      // console.log("sdasd");
      // if (isClicked) {
      //   el.classList.remove("far");
      //   el.classList.add("fas");
      //   isClicked = false;
      // } else {
      //   el.classList.remove("fa-thumbs-down");
      //   el.classList.add("fa-heart");
      //   isClicked = true;
      // }
      el.classList.toggle("far");
      el.classList.toggle("fas");
    });
  });
};

// 댓글 삭제 함수
const deleteComment = (arr) => {
  arr.forEach((el) => {
    el.addEventListener("click", function (e) {
      console.log("deleted");
      el.parentNode.parentNode.parentNode.remove();
    });
  });
};

// 댓글 개수 업데이트 함수
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

const init = () => {
  commentLike(commentLikeUpdate());
  deleteComment(commentDeleteUpdate());
};

init();
