const textBox = document.querySelector(".inputBox");
const summitButtonClick = document.querySelector(".buttonBox");
const feedComment = document.querySelector(".new_comments");
const profileId1 = document.querySelector(".my_profile_id");
console.log(textBox);

// 게시 버튼 눌렀을때 댓글 기능 추가
summitButtonClick.addEventListener("click", clickButton);

function clickButton() {
  const commentBox = document.createElement("span");
  const profileId = document.createElement("span");
  const br = document.createElement("br");
  commentBox.className = "newCommentBox";
  commentBox.innerHTML = textBox.value;
  profileId.className = "newCommentBox1";
  profileId.innerHTML = "s_sewon";

  if (textBox.value != "") {
    feedComment.appendChild(profileId) +
      feedComment.appendChild(commentBox) +
      feedComment.appendChild(br);
    textBox.value = null;
  }
}
// 엔터 쳤을때 댓글 기능 추가
textBox.addEventListener("keypress", enter);

function enter(e) {
  const commentBox = document.createElement("span");
  const profileId1 = document.createElement("span");
  const br = document.createElement("br");
  const profileId = document.querySelector(".my_profile_id");
  profileId1.className = "newCommentBox1";
  commentBox.className = "newCommentBox";
  profileId1.innerHTML = "s_sewon";
  commentBox.innerHTML = textBox.value;
  if (e.key === "Enter" && textBox.value !== "") {
    feedComment.appendChild(profileId1) +
      feedComment.appendChild(commentBox) +
      feedComment.appendChild(br);
    textBox.value = null;
  }
}

//글자 타이핑 했을때 '게시' 색깔 바뀌는 기능 추가

textBox.addEventListener("keydown", colorChange);

function colorChange() {
  if (textBox.value !== "") {
    summitButtonClick.style.color = "#0095F6";
  } else if (textBox.value === "")
    return (summitButtonClick.style.color = "#C0E0FD");
}

//'댓글 ${n}개 더 보기' 글자 기능 추가
// const commentNumberTest = textBox.addEventListener("keydown", colorChange);
// const commentNumber = document.getElementsByClassName("comment_number")[0];

// function commentNumberAction() {
//   if (commentNumberTest) {
//     commentNumber.innerHTML = "3333";
//   }
// }

// commentNumberAction();

// let count = document.getElementById("button");
// count = 0;

// const countUp = function () {
//   count += count + 1;
//   document.querySelector("#count").innerHTML = 2;
// };

// countUp();
