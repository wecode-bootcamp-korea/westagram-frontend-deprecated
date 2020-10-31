// 댓글 기능
const commentForm = document.querySelector('.commentForm'),
  commentInput = document.querySelector('.commentInput'),
  addBtn = document.querySelector('.addBtn'),
  commentSet = document.querySelector('.commentSet');
// 댓글 Local Storage 기능
const CMTS_LS = 'cmts';
let cmts = [];

// local storage에 string으로 저장
function saveComment() {
  localStorage.setItem(CMTS_LS, JSON.stringify(cmts));
}

// 댓글 삭제
function deleteComment(event) {
  const btn = event.target;
  const cmt = btn.parentNode;
  const comment = cmt.parentNode;
  commentSet.removeChild(comment);
  const cleanComment = cmts.filter((cmtSet) => cmtSet.id !== +comment.id);
  cmts = cleanComment;
  saveComment();
}

// 받은 comment 추가하기
function makeComment(cmt) {
  // 빈 내용 댓글 추가 불가
  if (cmt.trim() === '') {
    return;
  }
  let cmtCodeblock = `<div class="commentSet">
    <span class="userId">edie_ko</span>
    <span class="userComment">${cmt}</span>
    <button class="deleteBtn">X</button>
    </div>
    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="smallHeart" class="smallHeart">`;
  let cmtSet = document.createElement('div');
  cmtSet.className = 'comment';
  cmtSet.innerHTML = cmtCodeblock;
  commentSet.appendChild(cmtSet);
  // deleteBtn에 삭제 기능 추가
  let deleteBtn = document.querySelectorAll('.deleteBtn');
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', deleteComment);
  }
  // local storage에 저장할 객체 생성
  const newId = cmts.length + 1;
  cmtSet.id = newId;
  const cmtObj = {
    text: cmt,
    id: newId,
  };
  cmts.push(cmtObj);
  saveComment();
}

// 코멘트 폼으로 comment 받기
function submitCmt(event) {
  event.preventDefault();
  const cmt = commentInput.value;
  makeComment(cmt);
  commentInput.value = '';
}

// local storage에 있는 cmts 로드하기
function loadCmts() {
  const loadedCmts = localStorage.getItem(CMTS_LS);
  if (loadedCmts !== null) {
    const parsedCmts = JSON.parse(loadedCmts);
    parsedCmts.forEach(function (cmtobj) {
      makeComment(cmtobj.text);
    });
  }
}

commentForm.addEventListener('submit', submitCmt);
addBtn.addEventListener('click', submitCmt);

loadCmts();
