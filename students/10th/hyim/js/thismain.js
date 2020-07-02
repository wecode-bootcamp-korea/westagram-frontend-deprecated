// console.log("야 너 왜그래");

const commentBox = document.querySelector(".comment");

const form = document.querySelector("#submit-comment-container");
const newCommentValue = document.querySelector("#submit-comment");
const commentSubmit = document.querySelector(".submit-btn");

let heartIcon = document.querySelectorAll(".submit-heart");
console.log("이건 하트 아이콘", heartIcon);

let myId = document.querySelector(".user-id");

let num = 1;

function addComment(event) {
  let newId = document.createElement("span");
  let blank = document.createElement("span");
  let newComment = document.createElement("span");
  let newDiv = document.createElement("div");
  let imgDivContainer = document.createElement("div");
  let imgDiv = document.createElement("img");
  imgDiv.src =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
  imgDiv.className = "submit-heart";

  imgDivContainer.append(imgDiv);
  imgDivContainer.className = "like-heart";
  //   let heartImg = document.querySelector(".like-heart");
  //   let img = heartImg.cloneNode(true);
  let newContent = newCommentValue.value; //form태그의 value를 가져옴
  console.log(newContent);
  newId.innerHTML = myId.innerText; //프로필에서 내 id를 가져옴
  newId.className = "comment-id";
  newComment.innerHTML = newContent;
  blank.innerText = " ";
  newDiv.append(newId);
  newDiv.append(blank);
  newDiv.append(newComment);

  newDiv.append(imgDivContainer);

  //   newDiv.append(img);
  newDiv.className = "comment-box";
  newDiv.id = num++;
  console.log(newDiv);
  commentBox.appendChild(newDiv);
  event.preventDefault();
}

function submitHeart() {
  console.log(heartIcon);
  console.log("작동 하여라");
  console.log(commentBox.id);
}

form.addEventListener("submit", addComment);
heartIcon.addEventListener("click", submitHeart);
