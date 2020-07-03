let commentBox = document.querySelector(".comment");
let defaultHeartBtn = document.querySelector(".submit-heart");

const form = document.querySelector("#submit-comment-container");
const newCommentValue = document.querySelector("#submit-comment");
const commentSubmit = document.querySelector(".submit-btn");
let myId = document.querySelector(".user-id");
let num = 1;

let heartIcon = document.querySelectorAll(".submit-heart");

//각 댓글이 생성될 때 마다 하트 아이콘을 만들어 주는 함수
//생성 된 각 하트 아이콘 마다 eventListener를 달아줌
function createSmallHeart() {
  let imgDivContainer = document.createElement("div");
  let imgDiv = document.createElement("img");
  imgDiv.src =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
  imgDiv.className = "submit-heart";
  imgDivContainer.append(imgDiv);
  imgDivContainer.className = "like-heart";
  imgDivContainer.addEventListener("click", submitHeart); //댓글의 하트에 이벤트를 달아줌
  return imgDivContainer;
}

//코멘크 아이콘
function addComment(event) {
  let newId = document.createElement("span");
  let blank = document.createElement("span");
  let newComment = document.createElement("span");
  let newDiv = document.createElement("div");
  let newContent = newCommentValue.value; //form태그의 value를 가져옴
  newId.innerHTML = myId.innerText; //프로필에서 내 id를 가져옴
  newId.className = "comment-id";
  newComment.innerHTML = newContent;
  blank.innerText = " ";
  newDiv.append(newId);
  newDiv.append(blank);
  newDiv.append(newComment);
  newDiv.append(createSmallHeart()); //코멘트 마다 새로 달리는 하트 만드는 함수 불러옴
  newDiv.className = "comment-box";
  newDiv.id = num++;
  commentBox.appendChild(newDiv);
  event.preventDefault();
}

let colored = 0;
//코멘트 하트 색깔 바꾸는 함수(eventlistner에서 호출됨)
function submitHeart(event) {
  event.target.src = "img/red_heart.jpeg";
  if (colored == 1) {
    event.target.src =
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    colored = "0";
  } else {
    event.target.src = "img/red_heart.jpeg";
    colored = "1";
  }
}

form.addEventListener("submit", addComment);
defaultHeartBtn.addEventListener("click", submitHeart);
