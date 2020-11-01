const enter = document.getElementsByClassName("enter")[0];
const mention = document.getElementsByClassName("write")[0];

enter.disabled = true;
mention.addEventListener("keyup", function () {
  if (mention.value.length > 0) {
    enter.disabled = false;
    enter.style.color = "rgb(64, 151, 246)";
  } else {
    enter.disabled = true;
    enter.style.color = "rgb(192, 224, 253)";
  }
});

// enter.addEventListener("click", uplodeCooment);

// function uplodeCooment() {
//   //key 를 눌렀다 떼면 함수 실행
//   if (e.keyCode === 13) {
//     let comment = document.getElementsByClassName("menTion");
//     let makeDiv = document.createElement("div"); //하나의 리스트를 만듦
//     let makeUser = document.createElement("span"); //댓글을 단 사용자의 이름을 감싸는 span태그를 하나 만듦
//     let makeMsg = document.createElement("span"); // 댓을 내용을 감싸는 span태그
//     let makeBtn = document.createElement("BUTTON"); // 댓글 삭제기능을 담당할 버튼

//     makeDiv.classNeame = "commentDiv";
//     makeUser.className = "commentUser";
//     makeMsg.className = "commentMsg";
//     makeBtn.className = "deleteBtn";

//     makeMsg.innerHTML = mention.value;
//     makeUser.innerHTML = "lee.sy";
//     makeBtn.innerHTML = "X";

//     comment.appendChild(makeDiv);
//     makeDiv.appendChild(makeUser);
//     makeDiv.appendChild(makeMsg);
//     makeDiv.appendChild(makeBtn);
//   }
// }

enter.addEventListener("click", function () {
  if ((enter.disabled = false)) {
    let comment = document.getElementsByClassName("menTion");
    let makeDiv = document.createElement("div"); //하나의 리스트를 만듦
    let makeUser = document.createElement("span"); //댓글을 단 사용자의 이름을 감싸는 span태그를 하나 만듦
    let makeMsg = document.createElement("span"); // 댓을 내용을 감싸는 span태그
    let makeBtn = document.createElement("BUTTON"); // 댓글 삭제기능을 담당할 버튼

    makeDiv.classNeame = "commentDiv";
    makeUser.className = "commentUser";
    makeMsg.className = "commentMsg";
    makeBtn.className = "deleteBtn";

    makeMsg.innerHTML = mention.value;
    makeUser.innerHTML = "lee.sy";
    makeBtn.innerHTML = "X";

    comment.appendChild(makeDiv);
    makeDiv.appendChild(makeUser);
    makeDiv.appendChild(makeMsg);
    makeDiv.appendChild(makeBtn);
  }
});
