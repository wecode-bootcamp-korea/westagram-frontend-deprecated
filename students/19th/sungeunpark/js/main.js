// main page 필수 + 추가기능 구현

const feedsDescription = document.querySelector(".feeds_info_description");
const form = document.querySelector("form");
const commentInput = document.querySelector(".feed_info_comment_input");
const submitCommentBtn = document.querySelector(".feed_info_comment_submit");

// 댓글창에 글자 하나 이상 입력 시 게시 버튼 컬러 변경

const activeSubmitBtn = () => {
  if (commentInput.value.length >= 1) {
    submitCommentBtn.classList.add("pressed");
  } else {
    submitCommentBtn.classList.remove("pressed");
  }
};
commentInput.addEventListener("keyup", activeSubmitBtn);

// 필수 구현 1. 엔터 또는 게시버튼 클릭 시 댓글 생성
// + 추가 구현 1. 댓글 좋아요, 삭제 기능 추가

const commentContainerUpdate = () => {
  const inputValue = commentInput.value;
  const userId = document.createElement("span");
  const newComment = document.createElement("span");
  const commentContainer = document.createElement("div");
  const heartEmoji = document.createElement("i");

  userId.classList.add("comment_user_span");
  userId.innerHTML = "elena_park33";

  heartEmoji.className = "far fa-heart";
  newComment.innerHTML = inputValue;

  commentContainer.style.position = "relative";
  commentContainer.classList.add("comment_container");
  heartEmoji.style.position = "absolute";
  heartEmoji.style.right = "0";
  heartEmoji.style.top = "3px";

  // 좋아요 하트이미지 색상 변경 구현
  heartEmoji.addEventListener("click", () => {
    heartEmoji.classList.toggle("change_heart_color");
  });

  commentContainer.appendChild(userId);
  commentContainer.appendChild(newComment);
  commentContainer.appendChild(heartEmoji);
  feedsDescription.appendChild(commentContainer);

  commentInput.value = "";
  commentInput.focus();

  // 코멘트를 쓴 유저 아이디 클릭 시 코멘트 삭제 구현
  userId.addEventListener("click", () => {
    commentContainer.remove();
  });
};

const submitWithEnter = (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    commentContainerUpdate();
  }
};

const submitWithClick = () => {
  commentContainerUpdate();
};

form.addEventListener("submit", submitWithEnter);
submitCommentBtn.addEventListener("click", submitWithClick);

// 추가 구현 2. navbar 아이디 검색 기능

// 2-1. 검색창 클릭 시 검색이미지 위치 변경
const navbarSearchBox = document.querySelector(".navbar_search input");
const searchImg = document.querySelector(".fa-search");

const changeImagePosition = () => {
  searchImg.style.left = "5%";
};

// 2-2. 검색 시 검색 결과 리스트 dropdown 생성
const updateSearchResult = (e) => {
  const results = ["wecode", "elena", "ketogenic", "runday", "baking"];
  const searchDropDownContent = document.querySelector(
    ".search_dropdown_content"
  );
  let searchInput = navbarSearchBox.value;

  // 키가 엔터키이면서 검색값이 배열에 존재할 때
  if (e.code === "Enter" && results.includes(searchInput)) {
    const list = results.filter((id) => id === searchInput);
    searchDropDownContent.innerHTML = `<a>${list}</a>`;
    searchDropDownContent.classList.add("show");
    navbarSearchBox.value = "";
  }
  // 키가 엔터키이면서 검색값이 배열에 존재하지 않을 때
  if (e.code === "Enter" && !results.includes(searchInput)) {
    searchDropDownContent.classList.remove("show");
    navbarSearchBox.value = "";
  }
};

navbarSearchBox.addEventListener("mousedown", changeImagePosition);
navbarSearchBox.addEventListener("keyup", updateSearchResult);

// 2-3. dropdown 외부 클릭시 메뉴 닫기
window.addEventListener("click", () => {
  const searchDropDownContent = document.querySelector(
    ".search_dropdown_content"
  );
  searchDropDownContent.classList.remove("show");
});

// 추가 구현 3. navbar 프로필 사진 클릭 시 메뉴 dropdown 생성

// 3-1. 프로필사진 클릭 시 dropdown toggle
const profileBtn = document.querySelector(".navbar_icons .profileBtn img");

const toggleProfileInfo = () => {
  const profileDropdownContent = document.querySelector(
    ".profile_dropdown_content"
  );
  profileDropdownContent.classList.toggle("show");
};

profileBtn.addEventListener("click", toggleProfileInfo);

// 3-2. dropdown 외부 클릭시 메뉴 닫기
window.addEventListener("click", (e) => {
  const profileDropdownContent = document.querySelector(
    ".profile_dropdown_content"
  );
  if (
    e.target !== profileBtn &&
    profileDropdownContent.classList.contains("show")
  ) {
    profileDropdownContent.classList.remove("show");
  }
});
