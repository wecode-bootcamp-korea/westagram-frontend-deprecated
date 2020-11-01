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

enter.addEventListener("click", function () {
  if (enter.disabled === false) {
    let comment = document.getElementsByClassName("menTion")[0];
    let makeDiv = document.createElement("div"); //하나의 리스트를 만듦
    let makeUser = document.createElement("span"); //댓글을 단 사용자의 이름을 감싸는 span태그를 하나 만듦
    let makeMsg = document.createElement("span"); // 댓을 내용을 감싸는 span태그
    let makeBtn = document.createElement("BUTTON"); // 댓글 삭제기능을 담당할 버튼

    makeDiv.className = "commentDiv";
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

    makeBtn.addEventListener("click", (event) => {
      // 삭제버튼을 클릭하면 이벤트 발생

      const btn = event.target; // => 그 이벤트 발생의 'target'을 btn 변수에 선언
      console.log(btn); // 콘솔창을 띄우면 버튼 태그가 출력됨

      const deleteAll = btn.parentNode; // btn의 부모 노드 => commentDiv(버튼 태그를 감싸는 상위태그)

      comment.removeChild(deleteAll);
      // commentDiv를 감싸는 상위 태그 => comment,  comment의 자식 노드를 삭제한다 => deleteAll을(commentDiv태그를)

      // 결과적으로 삭제버튼을 클릭하면 그 삭제버튼을 포함하는 부모태그 commentDiv 자체가 지워져서
      // 원하는 댓글을 삭제할 수 있다.
    });
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

// enter.addEventListener("click", function () {
//   if ((enter.disabled = false)) {
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
// });
