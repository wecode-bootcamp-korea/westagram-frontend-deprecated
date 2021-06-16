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

  if(newInput != ""){
  deleteButton.addEventListener("click", (e) => deleteReply(reply));
  document.getElementsByClassName("replies")[0].appendChild(reply);
  document.getElementsByClassName("newReplyInput")[0].value = ""; //댓글 내용 초기화...
  //document.getElementsByClassName("replies")[0].appendChild(newReply);
  //document.getElementsByClassName("replies")[0].appendChild(deleteButton);
                    }
else{
  alert("댓글을 입력해주세요");
}
}

var newReplyInput = document.getElementsByClassName("newReplyInput")[0];
var uploadReply = document.getElementsByClassName("uploadReply")[0];

uploadReply.addEventListener("click", (e) => newReplyUpload());
newReplyInput.addEventListener("keyup", function(e) {

  if(e.key === "Enter"){
  newReplyUpload();
 }
} );


function deleteReply(reply) {
  console.log("삭제테스트");

  reply.remove();
}