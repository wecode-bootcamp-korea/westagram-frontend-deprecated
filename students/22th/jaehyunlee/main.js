function doDisplay() {
  const realSerachBar = document.getElementsByClassName("realSearchBar")[0];
  const fakeSerachBar = document.querySelector(".fakeSearchBar");
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
  var newReplyId = document.createElement("span");
  var newReplyComment = document.createElement("span");
  var newInput = document.getElementsByClassName("newReplyInput")[0].value;

  newReplyId.innerHTML = id + "&nbsp";
  newReplyComment.innerHTML = newInput;

  var deleteButton = document.createElement("img");

  deleteButton.className = "delete";
  deleteButton.src = "deleteReply.jpg";

  //aForUsingTab.appendChild(likeBtn);

  var aForUsingTab = document.createElement("button");
  aForUsingTab.className = "none";
  //aForUsingTab.setAttribute('href','javascript:void(0)')

  aForUsingTab.appendChild(deleteButton);

  aForUsingTab.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      deleteReply(reply);
    }
  });

  var reply = document.createElement("div");

  reply.className = "reply";
  reply.appendChild(newReplyId);
  reply.appendChild(newReplyComment);
  reply.appendChild(aForUsingTab);
  reply.addEventListener("mouseover", function (e) {
    //e.target.appendChild(aForUsingTab);

    var replyDelBtn = this.getElementsByTagName("button")[0];
    replyDelBtn.className = "noNone";
  });
  reply.addEventListener("mouseleave", function (e) {
    //e.target.removeChild(aForUsingTab);

    var replyDelBtn = this.getElementsByTagName("button")[0];
    replyDelBtn.className = "none";
  });

  if (newInput != "") {
    deleteButton.addEventListener("click", (e) => deleteReply(reply));
    document.getElementsByClassName("replies")[0].appendChild(reply);
    document.getElementsByClassName("newReplyInput")[0].value = ""; //댓글 내용 초기화...
    //document.getElementsByClassName("replies")[0].appendChild(newReply);
    //document.getElementsByClassName("replies")[0].appendChild(deleteButton);
  } else {
    alert("댓글을 입력해주세요");
  }
}

function deleteReply(Target) {
  Target.remove();
}

function iLikeThisFeed() {
  const likeFeedBtn = document.getElementsByClassName("likeFeedBtn")[0];
  const hateFeedBtn = document.getElementsByClassName("hateFeedBtn")[0];

  likeFeedBtn.className += " none";
  hateFeedBtn.classList.remove("none");
}

function iHateThisFeed() {
  const likeFeedBtn = document.getElementsByClassName("likeFeedBtn")[0];
  const hateFeedBtn = document.getElementsByClassName("hateFeedBtn")[0];

  hateFeedBtn.className += " none";
  likeFeedBtn.classList.remove("none");
}

function addThisFeedFav() {
  const addToFav = document.getElementsByClassName("addToFav")[0];
  const delOfFav = document.getElementsByClassName("delOfFav")[0];

  addToFav.className += " none";
  delOfFav.classList.remove("none");
}

function delThisFeedFav() {
  const addToFav = document.getElementsByClassName("addToFav")[0];
  const delOfFav = document.getElementsByClassName("delOfFav")[0];

  delOfFav.className += " none";
  addToFav.classList.remove("none");
}

function init() {
  const newReplyInput = document.getElementsByClassName("newReplyInput")[0];
  newReplyInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      newReplyUpload();
    }
  });

  const uploadReply = document.getElementsByClassName("uploadReply")[0];
  uploadReply.addEventListener("click", (e) => newReplyUpload());

  const likeFeedBtn = document.getElementsByClassName("likeFeedBtn")[0];
  likeFeedBtn.addEventListener("click", (e) => iLikeThisFeed());

  const hateFeedBtn = document.getElementsByClassName("hateFeedBtn")[0];
  hateFeedBtn.addEventListener("click", (e) => iHateThisFeed());

  const addToFav = document.getElementsByClassName("addToFav")[0];
  addToFav.addEventListener("click", (e) => addThisFeedFav());

  const delOfFav = document.getElementsByClassName("delOfFav")[0];
  delOfFav.addEventListener("click", (e) => delThisFeedFav());
}

init();
