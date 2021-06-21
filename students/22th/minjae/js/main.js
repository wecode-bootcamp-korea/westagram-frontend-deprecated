"use strict";

const textBox = document.getElementsByClassName('commentBox')[0];
const submit = document.getElementsByClassName('commentBtn')[0];
const feedComment = document.getElementsByClassName('feedComment')[0];
// input, 버튼, 내용추가될 부분 변수 할당\

submit.addEventListener('click', addComment);
// button에 click 이벤트 발생하면 *addComment 콜백함수 진행

function addComment(e) {
  e.preventDefault();
  if (textBox.value != "") {
  const commentList = document.createElement('li');
  commentList.className = "newCommentList";
  commentList.innerHTML = `<b>wecode_22th</b>  ` + textBox.value;
  feedComment.appendChild(commentList);
  }
  
  textBox.value = "";
}