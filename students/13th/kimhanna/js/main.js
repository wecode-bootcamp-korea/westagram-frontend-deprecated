const InputArea = document.getElementById("input-comment2"); //InputArea 가져오기
let comment = document.getElementById("commnetPluse");

InputArea.addEventListener("keydown", addComment);

function addComment(e) {
  if (e.keyCode === 13) {
    let makeDiv = document.createElement("div");
    let makeUser = document.createElement("span");
    let makeMsg = document.createElement("span");

    makeDiv.className = "commentDiv";
    makeUser.className = "commentUser";
    makeMsg.className = "commentMsg";

    makeMsg.innerHTML = InputArea.value;
    makeUser.innerHTML = "hanna";

    comment.appendChild(makeDiv);
    makeDiv.appendChild(makeUser);
    makeDiv.appendChild(makeMsg);
  }
}
