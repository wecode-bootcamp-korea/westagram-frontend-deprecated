//section별로 관리 시스템 구현
const name = document.getElementById("yourName");

const sectionList = Array.from(document.getElementsByTagName("section"));

sectionList.forEach((section) => {
  //댓글 넣기 기능 구현

  const commentInput = section.getElementsByClassName("commentText")[0];
  const commentSubmitButton = section.getElementsByClassName(
    "commentButton"
  )[0];
  const commentListContainer = section.getElementsByTagName("ul")[0];
  const submitComment = () => {
    if (commentInput.value === "") {
      return;
    }

    const newComment = document.createElement("li");
    newComment.innerHTML = `<a>${name.text}</a>${commentInput.value}<span class="commentIcons"><img class="commentHeart colorHeart" src="img/heart.png" alt="heart" /><span class="searchXBtn"></span></span>`;
    commentListContainer.append(newComment);
    commentInput.value = "";

    // 새로운 댓글 하트 버튼, 댓글 삭제 버튼 활성화 구현

    const newCommentHeart = newComment.getElementsByClassName(
      "commentHeart"
    )[0]; //위에 생성한 li안의 className
    let isLiked = false;
    newCommentHeart.addEventListener("click", function () {
      isLiked = !isLiked;
      updateHeartIcon(isLiked, newCommentHeart); //하트 컬러 부여 함수 호출
    });

    const newCommentRemoveBtn = newComment.getElementsByClassName(
      "searchXBtn"
    )[0];

    newCommentRemoveBtn.addEventListener("click", function () {
      newComment.remove();
    });
  };

  commentSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    submitComment();
  });

  //enter로 댓글 넣기
  commentInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && commentInput.value !== "") {
      event.preventDefault();
      submitComment();
    }
  });

  //기존 좋아요 버튼, 댓글 삭제 버튼 구현 및 좋아요 숫자 추가, 감소 기능 구현
  const heartBtnList = Array.from(section.getElementsByClassName("colorHeart"));
  let peopleCount = section.getElementsByClassName("peopleCount")[0];

  heartBtnList.forEach((heartBtn) => {
    let isLiked = false;
    heartBtn.addEventListener("click", function () {
      isLiked = !isLiked;
      updateHeartIcon(isLiked, heartBtn);

      const isBigHeart = this.classList.contains("bigHeart");
      if (isBigHeart) {
        peopleCount.textContent =
          Number(peopleCount.textContent) + (isLiked ? 1 : -1);
      }
    });
  });

  const commentDOMList = Array.from(
    commentListContainer.getElementsByTagName("li")
  );
  commentDOMList.forEach((comment) => {
    const removeCommentBtn = comment.getElementsByClassName("searchXBtn")[0];
    removeCommentBtn.addEventListener("click", function () {
      comment.remove();
    });
  });
});

// 하트 컬러 부여 함수 선언
function updateHeartIcon(isLiked, heartIcon) {
  heartIcon.src = isLiked ? "img/redheart.png" : "img/heart.png";
}

//댓글 3개이상이면 더보기 버튼 생성 및 높이 고정 (미구현)
//const comment = document.getElementsByTagName("ul"); 위에 선언
// const commentList = document.getElementsByTagName;

//프로필 틀 만드는 함수 구현
const createProfileDOM = (profileImageSrc, iD, description) => {
  const profileDOM = document.createElement("div");
  profileDOM.className = "wrapProfile";
  profileDOM.innerHTML = `<img src="${profileImageSrc}" alt="profileImg" /><div><a>${iD}</a><p>${description}</p></div>`;
  return profileDOM;
};

//스토리 프로필 리스트 생성
const storyProfileList = [
  {
    profileImageSrc: "img/yeonuk.png",
    iD: "yeonukhwang",
    lastLoginTime: "1분전",
  },
  {
    profileImageSrc: "img/sanghun.png",
    iD: "sanghun",
    lastLoginTime: "28분전",
  },
  {
    profileImageSrc: "img/dlwlrma.png",
    iD: "dlwlrma",
    lastLoginTime: "6시간전",
  },
  {
    profileImageSrc: "img/bsjun.png",
    iD: "bn_sj2013",
    lastLoginTime: "7시간전",
  },
];

// 추천프로필 리스트 생성
const recommendProfileList = [
  { profileImageSrc: "img/gnlcks.png", iD: "you_hchan", name: "유휘찬" },
  { profileImageSrc: "img/ckdtlr.png", iD: "rnjsckdtlr_dd", name: "권창식" },
  { profileImageSrc: "img/tkdrn.png", iD: "ohsan9_539", name: "오상구" },
  { profileImageSrc: "img/profile.png", iD: "ma_sang_1", name: "마상원" },
];

