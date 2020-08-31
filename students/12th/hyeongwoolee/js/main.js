//게시 버튼 색깔 변경
const commentBtn = document.getElementById("comment__add__button");
const commentInput = document.getElementById("comment__body");
const commentBody = document.getElementById("comment__message__content"); //댓글이 붙는 태그
//댓글내용

const addBtn = function (e) {
  e.preventDefault();

  const comInputValue = commentInput.value;
  if (comInputValue.length >= 1) {
    commentBtn.style.color = "rgba(0, 149, 246, 1)";
    commentBtn.disabled = false;
  } else if (comInputValue.length < 1) {
    commentBtn.style.color = "rgba(0, 149, 246, 0.3)";
    commentBtn.disabled = true;
  }
};
commentInput.addEventListener("keyup", addBtn);

//댓글 게시---------------------------------------------------------
const appendComment = function (e) {
  let commentValue = commentInput.value;
  let createBox = document.createElement("div");
  let createAcc = document.createElement("span"); //아이디 공간 생성
  let createCom = document.createElement("span"); //댓글 공간 생성
  let delBtn = document.createElement("button");
  if (commentValue.length >= 1) {
    createBox.className = "createBox";
    createAcc.className = "createAcc";
    createCom.className = "createCom";
    delBtn.className = "delBtn";
    createAcc.innerHTML = "jamesleehw";
    createCom.innerHTML = commentValue;
    delBtn.innerHTML = "삭제";
    createBox.appendChild(createAcc);
    createBox.appendChild(createCom);
    createBox.appendChild(delBtn);
    commentBody.appendChild(createBox);
  }
  delBtn.addEventListener("click", function (e) {
    createBox.remove();
  });
  commentInput.value = "";
};
commentBtn.addEventListener("click", appendComment);
