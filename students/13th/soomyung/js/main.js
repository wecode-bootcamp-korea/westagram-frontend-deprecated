"use strict";

const getBody = document.querySelector("body");
// for comment
const getCommentText = document.querySelector(".add-comment input");
const getCommentBtn = document.querySelector("button");
const getCommentList = document.querySelector(".comment-list>ul");
const getProfile = document.querySelector(".profile-name>div:first-child");
const getFdLk = document.querySelectorAll(".feed-like .fa-heart");
// for navimenu
const getNavAvatar = document.querySelector(".nav-avatar");
const getHomeIcon = document.querySelector(".icon i:first-child");
const getNavDropdown = document.querySelector(".nav-dropdown");
// for searchbox
const getSearchBox = document.getElementById("search-box");
const getSearchLabel = document.querySelector(".search>label");
const getUlParent = document.querySelector(".search-menu>div");
const getSearchMenu = document.querySelector(".search-dropdown");
const getSearchLabelText = document.querySelector(".search>label>span>span");
let getSearchUl = document.querySelector(".user-list");
// for friendlist
const getFriendUl = document.querySelector(".friends-list>ul");
// for feed image responsive
const getFdImg = document.querySelector(
  ".feed-image>img[src='https://via.placeholder.com/612']"
);

// user db
const userList = [
  {
    id: "john_doe_1st",
    name: "John Doe First",
    profile: "https://via.placeholder.com/32",
  },
  {
    id: "john_doe_2nd",
    name: "John Doe Second",
    profile: "https://via.placeholder.com/32",
  },
  {
    id: "john_doe_3rd",
    name: "John Doe Third",
    profile: "https://via.placeholder.com/32",
  },
  {
    id: "john_doe_4th",
    name: "John Doe Forth",
    profile: "https://via.placeholder.com/32",
  },
  {
    id: "john_doe_5th",
    name: "John Doe Fifth",
    profile: "https://via.placeholder.com/32",
  },
  {
    id: "john_doe_6th",
    name: "John Doe Sixth",
    profile: "https://via.placeholder.com/32",
  },
  {
    id: "john_doe_7th",
    name: "John Doe Seventh",
    profile: "https://via.placeholder.com/32",
  },
  {
    id: "john_doe_8th",
    name: "John Doe Eighth",
    profile: "https://via.placeholder.com/32",
  },
];

