
const replyList = document.querySelector(".userId");
const submitBtn = document.querySelector(".uploadBtn");
const typeArea = document.querySelector(".typeArea");

function addNewInput () {
  const message = typeArea.value;
  const newDiv = document.createElement("div");
  newDiv.className = "userId";
  console.log(newDiv)
  let elem = `<div><span>yurim4545</span>${message}<span class="delBtn"><i class="fas fa-times"></i></span></div><button><i class="far fa-heart"></i></button>`;
  commentList.append(newDiv);
  newDiv.innerHTML = elem;
