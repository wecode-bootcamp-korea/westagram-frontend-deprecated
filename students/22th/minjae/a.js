const textBox = document.getElementById('textarea');
const submit = document.getElementById('submit');
const feedComment = document.getElementById('result');
// input, 버튼, 내용추가될 부분 변수 할당\



submit.addEventListener('click', addComment);
// submit에 click 이벤트 발생하면 *addComment 콜백함수 진행

function addComment(e) {
  e.preventDefault();

  if (textBox.value != "") {
  const commentList = document.createElement('li');
  commentList.className = "newCommentList";
  commentList.innerText = textBox.value;
  feedComment.appendChild(commentList)
  }
  textBox.value = "";
}