// comment db
const commentList = [
  {
    id: "john_doe_1",
    comment: "Lorem ipsum dolor, Adipisci reprehenderit placeat quidem.",
  },
  {
    id: "john_doe_3",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit libero quis hic cum quod possimus quo Lorem ipsum",
  },
  {
    id: "john_doe_7",
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

// for placeholder image resize
window.addEventListener("resize", () => {
  window.innerWidth < 612
    ? (getFdImg.src = "https://via.placeholder.com/500")
    : (getFdImg.src = "https://via.placeholder.com/612");
});

//--- friends-suggestion generator from user DB (random) & 5rows ---//
const friendCheck = [];

// friend template
const friendListElement = (idx) => {
  const friendLi = document.createElement("li");
  friendLi.classList.add("friend");
  friendLi.insertAdjacentHTML(
    "beforeend",
    `
        <div>
          <img
            src=${userList[idx].profile}
            alt="friend-avatar"
          />
          <div class="friend-name">
            <div>${userList[idx].id}</div>
            <div>Suggested for you</div>
          </div>
        </div>
        <button type="button">Follow</button>
        `
  );
  getFriendUl.append(friendLi);
};

// generator
for (let i = 0; i < 5; i++) {
  const friendListGenerator = () => {
    // random name picker from the db
    const randomIdx = Math.floor(Math.random() * userList.length);
    const randomName = userList[randomIdx].id;
    if (!friendCheck.includes(randomName)) {
      // if there is no identical items in the friendcheck, push the item inside friendcheck array
      friendCheck.push(randomName);
      // generator
      friendListElement(randomIdx);
    } else if (friendCheck.length <= 5) {
      // recurring the function for generating 5 rows
      friendListGenerator();
    }
  };
  // execute frinds generator
  friendListGenerator();
}

// exsiting feed like toggle not good but just for this project~ only few feeds!
getFdLk.forEach((like) => {
  like.addEventListener("click", (e) => likeToggle(e));
});

// --- comment handling --- //

// template generator
const cmtTemplateGenerator = () => {
  // comment
  const commentSpan = document.createElement("span");
  commentSpan.classList.add("comment-like");
  // like
  const likeButton = document.createElement("i");
  likeButton.classList.add("far", "fa-heart");
  likeButton.addEventListener("click", (e) => likeToggle(e));
  // trash
  const trashButton = document.createElement("i");
  trashButton.classList.add("far", "fa-trash-alt");
  trashButton.addEventListener("click", (e) =>
    e.target.parentNode.parentNode.remove()
  );
  // merge all
  commentSpan.append(likeButton);
  commentSpan.append(trashButton);
  return commentSpan;
};

// comment like toggler
const likeToggle = (lk) => {
  lk.target.classList.toggle("fas");
  lk.target.classList.toggle("like-active");
};

//  existing comment generator
commentList.forEach((cmt) => {
  const existLi = document.createElement("li");
  // cmt template generator
  cmtTemplateGenerator();
  existLi.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="comment-text">
      <span>${cmt.id}</span>
      <span>${cmt.comment}</span>
    </div>
    `
  );
  existLi.append(cmtTemplateGenerator());
  getCommentList.append(existLi);
});

// new comment generator
const createComment = () => {
  // new cmt li
  const li = document.createElement("li");
  // template!
  cmtTemplateGenerator();
  li.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="comment-text">
      <span>${getProfile.textContent}</span>
      <span>${getCommentText.value}</span>
    </div>
    `
  );
  li.append(cmtTemplateGenerator());
  // create new comment with condition
  getCommentText.value !== ""
    ? getCommentList.append(li)
    : (getCommentText.value = getCommentText.defaultValue);
  // initializing
  getCommentText.value = "";
};

// comment trigger [click & enter]
getCommentBtn.addEventListener("click", () => createComment());
getCommentText.addEventListener("submit", (e) => {
  e.preventDefault();
  createComment();
});

// --- nav dropdown --- //

// fadeout animation ~just like instagram
const fadeAnimation = () => {
  getNavDropdown.classList.remove("upOut");
  void getNavDropdown.offsetHeight;
  getNavDropdown.classList.add("upOut");
};

const dispNone = () => {
  getNavDropdown.classList.add("display-none");
};

// open the nav menu
const noneToFixed = () => {
  getNavDropdown.classList.remove("upOut");
  // showing menu
  getNavDropdown.classList.remove("display-none");
  getNavDropdown.classList.add("display-fixed");
  // home Icon change
  getHomeIcon.classList.add("far");
  getHomeIcon.classList.remove("fas");
  // avatar border generate
  getNavAvatar.parentNode.classList.add("avatar-border");
};

// close the nav menu
const fixedToNone = () => {
  fadeAnimation();
  // home Icon change
  getHomeIcon.classList.remove("far");
  getHomeIcon.classList.add("fas");
  // avatar border remove
  getNavAvatar.parentNode.classList.remove("avatar-border");
  // time for disapear
  // when I tested this, timing-gap occured about 20ms (e.g) css 150, js 130)
  setTimeout(dispNone, 130);
};

// nav trigger
getNavAvatar.addEventListener("click", () => {
  getNavDropdown.classList.contains("display-none")
    ? noneToFixed()
    : fixedToNone();
});

// --- search box handling --- //

// search focusin
getSearchBox.addEventListener("focusin", (e) => {
  //remove placeholder & showing covered stuff
  e.target.placeholder = "";
  e.target.classList.add("bgc-transparent");
  e.target.classList.remove("bgc-main");
  // if there is input value, label placeholder remove
  if (e.target.value !== "") {
    getSearchLabelText.classList.add("display-none");
  }
});

// search focusout
getSearchBox.addEventListener("focusout", (e) => {
  //regenerating placeholder & coverering back stuff
  e.target.placeholder = "Search";
  e.target.classList.add("bgc-main");
  e.target.classList.remove("bgc-transparent");
});

// search box additional action:
// if click the body, disapear dropdownlist. then if back to click the search box again, reappear the list again too
getSearchBox.addEventListener("click", () => {
  if (getSearchBox.value != "") {
    getSearchMenu.classList.remove("display-none");
  }
});

//  body trigger for dissapear items: search & nav dropdown
getBody.addEventListener("click", (e) => {
  if (e.target !== getNavAvatar) {
    fixedToNone();
  }
  if (e.target !== getSearchBox) {
    getSearchMenu.classList.add("display-none");
  }
});
