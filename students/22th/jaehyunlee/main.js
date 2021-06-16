function doDisplay() {
  var realSerachBar = document.getElementsByClassName("realSearchBar")[0];
  var fakeSerachBar = document.querySelector(".fakeSearchBar");
  if (realSerachBar.style.display === "none") {
    realSerachBar.style.display = "block";
    fakeSerachBar.style.display = "none";
  } else {
    realSerachBar.style.display = "none";
  }
}

function doFocus() {
  var realSerachBar = document.getElementsByClassName("realSearchBar")[0];
  realSerachBar.focus();
}

function doDisplayBack() {
  var realSerachBar = document.getElementsByClassName("realSearchBar")[0];
  var fakeSerachBar = document.querySelector(".fakeSearchBar");
  var fakeSearchValue = document.getElementsByClassName("fakeSearchValue")[0];

  realSerachBar.style.display = "none";
  fakeSerachBar.style.display = "block";
  if (realSerachBar.value) {
    fakeSearchValue.innerHTML = realSerachBar.value;
  } else {
    fakeSearchValue.innerHTML = "검색";
  }
}

function newReplyUpload() {
  var id = "이재현";
  var replyBody = document.getElementsByClassName("replies")[0];
  var newReply = document.createElement("p");
  var newInput = document.getElementsByClassName("newReplyInput")[0].value;

  newReply.innerHTML = id + " " + newInput;

  var deleteButton = document.createElement("input");

  deleteButton.className = "delete";
  deleteButton.placeholder = "삭제";

  var reply = document.createElement("div");

  reply.className = "reply";
  reply.appendChild(newReply);
  reply.appendChild(deleteButton);

  deleteButton.addEventListener("click", (e) => deleteReply(reply));
  document.getElementsByClassName("replies")[0].appendChild(reply);
  //document.getElementsByClassName("replies")[0].appendChild(newReply);
  //document.getElementsByClassName("replies")[0].appendChild(deleteButton);
}

var newReplyClick = document.getElementsByClassName("newReplyInput")[0];
var uploadReply = document.getElementsByClassName("uploadReply")[0];

uploadReply.addEventListener("click", (e) => newReplyUpload());

function deleteReply(reply) {
  console.log("삭제테스트");

  reply.remove();
}
