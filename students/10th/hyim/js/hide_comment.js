let commentContainer = document.getElementsByClassName("each-comment");
let countComment = document.createElement("span"); //댓글 수를 보여주는 span태그 하나 만들어줌
let viewCommentAll = document.createElement("span"); //"모두 보기"
let showAllContainer = document.createElement("div");

let checkCommentState = true;

function hideComment() {
  if (commentContainer.length > 2 && checkCommentState) {
    for (let i = 0; i < commentContainer.length - 2; i++) {
      //루프 안 i값의 범위를 조정해서 어떤 코멘트를 남길지 선택할 수 있음
      commentContainer[i].style.display = "none"; //댓글 가려주는 코드
      countComment.innerText = "댓글" + commentContainer.length; //"댓글 수 4" 이런 식으로 보여줄 수 있도록 내용 수정
      showAllContainer.append(countComment); //만든 "댓글 수 4"를 코멘크 박스라는 코멘트와 게시글을 감싸는 div에 삽입
      viewCommentAll.innerText = " 모두 보기";
      viewCommentAll.addEventListener("click", showCommentAll);
      showAllContainer.append(viewCommentAll);
      showAllContainer.className = "show-comment-all"; //스타일 적용을 위한 className
      commentBox.prepend(showAllContainer);
    }
  }
}

function showCommentAll() {
  checkCommentState = false;
  countComment.parentElement.removeChild(countComment);
  viewCommentAll.parentElement.removeChild(viewCommentAll);
  for (let i = 0; i < commentContainer.length - 2; i++) {
    commentContainer[i].removeAttribute("style");
  }
}