//스토리 프로필, 추천 프로필 map, forEach 사용해서 함수 호출하여 생성

const storyRecomProfileDOMList = document.getElementsByClassName(
  "storyRecomWrap"
);

storyProfileList
  .map((profileInform) =>
    createProfileDOM(
      profileInform["profileImageSrc"],
      profileInform["iD"],
      profileInform["lastLoginTime"]
    )
  )
  .forEach((dom) => {
    storyRecomProfileDOMList[0].append(dom);
  });

recommendProfileList
  .map((profileInform) =>
    createProfileDOM(
      profileInform["profileImageSrc"],
      profileInform["iD"],
      profileInform["name"]
    )
  )
  .forEach((dom) => {
    storyRecomProfileDOMList[1].append(dom);
  });

// nav 검색 관련(focus, focusout 이벤트 구현)
// 검색창 텍스트 지우기 버튼 구현
const searchIcon = document.getElementsByClassName("searchIconBox")[0];
const navText = document.getElementsByClassName("navTextBar")[0];
const WrapNavText = document.getElementsByClassName("navTextBarCon")[0];
const searchIconTextContainer = document.getElementsByClassName(
  "searchText"
)[0];

WrapNavText.addEventListener("mouseenter", (e) => (isCursorEntered = true));
WrapNavText.addEventListener("mouseleave", (e) => (isCursorEntered = false));

searchIcon.addEventListener("click", () => {
  WrapNavText.setAttribute("style", "z-index: 10;");
  navText.focus();
  if (navText.value.length > 0) {
    navText.select(); // 추가 : select() 메서드로 텍스트 전체 선택
  }
});

navText.addEventListener("focusout", () => {
  WrapNavText.setAttribute("style", "z-index: 0;");
  if (navText.value === "") {
    searchIconTextContainer.innerHTML = `검색`;
  } else {
    searchIconTextContainer.innerHTML = navText.value;
  }
});

// 검색창 텍스트 지우기 버튼 구현
const searchTextRemoveBtn = WrapNavText.getElementsByClassName("searchXBtn")[0];

searchTextRemoveBtn.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

searchTextRemoveBtn.addEventListener("click", () => {
  navText.value = "";
});

// aside bar story 모두보기 구현
let isStoryBtnPush = [false, false];
const storyAllBtn = document.getElementsByClassName("storyAll");
const story = document.getElementsByClassName("storyRecomWrap");

for (let i = 0; i < storyAllBtn.length; i++) {
  storyAllBtn[i].addEventListener("click", () => {
    isStoryBtnPush[i] = !isStoryBtnPush[i];
    ClickStoryAll(i, isStoryBtnPush[i]);
  });
}

const ClickStoryAll = (num, isStoryBtnPush) => {
  if (isStoryBtnPush) {
    story[num].setAttribute("style", "height: auto;");
  } else {
    story[num].setAttribute("style", "height: 225px");
  }
};

// 화면 사이즈 어느 지점(break point) 이하로 줄어들 시 우측 nav바 제거
const asideWrapNav = document.getElementsByClassName("asideWrap");
const wrapMain = document.getElementsByClassName("wrapMain");
const mediaQ = window.matchMedia("(max-width: 1024px)");

mediaQ.addListener((e) => {
  if (e.matches) {
    asideWrapNav[0].setAttribute("style", "display: none;");
    wrapMain[0].classList.add("changeMain");
  } else {
    asideWrapNav[0].setAttribute("style", "display: intial");
    wrapMain[0].classList.remove("changeMain");
  }
});

// 검색창 활성화 (아직 텍스트 value로 검색하는 기능은 구현 못함)
//const navText = document.getElementsByClassName("navTextBar")[0];
const SearchBox = document.getElementsByClassName("wrapSearchBox")[0];

navText.addEventListener("keyup", () => {
  toggleHiddenSearchBox();
});

navText.addEventListener("focusout", () => {
  SearchBox.classList.add("hiddenSearchBox");
});

navText.addEventListener("focusin", () => {
  toggleHiddenSearchBox();
});

function toggleHiddenSearchBox() {
  if (navText.value.length > 0) {
    SearchBox.classList.remove("hiddenSearchBox");
  } else {
    SearchBox.classList.add("hiddenSearchBox");
  }
}
