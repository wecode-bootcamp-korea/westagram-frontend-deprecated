const submitBtn = document.getElementById("submit");
const commentInput = document.getElementById("commentInput");
const deleteBtn = document.getElementById("deleteBtn");
const comments = document.querySelector(".comments");
const heartBtn = document.getElementById("heartBtn");
const feeds = document.querySelectorAll(".feeds");
const moreBtn = document.getElementById("moreBtn");
const moreSentence = document.querySelector(".moreSentence");
const likeBtn = document.getElementById("likeBtn");
const likeCountNumber = document.getElementById("likeCountNumber");
const deepBlue = "#0095F6"; // 버튼 활성화 색상
const skyBlue = "#b2dffc"; // 버튼 비활성화 색상
const fixNickName = "Hyunjoong";

unActiveBtn();

function onAdd() {
  //  1. 사용자가 댓글창에 입력한  value 값을 받아온다.
  const text = commentInput.value;

  // 입력창이 비었으면 input창으로 focus
  if (text === "") {
    commentInput.focus();
    return;
  }
  //  2.  comment를 생성함 ( 닉네임(Hyunjoong) + 댓글 내용 + 삭제 버튼 + 하트버튼)
  const comment = createComment(text);

  //  3.  comments 컨테이너에 새로만든 댓글 추가
  comments.appendChild(comment);

  //  4.  input창 value ="" 로 초기화 + input창 focus
  //  (하려했는데 제출되면서 비어짐) 위에 문제 해결 버튼 type의 기본속성은 "submit" 인데 type = "button"으로 속성줌
  commentInput.value = "";
  commentInput.focus();
  // 5. 댓글 게시 후 게시 버튼 비활성화
  unActiveBtn();
}

// 댓글 요소 생성
function createComment(text) {
  const comment = document.createElement("div");
  comment.setAttribute("class", "comment");

  const commentLeft = document.createElement("div");
  commentLeft.setAttribute("class", "commentLeft");

  const commentRight = document.createElement("div");
  commentRight.setAttribute("class", "commentRight");

  const commentNickName = document.createElement("span");
  commentNickName.setAttribute("class", "commentNickName");
  commentNickName.innerHTML = fixNickName;

  const commentContent = document.createElement("span");
  commentContent.setAttribute("class", "commentContent");
  commentContent.innerHTML = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "deleteBtn");

  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener("click", () => {
    comments.removeChild(comment);
  });

  const heartBtn = document.createElement("button");
  heartBtn.setAttribute("id", "heartBtn");
  heartBtn.innerHTML = '<i class="far fa-heart"></i>';

  heartBtn.addEventListener("click", () => {
    if (heartBtn.value === "false") {
      // 하트가 빈하트면
      heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
      heartBtn.value = "ture";
    } else {
      // 하트가 눌려져 있으면
      heartBtn.innerHTML = '<i class="far fa-heart"></i>';
      heartBtn.value = "false";
    }
  });

  commentLeft.appendChild(commentNickName);
  commentLeft.appendChild(commentContent);
  commentRight.appendChild(deleteBtn);
  commentRight.appendChild(heartBtn);
  comment.appendChild(commentLeft);
  comment.appendChild(commentRight);

  return comment;
}

submitBtn.addEventListener("click", () => {
  onAdd();
});

commentInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    onAdd();
  }
});

// input창에 한 글자 이상 입력해야 버튼 활성화
commentInput.addEventListener("keyup", () => {
  const commentInput = document.getElementById("commentInput").value;
  if (commentInput) {
    onActiveBtn();
  }
  if (!commentInput) {
    unActiveBtn();
  }
});

moreBtn.addEventListener("click", () => {
  moreSentence.visibility = visible;
});

likeBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

likeBtn.addEventListener("click", () => {
  let currentNumber = parseInt(likeCountNumber.innerText, 10);
  if (likeBtn.value === "false") {
    // 하트가 빈하트면
    likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    likeBtn.value = "ture";
    likeCountNumber.innerText = currentNumber + 1;
  } else {
    // 하트가 눌려져 있으면
    likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    likeBtn.value = "false";
    likeCountNumber.innerText = currentNumber - 1;
  }
});

function onActiveBtn() {
  // 버튼 활성화
  submitBtn.style.color = deepBlue;
  submitBtn.disabled = false;
}

function unActiveBtn() {
  // 버튼 비활성화
  submitBtn.style.color = skyBlue;
  submitBtn.disabled = true;
}
