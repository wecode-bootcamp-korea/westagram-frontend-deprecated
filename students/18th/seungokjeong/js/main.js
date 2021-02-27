import userData from "./userData.js";

window.onload = function () {
  const body = document.querySelector("body");
  const feedWrap = document.querySelector(".feed-wrap");
  const feedButtonWrap = document.querySelector(".feed-button-wrap");
  const profile = document.querySelector(".profile");
  const search = document.querySelector("#search");
  const searchView = document.querySelector(".search-view");
  const subOption = document.querySelector(".sub-option");
  const logoutBtn = document.querySelector(".logout");
  const userInfo = document.querySelector(".user-info");
  const rightRecommand = document.querySelector(".right-recommend");
  const prevButton = document.querySelector(".feed-prev");
  const nextButton = document.querySelector(".feed-next");

  const toggleProfile = () => {
    subOption.classList.toggle("active");
  };

  const initStoryButton = () => {
    const feedList = document.querySelectorAll(".feed-list");
    const feed = feedList[0];
    const totalWidth = (feed.clientWidth + 15) * feedList.length;
    if (totalWidth > feedWrap.clientWidth) {
      nextButton.classList.add("active");
    }
  };

  const initProfiile = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    userInfo.innerHTML = `
    <a>${userData.name}</a>
    <span>${userData.koreanName}</span>`;
  };

  const initStory = () => {
    const filterData = userData.filter(data => data.storyActive === true);
    filterData.map(data => {
      const feedList = document.createElement("li");
      feedList.classList.add("feed-list");
      feedList.innerHTML = `
    <div class="story-box story-active"><img src="${data.imgUrl}" alt="피드"/></div>
    <p>${data.username}</p>`;
      feedWrap.append(feedList);
    });
  };

  const initRecommend = () => {
    const notFriends = userData.filter(data => data.friend === false);
    notFriends.map(notfriend => {
      const recommendList = document.createElement("div");
      recommendList.classList.add("recommend-list");
      recommendList.innerHTML = `
      <img src="${notfriend.imgUrl}" alt="프로필 사진">
      <div class="list-info">
      <a>${notfriend.username}</a>
      <span>회원님을 팔로우합니다</span>
      </div>
      <a>팔로우</a>`;
      rightRecommand.append(recommendList);
    });
  };

  const moveStory = e => {
    const target = e.target;
    const feedList = document.querySelectorAll(".feed-list");
    const feed = feedList[0];
    const totalWidth = (feed.clientWidth + 15) * feedList.length;
    const feedWrapWidth = feedWrap.clientWidth;
    const widthGap = totalWidth - feedWrapWidth;
    let leftValue = Number(feedWrap.style.left.split("px")[0]);
    let moveSize;

    if (feedWrapWidth + 15 < 243) {
      // 화면크기가 243px 보다 작을 경우
      moveSize = feedWrapWidth + 15;
    } else {
      moveSize = widthGap + 15 >= 243 ? 243 : widthGap;
    }
    if (target === prevButton) {
      leftValue += moveSize;
      if (leftValue >= 0) {
        leftValue = 0;
        feedWrap.style.left = `${leftValue}px`;
        prevButton.classList.remove("active");
        nextButton.classList.add("active");
      } else {
        feedWrap.style.left = `${leftValue}px`;
        prevButton.classList.add("active");
        nextButton.classList.add("active");
      }
    } else if (target === nextButton) {
      leftValue -= moveSize;
      if (leftValue * -1 >= widthGap) {
        feedWrap.style.left = `${-(widthGap + 15)}px`;
        prevButton.classList.add("active");
        nextButton.classList.remove("active");
      } else {
        feedWrap.style.left = `${leftValue}px`;
        prevButton.classList.add("active");
        nextButton.classList.add("active");
      }
    } else return;
  };

  initStory();
  initStoryButton();
  initProfiile();
  initRecommend();

  profile.addEventListener("click", toggleProfile);
  feedButtonWrap.addEventListener("click", moveStory);
  search.addEventListener("keyup", e => {
    const value = e.target.value;
    if (value) {
      searchView.innerHTML = "";
      const filterData = userData.filter(data => data.username.includes(value));
      if (filterData.length === 0) return;
      else {
        searchView.classList.add("active");
        filterData.map(data => {
          const searchList = document.createElement("li");
          searchList.classList.add("search-list");
          searchList.innerHTML = `
          <div class="${
            data.storyActive ? "story-active" : ""
          } search-img-box"><img src="${data.imgUrl}" alt="프로필"/></div>
          <div class="search-description">
            <h2>${data.username}</h2>
            <span>${data.name}</span>
          </div>`;
          searchView.append(searchList);
        });
      }
    } else searchView.classList.remove("active");
  });
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    location.href = "login.html";
  });
  body.addEventListener("click", e => {
    const target = e.target;
    if (target === profile) return;
    if (subOption.classList.contains("active")) {
      if (!target.classList.contains("option-list"))
        subOption.classList.remove("active");
    }
  });
};

window.addEventListener("resize", () => {
  const feedWrap = document.querySelector(".feed-wrap");
  const leftValue = Number(feedWrap.style.left.split("px")[0]);
  const prevButton = document.querySelector(".feed-prev");
  const nextButton = document.querySelector(".feed-next");

  if (leftValue !== 0) {
    feedWrap.style.left = "0px";
    prevButton.classList.remove("active");
    nextButton.classList.add("active");
  } else return;
});
