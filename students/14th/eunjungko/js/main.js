// 인풋바
const search = document.querySelector('.search'),
    searchInput = document.querySelector('.searchInput'),
    xbtn = document.querySelector(".xbtn"),
    magnifier = document.querySelector('.magnifier'),
    searchText = document.querySelector('.searchText');
// 댓글 기능
const commentForm = document.querySelector('.commentForm'),
    commentInput = document.querySelector('.commentInput'),
    addBtn = document.querySelector('.addBtn'),
    commentSet = document.querySelector('.commentSet');
// 댓글 Local Storage 기능
const CMTS_LS = 'cmts';
let cmts = [];

//인풋바 활성화
function searchActive() {
    xbtn.style.display = 'block';
    searchInput.classList.toggle('active');
    magnifier.classList.toggle('active');
    search.style.justifyContent = 'space-between';
}

// 인풋바 비활성화 (x버튼 혹은 인풋 이외 클릭 시)
function searchInactive() {
    xbtn.style.display = 'none';
    searchInput.classList.toggle('active');
    magnifier.classList.toggle('active');
    search.style.justifyContent = 'center';
}

// local storage에 string으로 저장
function saveCmt() {
    localStorage.setItem(CMTS_LS, JSON.stringify(cmts));
}

// 댓글 삭제
function deleteCmt(event) {
    const btn = event.target;
    const cmt = btn.parentNode;
    const comment = cmt.parentNode;
    commentSet.removeChild(comment);
    const cleanCmt = cmts.filter((cmtSet) => {return cmtSet.id !== parseInt(comment.id)});
    cmts = cleanCmt;
    saveCmt();
}

// 받은 comment 추가하기
function makeCmt(cmt) {
    // 빈 내용 댓글 추가 불가
    if (cmt.trim() === '') {
        return;
    }
    let cmtCodeblock = `<div class="commentSet">
    <span class="userId">edie_ko</span>
    <span class="userComment">${cmt}</span>
    <button class="deleteBtn">X</button>
    </div>
    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="smallHeart" class="smallHeart">`
    let cmtSet = document.createElement('div');
    cmtSet.className = 'comment';
    cmtSet.innerHTML = cmtCodeblock;
    commentSet.appendChild(cmtSet);
    // deleteBtn에 삭제 기능 추가
    let deleteBtn = document.querySelectorAll('.deleteBtn');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', deleteCmt);
        }
    // local storage에 저장할 객체 생성
    const newId = cmts.length + 1;
    cmtSet.id = newId;
    const cmtObj = {
        text: cmt,
        id: newId,
    };
    cmts.push(cmtObj);
    saveCmt();
}

// 코멘트 폼으로 comment 받기
function submitCmt(event) {
    event.preventDefault();
    const cmt = commentInput.value;
    makeCmt(cmt);
    commentInput.value='';
}

// local storage에 있는 cmts 로드하기
function loadCmts() {
    const loadedCmts = localStorage.getItem(CMTS_LS);
    if (loadedCmts !== null) {
        const parsedCmts = JSON.parse(loadedCmts);
        parsedCmts.forEach(function(cmtobj) {
            makeCmt(cmtobj.text);
        })
    }
}

searchInput.addEventListener('click', searchActive);
searchInput.addEventListener('blur', searchInactive);
xbtn.addEventListener('click', searchInactive);

commentForm.addEventListener('submit', submitCmt);
addBtn.addEventListener('click', submitCmt);

loadCmts();