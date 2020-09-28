const searchInput = document.querySelector("#nav .inputContent input");
const replyInput = document.querySelector(".commentInput input");
const commentList = document.querySelector(
  "#main article .comments .commentList"
);
const searchBox = document.querySelector("#nav .inputContent .searchBox");
const friendListBox = document.querySelector(
  "#nav .inputContent .searchBox .searchList"
);

const friendList = [
  {
    id: "wecode_bootcamp",
    img_src: "../img/wecode.jpg",
    name: "위코드|WeCode",
    href: "https://www.instagram.com/wecode_bootcamp/",
  },
  {
    id: "hwang_ninaa",
    img_src: "../img/hwang_ninaa.jpg",
    name: "황채영",
    href: "https://www.instagram.com/hwang_ninaa/",
  },
  {
    id: "wecode_founder",
    img_src: "../img/wecode_founder.jpg",
    name: "송은우 (Eun Woo Song)",
    href: "https://www.instagram.com/wecode_founder/",
  },
  {
    id: "corgibh",
    img_src: "../img/baekho.jpg",
    name: "이웃집의 백호",
    href: "https://www.instagram.com/corgibh/",
  },
  {
    id: "minhwa.g",
    img_src: "../img/sonyeo.jpg",
    name: "밤하느리 & 소녀의행성",
    href: "https://www.instagram.com/minhwa.g/",
  },
  {
    id: "cookie_som2",
    img_src: "../img/cookie_som.jpg",
    name: "쿠키랑 솜이랑",
    href: "https://www.instagram.com/cookie_som2/",
  },
];

const init = function () {
  const profileBoxAnchors = document.querySelectorAll(
    "#nav .utilMenuContent .profileBox li a"
  );
  profileBoxAnchors.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  document.querySelector(".profile_button").addEventListener("click", (e) => {
    e.preventDefault();
  });

  // makeFriendList
  const makeList = (arr) => {
    arr.forEach((friend) => {
      const friendId = friend["id"];
      const friendName = friend["name"];
      const friendImg = friend["img_src"];
      const friendHref = friend["href"];

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
  // makeList(friendList);
};

init();

const searchFriend = (arr, inputValue) => {
  friendListBox.innerHTML = "";
  const lowerInputValue = inputValue.toLowerCase();
  const filteredFriendList = arr.filter((el) => {
    return el["id"].toLowerCase().includes(lowerInputValue);
  });
  filteredFriendList.forEach((filteredFriend) => {
    const li = friendListBox.appendChild(document.createElement("li"));
    li.innerHTML = `
    <li>
      <div class="imgBox">
        <img class="img100per" src=${filteredFriend["img_src"]} alt="" />
      </div>
      <div class="textBox">
        <span class="id">${filteredFriend["id"]}</span>
        <span class="name">${filteredFriend["name"]}</span>
      </div>
    </li>`;
    li.addEventListener("click", () => {
      window.location.href = `${filteredFriend["href"]}`;
    });
  });
};

// filter friendList with searching value
searchInput.addEventListener("keyup", () => {
  if (searchInput.value.length) {
    searchFriend(friendList, searchInput.value);
    searchBox.style.opacity = "1";
    searchBox.style.visibility = "visible";
    return;
  }
  if (!searchInput.value.length) {
    searchBox.style.opacity = "0";
    searchBox.style.visibility = "hidden";
  }
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
  let isLiked = false;
  const heartBtn = (isLiked) => {
    return isLiked
      ? `<svg fill="#ed4956" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`
      : `
    <svg fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
  };
  likeBtn.innerHTML = heartBtn(false);

  likeBtn.addEventListener("click", () => {
    isLiked = !isLiked;
    if (isLiked) {
      likeBtn.innerHTML = heartBtn(true);
      likeBtn.classList.add("like");
      return;
    }
    if (!isLiked) {
      likeBtn.innerHTML = heartBtn(false);
      likeBtn.classList.remove("like");
      return;
    }
  });
  const deleteBtn = li.appendChild(document.createElement("button"));
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = `<i class="xi-trash"></i>`;

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

replyInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    let comment = replyInput.value;
    registerComment(comment);
    replyInput.value = "";
  }
});

const registerBtn = document.querySelector(".replyBtn");
registerBtn.addEventListener("click", () => {
  let comment = replyInput.value;
  registerComment(comment);
  replyInput.value = "";
});

// 뭔가 더 간단하고 좋은 방법이 있지 않을까....
document.addEventListener("click", (e) => {
  const profileBox = document.querySelector(
    "#nav .utilMenuContent .profileBox"
  );
  const target = e.target;
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
