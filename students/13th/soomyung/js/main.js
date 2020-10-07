"use strict";

const body = document.querySelector("body");
// for comment
const cmtText = document.querySelector(".add-comment input");
const cmtBtn = document.querySelector("button");
const cmtList = document.querySelector(".comment-list>ul");
const profile = document.querySelector(".profile-name>div:first-child");
const feedLike = document.querySelectorAll(".feed-like .fa-heart");
// for navimenu
const navAvatar = document.querySelector(".nav-avatar");
const homeIcon = document.querySelector(".icon i:first-child");
const navDrop = document.querySelector(".nav-dropdown");
// for searchbox
const searchBox = document.getElementById("search-box");
const searchLabel = document.querySelector(".search>label");
const ulParent = document.querySelector(".search-menu>div");
const searchMenu = document.querySelector(".search-dropdown");
const searchLabelText = document.querySelector(".search>label>span>span");
let searchUl = document.querySelector(".user-list");
// for friendlist
const friendUl = document.querySelector(".friends-list>ul");
// for feed image responsive
const feedImg = document.querySelector(
  ".feed-image>img[src='https://via.placeholder.com/612']"
);

// LINK user db
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

// LINK comment db
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
    ? (feedImg.src = "https://via.placeholder.com/500")
    : (feedImg.src = "https://via.placeholder.com/612");
});

//--- SECTION friends-suggestion generator from user DB (random) & 5rows ---//
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
  friendUl.append(friendLi);
};

// generator
userList.forEach(() => {
  const friendListGenerator = () => {
    if (friendCheck.length >= 5) return;

    const randomIdx = Math.floor(Math.random() * userList.length);
    const randomName = userList[randomIdx].id;

    if (!friendCheck.includes(randomName)) {
      friendCheck.push(randomName);
      friendListElement(randomIdx);
    }
    friendListGenerator();
  };
  friendListGenerator();
});

// exsiting feed like toggle not good but just for this project~ only few feeds!
feedLike.forEach((like) => {
  like.addEventListener("click", (e) => likeToggle(e));
});

// --- SECTION comment handling --- //

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
  cmtList.append(existLi);
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
      <span>${profile.textContent}</span>
      <span>${cmtText.value}</span>
    </div>
    `
  );
  li.append(cmtTemplateGenerator());
  // create new comment with condition
  cmtText.value ? cmtList.append(li) : (cmtText.value = cmtText.defaultValue);
  // initializing
  cmtText.value = "";
};

// comment trigger [click & enter]
cmtBtn.addEventListener("click", () => createComment());
cmtText.addEventListener("submit", (e) => {
  e.preventDefault();
  createComment();
});

// --- SECTION nav dropdown --- //

// fadeout animation ~just like instagram
const fadeAnimation = () => {
  navDrop.classList.remove("upOut");
  void navDrop.offsetHeight;
  navDrop.classList.add("upOut");
};

const dispNone = () => {
  navDrop.classList.add("display-none");
};

// open the nav menu
const noneToFixed = () => {
  navDrop.classList.remove("upOut");
  // showing menu
  navDrop.classList.remove("display-none");
  navDrop.classList.add("display-fixed");
  // home Icon change
  homeIcon.classList.add("far");
  homeIcon.classList.remove("fas");
  // avatar border generate
  navAvatar.parentNode.classList.add("avatar-border");
};

// close the nav menu
const fixedToNone = () => {
  fadeAnimation();
  // home Icon change
  homeIcon.classList.remove("far");
  homeIcon.classList.add("fas");
  // avatar border remove
  navAvatar.parentNode.classList.remove("avatar-border");
  // time for disapear
  // NOTE when I tested this, timing-gap occured about 20ms (e.g) css 150, js 130)
  setTimeout(dispNone, 130);
};

// nav trigger
navAvatar.addEventListener("click", () => {
  navDrop.classList.contains("display-none") ? noneToFixed() : fixedToNone();
});

// --- SECTION search box handling --- //

// search focusin
searchBox.addEventListener("focusin", (e) => {
  //remove placeholder & showing covered stuff
  e.target.placeholder = "";
  e.target.classList.add("bgc-transparent");
  e.target.classList.remove("bgc-main");
  // if there is input value, label placeholder remove
  if (e.target.value) {
    searchLabelText.classList.add("display-none");
  }
});

// search focusout
searchBox.addEventListener("focusout", (e) => {
  //regenerating placeholder & coverering back stuff
  e.target.placeholder = "Search";
  e.target.classList.add("bgc-main");
  e.target.classList.remove("bgc-transparent");
});

// search box additional action:
// NOTE if click the body, disapear dropdownlist. then if back to click the search box again, reappear the list again too
searchBox.addEventListener("click", () => {
  if (searchBox.value) {
    searchMenu.classList.remove("display-none");
  }
});

//  body trigger for dissapear items: search & nav dropdown
body.addEventListener("click", (e) => {
  if (e.target !== navAvatar) {
    fixedToNone();
  }
  if (e.target !== searchBox) {
    searchMenu.classList.add("display-none");
  }
});
