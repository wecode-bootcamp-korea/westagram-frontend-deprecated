const searchInput = document.querySelector("#nav .middleContent input");
const replyInput = document.querySelector(".commentInput input");
const commentList = document.querySelector(
  "#main article .comments .commentList"
);
const searchBox = document.querySelector("#nav .middleContent .searchBox");
const friendListBox = document.querySelector(
  "#nav .middleContent .searchBox .searchList"
);

const friendList = {
  wecode_bootcamp: {
    img_src: "../img/wecode.jpg",
    name: "위코드|WeCode",
    href: "https://www.instagram.com/wecode_bootcamp/",
  },
  hwang_ninaa: {
    img_src: "../img/hwang_ninaa.jpg",
    name: "황채영",
    href: "https://www.instagram.com/hwang_ninaa/",
  },
  wecode_founder: {
    img_src: "../img/wecode_founder.jpg",
    name: "송은우 (Eun Woo Song)",
    href: "https://www.instagram.com/wecode_founder/",
  },
  corgibh: {
    img_src: "../img/baekho.jpg",
    name: "이웃집의 백호",
    href: "https://www.instagram.com/corgibh/",
  },
  "minhwa.g": {
    img_src: "../img/sonyeo.jpg",
    name: "밤하느리 & 소녀의행성",
    href: "https://www.instagram.com/minhwa.g/",
  },
  cookie_som2: {
    img_src: "../img/cookie_som.jpg",
    name: "쿠키랑 솜이랑",
    href: "https://www.instagram.com/cookie_som2/",
  },
};

const makeList = (obj) => {
  Object.keys(obj).forEach((friend) => {
    const friendId = friend;
    const friendName = obj[friend]["name"];
    const friendImg = obj[friend]["img_src"];
    const friendHref = obj[friend]["href"];

    const li = friendListBox.appendChild(document.createElement("li"));
    li.innerHTML = `
    <li>
      <div class="imgBox">
        <img class="img100per" src=${friendImg} alt="" />
      </div>
      <div class="textBox">
        <span class="id">${friendId}</span>
        <span class="name">${friendName}</span>
      </div>
    </li>`;
    li.addEventListener("click", () => {
      window.location.href = `${friendHref}`;
    });
  });
};

const searchFriend = (obj, value) => {
  const friendIdList = Object.keys(obj);
  const lowerValue = value.toLowerCase();
  const filteredLists = friendIdList.filter((list) => {
    return list.includes(lowerValue);
  });
  friendListBox.innerHTML = "";
  filteredLists.forEach((filteredlist) => {
    console.log(obj[filteredlist]);
    const filteredFriendId = filteredlist;
    const filteredFriendObj = obj[filteredlist];
    const li = friendListBox.appendChild(document.createElement("li"));
    li.innerHTML = `
    <li>
      <div class="imgBox">
        <img class="img100per" src=${filteredFriendObj["img_src"]} alt="" />
      </div>
      <div class="textBox">
        <span class="id">${filteredFriendId}</span>
        <span class="name">${filteredFriendObj["name"]}</span>
      </div>
    </li>`;
    li.addEventListener("click", () => {
      window.location.href = `${filteredFriendObj["href"]}`;
    });
  });
};

// makeFriendList
makeList(friendList);

// filter friendList with searching value
searchInput.addEventListener("keyup", () => {
  searchFriend(friendList, searchInput.value);
});

// show friendList when focus on search Input tag
searchInput.addEventListener("focus", () => {
  searchBox.style.opacity = "1";
  searchBox.style.visibility = "visible";
});
searchInput.addEventListener("blur", () => {
  searchBox.style.opacity = "0";
  searchBox.style.visibility = "hidden";
});

// Make comment
const registerComment = (comment) => {
  const li = commentList.appendChild(document.createElement("li"));
  li.className = "comment";
  li.innerHTML = `
      <a href="#">nick</a>
      <p>${comment}</p>`;
  const likeBtn = li.appendChild(document.createElement("button"));
  likeBtn.classList.add("likeBtn");
  // likeBtn svg empty heart
  likeBtn.innerHTML = `
  <svg fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("like")) {
      likeBtn.classList.remove("like");
      // likeBtn svg empty heart
      likeBtn.innerHTML = `<svg fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
      return;
    }

    if (!likeBtn.classList.contains("like")) {
      likeBtn.classList.add("like");
      // likeBtn svg filled heart
      likeBtn.innerHTML = `<svg fill="#ed4956" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
      return;
    }
  });
  const deleteBtn = li.appendChild(document.createElement("button"));
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = `<i class="xi-trash"></i>`;
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
  });
};

replyInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    let comment = replyInput.value;
    registerComment(comment);
    replyInput.value = "";
  }
});

let registerBtn = document.querySelector(".replyBtn");
registerBtn.addEventListener("click", () => {
  let comment = replyInput.value;
  registerComment(comment);
  replyInput.value = "";
});

const navProfileButton = document.querySelector(
  "#nav .navFlexItems .profile_button"
);
const profileBox = document.querySelector("#nav .rightContent .profileBox");

const profileBoxAnchors = document.querySelectorAll(
  "#nav .rightContent .profileBox li a"
);
profileBoxAnchors.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

document.querySelector(".profile_button").addEventListener("click", (e) => {
  e.preventDefault();
});

// 뭔가 더 간단하고 좋은 방법이 있지 않을까....
document.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target.closest(".profileBox"));
  if (
    target.closest(".profile_button") !== null &&
    !profileBox.classList.contains("clicked")
  ) {
    profileBox.classList.add("clicked");
    return;
  }
  if (
    target.closest(".profileBox") == null &&
    profileBox.classList.contains("clicked")
  ) {
    profileBox.classList.remove("clicked");
  }
});
