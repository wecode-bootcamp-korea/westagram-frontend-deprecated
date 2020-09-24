const commentBox = document.querySelector(".comment-box");
const form = document.querySelector("#submit-comment-container");
const newCommentForm = document.querySelector("#submit-comment");
const commentSubmit = document.querySelector(".submit-btn");
const myId = document.querySelector(".user-id");
const heartIcon = document.querySelectorAll(".submit-heart");

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
  imgDivContainer.addEventListener("click", handleLikeComment); //댓글의 하트에 이벤트를 달아줌
  return imgDivContainer;
}

//코멘크 아이콘
function addComment(event) {
  let newId = document.createElement("span");
  let blank = document.createElement("span");
  let newComment = document.createElement("span");
  let newDiv = document.createElement("div");
  let newContent = newCommentForm.value; //form태그의 value를 가져옴
  newId.innerHTML = myId.innerText; //프로필에서 내 id를 가져옴
  newId.className = "comment-id"; //글씨 bold설정을 위한 className부여
  newComment.innerHTML = newContent; //가져온 form태그의 value할당
  blank.innerText = " ";
  newDiv.append(newId);
  newDiv.append(blank);
  newDiv.append(newComment);
  newDiv.append(createSmallHeart()); //코멘트 마다 새로 달리는 하트 만드는 함수 불러옴
  newDiv.className = "each-comment"; //각 코멘트를 감싸는 div의 클래스
  commentBox.appendChild(newDiv);
  hideComment();
  event.preventDefault();
}

let colored = false;
//코멘트 하트 색깔 바꾸는 함수(eventlistner에서 호출됨)
function handleLikeComment(event) {
  colored = !colored;
  event.target.src = colored
    ? "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
    : "img/red_heart.jpeg";
}

form.addEventListener("submit", addComment);
