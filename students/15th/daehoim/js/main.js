const commentInput = document.getElementById('new_comment')
const submitBtn = document.getElementsByClassName('submit_comment')[0];
const newComment = document.getElementsByClassName('comments')[0]; // ul tag

function addComment() {
    if (commentInput.value) {
      // 리스트 태그  li === each_comment
      newList = document.createElement('li');
      newList.classList.add('each_comment')

      // 댓글 아이디, 내용 컨테이너 div === commentLine
      commentContainer = document.createElement('div')
      commentContainer.classList.add('commentLine')
      commentContainer.innerHTML = `<span class="commentUserID">compassionkorea </span><span>` + commentInput.value

      // 버튼 박스 div === button_box
      btnBox = document.createElement('div')
      btnBox.classList.add('button_box')

      // 좋아요 버튼 button === like_button
      likeBtn = document.createElement('button')
      likeBtn.classList.add('like_button')

      // 좋아요 이미지 img === comment_heart
      likeBtnImg = document.createElement('img')
      likeBtnImg.classList.add('comment_heart')
      likeBtnImg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
      likeBtnImg.alt = "comment_heart"

      // 삭제 버튼 button === remove_button
      removeBtn = document.createElement('button')
      removeBtn.classList.add('remove_button')

      // 삭제 이미지 img === comment_remove_img
      removeBtnImg = document.createElement('img')
      removeBtnImg.classList.add('comment_remove_img')
      removeBtnImg.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI5NC4xMTEsMjU2LjAwMUw1MDQuMTA5LDQ2LjAwM2MxMC41MjMtMTAuNTI0LDEwLjUyMy0yNy41ODYsMC0zOC4xMDljLTEwLjUyNC0xMC41MjQtMjcuNTg3LTEwLjUyNC0zOC4xMSwwTDI1NiwyMTcuODkyDQoJCQlMNDYuMDAyLDcuODk0Yy0xMC41MjQtMTAuNTI0LTI3LjU4Ni0xMC41MjQtMzguMTA5LDBzLTEwLjUyNCwyNy41ODYsMCwzOC4xMDlsMjA5Ljk5OCwyMDkuOTk4TDcuODkzLDQ2NS45OTkNCgkJCWMtMTAuNTI0LDEwLjUyNC0xMC41MjQsMjcuNTg2LDAsMzguMTA5YzEwLjUyNCwxMC41MjQsMjcuNTg2LDEwLjUyMywzOC4xMDksMEwyNTYsMjk0LjExbDIwOS45OTcsMjA5Ljk5OA0KCQkJYzEwLjUyNCwxMC41MjQsMjcuNTg3LDEwLjUyMywzOC4xMSwwYzEwLjUyMy0xMC41MjQsMTAuNTIzLTI3LjU4NiwwLTM4LjEwOUwyOTQuMTExLDI1Ni4wMDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
      removeBtnImg.alt = "comment_remove"


      newComment.appendChild(newList) // ul li
      newList.appendChild(commentContainer) // li div
      newList.appendChild(btnBox) // li div
      btnBox.appendChild(likeBtn)  // div btn
      likeBtn.appendChild(likeBtnImg) // btn img
      btnBox.appendChild(removeBtn) // div btn
      removeBtn.appendChild(removeBtnImg) // btn img
      commentInput.value = "" 

      // 댓글 삭제(추가)
      removeBtn.addEventListener('click', function() {
        this.parentNode.parentNode.remove();
    })
    }
  }

// 댓글 삭제(기존)
const deleteBtn = document.getElementsByClassName('remove_button')[0]
deleteBtn.addEventListener('click', function() {
  this.parentNode.parentNode.remove()
})

submitBtn.addEventListener("click", addComment);
commentInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addComment();
  }
});
