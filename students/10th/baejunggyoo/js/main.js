// 댓글 입력 시 게시 버튼 색 변경 이벤트
const thisIsReplyForm = document.querySelector('.replyForm');

thisIsReplyForm.addEventListener('keyup', function () {
  const thisIsTextArea = document.querySelector('.reply');
  const thisIsBtnText = document.querySelector('.btnText');
  if (thisIsTextArea.value === '') {
    thisIsBtnText.style.color = '#c4dff6';
  } else {
    thisIsBtnText.style.color = '#2e93e2';
  }
});

// 댓글 올리고 삭제하는 이벤트
const thisIsReplyBtn = document.querySelector('replyUpBtn');
const thisIsTextArea = document.querySelector('.reply');

thisIsTextArea.addEventListener('keydown', uploadReply);

function uploadReply(e) {
  if (e.keyCode === 13) {
    let comment = document.querySelector('.replyContainer');
    let makeDiv = document.createElement('div');
    let makeUser = document.createElement('span');
    let makeMsg = document.createElement('span');
    let makeBtn = document.createElement('button');

    makeDiv.className = 'replyBox';
    makeUser.className = 'replyUser';
    makeMsg.className = 'replyMsg';
    makeBtn.className = 'deleteBtn';

    makeMsg.innerHTML = thisIsTextArea.value;
    makeUser.innerHTML = 'juuuuungq';
    makeBtn.innerHTML = '삭제';

    comment.appendChild(makeDiv);
    makeDiv.appendChild(makeUser);
    makeDiv.appendChild(makeMsg);
    makeDiv.appendChild(makeBtn);

    thisIsTextArea.innerHTML = '';

    makeBtn.addEventListener('click', (event) => {
      const btn = event.target;
      console.log(btn);

      const deleteAll = btn.parentNode;
      comment.removeChild(deleteAll);
    });
  }
}
