const messageInput = document.querySelector('#messageInputBox'); //input
const btn = document.querySelector('#comment_btn'); // button

function uploadComment(e) {
  e.preventDefault();

  let comment = document.querySelector('.comment_storage');
  let createDiv = document.createElement('div'); // 하나의 댓글을 감싸는 div.
  let userSpan = document.createElement('span'); // 댓글을 단 사용자의 "이름"을 감싸는 span.

  let makeMsg = document.createElement('span'); // 댓글 내용을 감싸는 span.
  let makeBtn = document.createElement('BUTTON'); // 버튼태그.

  // 클래스명 부여하기
  createDiv.className = 'commentDiv';
  userSpan.className = 'comment_User';
  makeMsg.className = 'comment_Msg';
  makeBtn.className = 'deleteBtn';

  makeMsg.innerHTML = messageInput.value;
  userSpan.innerHTML = 'wonkeun_E : '; // 사용자 이름을 하나로 지정.
  // makeBtn.innerHTML = '삭제'; // 삭제버튼

  comment.appendChild(createDiv); // 댓글 전체를 감싸는 div 부모태그 안에 댓글 하나의 div 자식 태그 넣기
  createDiv.appendChild(userSpan);
  createDiv.appendChild(makeMsg);
  createDiv.appendChild(makeBtn);
}

btn.addEventListener('click', uploadComment);
