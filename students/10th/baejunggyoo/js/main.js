// 댓글 입력 시 게시 버튼 색 변경 이벤트
const ReplyForm = document.querySelector('.replyForm');

ReplyForm.addEventListener('keyup', function () {
  const TextArea = document.querySelector('.reply');
  const BtnText = document.querySelector('.btnText');
  TextArea.value === '' ? BtnText.style.color = '#c4dff6' : BtnText.style.color = '#2e93e2';
});

// 댓글 올리고 삭제하는 이벤트
const textArea = document.querySelectorAll('.reply')[0];

textArea.addEventListener('keyup', uploadReply);

function uploadReply(e) {
  if (e.keyCode === 13 && textArea.length !== 0) {
    let comment = document.querySelector('.replyContainer');
    let makeReplyBox = document.createElement('div');
    let makeUserBox = document.createElement('div');
    let makeUser = document.createElement('span');
    let makeMsg = document.createElement('span');
    let makeBtn = document.createElement('button');

    makeReplyBox.className = 'replyBox';
    makeUserBox.className = 'userBox';
    makeUser.className = 'replyUser';
    makeMsg.className = 'replyMsg';
    makeBtn.className = 'likeBtn';

    makeMsg.innerHTML = textArea.value;
    makeUser.innerHTML = 'juuuuungq';
    makeBtn.innerHTML = '삭제';

    comment.appendChild(makeReplyBox);
    makeReplyBox.appendChild(makeUserBox);
    makeReplyBox.appendChild(makeBtn);
    makeUserBox.appendChild(makeUser);
    makeUserBox.appendChild(makeMsg);

    makeBtn.addEventListener('click', (event) => {
      const btn = event.target;
      const deleteAll = btn.parentNode;
      comment.removeChild(deleteAll);
    });
  }
}
