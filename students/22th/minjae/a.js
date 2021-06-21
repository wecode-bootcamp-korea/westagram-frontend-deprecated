const textBox = document.getElementById('textarea');
const submit = document.getElementById('submit');
const feedComment = document.getElementById('result');
// input, 버튼, 내용추가될 부분 변수 할당\


submit.addEventListener('click', addComment);
// submit에 click 이벤트 발생하면 *addComment 콜백함수 진행

function addComment(e) {
  e.preventDefault();
  console.log(e)
  if (textBox.value != "") {
  const commentList = document.createElement('li');
  commentList.className = "newCommentList";
  // CSS 관리 필요해서 클래스 부여
  commentList.innerText = textBox.value;
  feedComment.appendChild(commentList)
  }

  textBox.value = "";
}





















// if (textBox.value === "") return ;
//   const commentList = document.createElement('li');
//   commentList.className = "newCommentList";
//   commentList.innerText = textBox.value;
//   feedComment.appendChild(commentList)
// }

// 댓글창 구현
// 텍스트 창, 버튼, 결과물이 들어간 공간 필요
// 기능 구현하고 CSS