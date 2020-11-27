const commentInput = document.getElementById('new_comment')
const submitBtn = document.getElementsByClassName('submit_comment')[0];
const newComment = document.getElementsByClassName('comments')[0];

function addComment() {
    if (commentInput.value) {
        newList = document.createElement('li');
        newList.className = "each_comment";
        newList.innerHTML = `<div class="commentLine"><span class="commentUserID">compassionkorea </span><span>` + 
        commentInput.value +
         `</span></div><div><button class="like_button"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" class="comment_heart" alt="comment_heart"></button><button class="remove_button" ><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI5NC4xMTEsMjU2LjAwMUw1MDQuMTA5LDQ2LjAwM2MxMC41MjMtMTAuNTI0LDEwLjUyMy0yNy41ODYsMC0zOC4xMDljLTEwLjUyNC0xMC41MjQtMjcuNTg3LTEwLjUyNC0zOC4xMSwwTDI1NiwyMTcuODkyDQoJCQlMNDYuMDAyLDcuODk0Yy0xMC41MjQtMTAuNTI0LTI3LjU4Ni0xMC41MjQtMzguMTA5LDBzLTEwLjUyNCwyNy41ODYsMCwzOC4xMDlsMjA5Ljk5OCwyMDkuOTk4TDcuODkzLDQ2NS45OTkNCgkJCWMtMTAuNTI0LDEwLjUyNC0xMC41MjQsMjcuNTg2LDAsMzguMTA5YzEwLjUyNCwxMC41MjQsMjcuNTg2LDEwLjUyMywzOC4xMDksMEwyNTYsMjk0LjExbDIwOS45OTcsMjA5Ljk5OA0KCQkJYzEwLjUyNCwxMC41MjQsMjcuNTg3LDEwLjUyMywzOC4xMSwwYzEwLjUyMy0xMC41MjQsMTAuNTIzLTI3LjU4NiwwLTM4LjEwOUwyOTQuMTExLDI1Ni4wMDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" class="comment_remove_img" alt="comment_remove"></button></div>`
        newComment.appendChild(newList)
        commentInput.value = "" 
    }
  }

submitBtn.addEventListener("click", addComment);
commentInput.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addComment();
  }
});
