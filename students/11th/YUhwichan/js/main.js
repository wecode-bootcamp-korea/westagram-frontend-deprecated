// const submit = document.querySelector("#submit");
// const commentArea = document.querySelectorAll("input")[1];

// const addComment = () => {
//   const commentVal = commentArea.value;
//   const commentList = document.querySelector(".commentList");
//   const commentLi = document.createElement("li");
//   const guestName = document.createElement("div");
//   guestName.textContent = "guest_who";
//   const comment = document.createElement("span");
//   comment.textContent = " " + commentVal;
//   commentLi.append(guestName, comment);
//   commentList.append(commentLi);
// };

// submit.addEventListener("click", addComment);

// commentArea.addEventListener("keydown", function (e) {
//   if (e.keyCode === 13) {
//     const commentValue = commentArea.value;
//     const commentList = document.querySelector(".commentList");
//     const commentLi = document.createElement("li");
//     const guestName = document.createElement("div");
//     guestName.textContent = "guest_who";
//     const comment = document.createElement("span");
//     comment.textContent = " " + commentValue;
//     commentLi.append(guestName, comment);
//     commentList.append(commentLi);
//   }
// });
// 주석 코드는 스스로 작성했고, 아래 코드는 저의 코드의 반복되는 부분을 줄이려 고민하다가 동기분의 도움을 받았습니다

const submit = document.querySelector("#submit");
const commentArea = document.querySelectorAll("input")[1];

const addComment = () => {
  const commentVal = commentArea.value;
  const commentList = document.querySelector(".commentList");
  const commentLi = document.createElement("li");
  commentLi.innerHTML = `<div>guest_who</div><span> ${commentVal}</span>`;
  commentList.append(commentLi);
};
// li 태그에 값을 채우고 append 할수도 있고, append 하고 값을 채울 수도 있다.

submit.addEventListener("click", addComment);

commentArea.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addComment();
  }
});

const changeColor = () => {
  const commentVal = commentArea.value;
  if (commentVal) {
    submit.style.opacity = "1";
  }
};

commentArea.addEventListener("keyup", changeColor);
