import userData from "./userData.js";
window.onload = function () {
  const feedWrap = document.querySelector(".feed-wrap");
  const profile = document.querySelector(".profile");
  const search = document.querySelector("#search");
  const searchView = document.querySelector(".search-view");
  const subOption = document.querySelector(".sub-option");
  const logoutBtn = document.querySelector(".logout");
  const userInfo = document.querySelector(".user-info");
  const rightRecommand = document.querySelector(".right-recommend");

  const initProfiile = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    userInfo.innerHTML = `
    <a>${userData.name}</a>
    <span>${userData.koreanName}</span>`;
  };

  const initialFeed = () => {
    const filterData = userData.filter(data => data.storyActive === true);
    filterData.map(data => {
      const feedList = document.createElement("li");
      feedList.classList.add("feed-list");
      feedList.innerHTML = `
    <img class="story-active" src="${data.imgUrl}" alt="피드"/>
    <p>${data.username}</p>`;
      feedWrap.append(feedList);
    });
  };

  const recommnedList = () => {
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
    });
    rightRecommand.append;
  };

  const toggleProfile = () => {
    subOption.classList.toggle("active");
  };

  initProfiile();
  initialFeed();
  profile.addEventListener("click", toggleProfile);
  search.addEventListener("keyup", e => {
    const value = e.target.value;
    if (value) {
      searchView.innerHTML = "";
      searchView.classList.add("active");
      const filterData = userData.filter(data => data.username.includes(value));
      if (filterData.length === 0) searchView.classList.remove("active");
      else {
        filterData.map(data => {
          const searchList = document.createElement("li");
          searchList.classList.add("search-list");
          searchList.innerHTML = `
          <img class="${data.storyActive ? "story-active" : ""}" src="${
            data.imgUrl
          }" alt="프로필"/>
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

  const body = document.querySelector("body");
  body.addEventListener("click", e => {
    const target = e.target;
    if (target === profile) return;
    if (subOption.classList.contains("active")) {
      if (!target.classList.contains("option-list"))
        subOption.classList.remove("active");
    }
  });
};
