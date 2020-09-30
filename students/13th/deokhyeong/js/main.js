"use strict";

const commentPostBtn = document.getElementsByClassName("comment_upload")[0];
const commentsContainer = document.querySelector(".comments_container");

function commentAdd() {
  const commentText = document.querySelector(".comment_input").value;
  if (commentText === "") {
    return;
  }

  const newCommentList = document.createElement("li");
  newCommentList.className = "deleteTarget";
  const likeBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  likeBtn.className = "good_Btn";
  likeBtn.innerHTML = "좋아요";
  likeBtn.addEventListener("click", () => {
    switch (likeBtn.style.backgroundColor) {
      case "":
        likeBtn.style.backgroundColor = "red";
        break;
      case "red":
        likeBtn.style.backgroundColor = "";
        break;
    }
  });

  delBtn.className = "del_Btn";
  delBtn.innerHTML = "삭제";
  delBtn.addEventListener("click", () => {
    newCommentList.remove();
  });

  newCommentList.innerHTML = `<a>heodeok</a><span> ${commentText}</span><div style="display : inline-block;">`;
  newCommentList.appendChild(likeBtn);
  newCommentList.appendChild(delBtn);
  commentsContainer.appendChild(newCommentList);

  document.getElementsByClassName("comment_input")[0].value = "";
}

commentPostBtn.addEventListener("click", function () {
  commentAdd();
});

document
  .querySelector(".comment_input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      commentAdd();
    }
  });

// Member Filtering

const memberBox = document.querySelector(".member_box");

class member {
  constructor(id, subId) {
    this.id = id;
    this.subId = subId;
  }

  makeMemberProfile() {
    const profileBox = document.createElement("li");
    memberBox.appendChild(profileBox);
    profileBox.innerHTML = `<img class="profileBox_img" src="./deokhyeong/img/프로필사진.jpg" alt="프사" /><div class="profileBox_info"><span class="profileBoxMainId">${this.id}</span><span class="profileBoxSubId">${this.subId}</span></div>`;
    return this.id;
  }
}

const user1 = new member("계란", "계란 튀김");
const user2 = new member("문어", "문어 튀김");
const user3 = new member("고추", "고추 튀김");
const user4 = new member("오징어", "오징어 튀김");
const user5 = new member("순대", "순대 튀김");

const searchInput = document.getElementsByClassName("search")[0];

searchInput.addEventListener("keyup", () => {
  // while (memberBox.hasChildNodes()) {
  //   memberBox.removeChild(memberBox.firstChild);
  // }
  memberBox.innerHTML = "";
  let searchInputValue = searchInput.value;
  let userBox = [user1, user2, user3, user4, user5];
  let searchResult = userBox.filter(
    (user) => user.id.includes(searchInputValue) === true
  );
  searchResult.map((el) => el.makeMemberProfile());
  if (!memberBox.getElementsByTagName("li")[0]) {
    memberBox.style.display = "none";
  } else {
    memberBox.style.display = "block";
  }
});

// nav 프로필사진 클릭

const profileBox = document.querySelector(".my_profileBox");
profileBox.style.display = "none";
const profileBtn = document.querySelector(".profile_btn");

const clickProfileBoxEvent = (event) => {
  const target = event.target;
  console.log(target);
  if (
    target === profileBtn ||
    target.className === "profileBox_list" ||
    target.className === "log_out"
  ) {
    profileBox.style.display = "block";
  } else {
    profileBox.style.display = "none";
  }
};

document.body.addEventListener("click", clickProfileBoxEvent);
