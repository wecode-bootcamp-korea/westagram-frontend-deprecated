// 댓글 넣기 시스템 구현
const commentText = document.getElementsByClassName("commentText");
const commentButton = document.getElementsByClassName("commentButton");
const comment = document.getElementsByTagName("ul");
const name = document.getElementById("yourName");

const commentChange = (num) => {
  if (commentText[num].value === "") {
    return;
  } else {
    let wrapCommentLi = document.createElement("li");
    let wrapCommentA = document.createElement("a");
    let wrapCommentImg = document.createElement("img");

    wrapCommentImg.setAttribute("class", "commentHeart colorHeart");
    wrapCommentImg.setAttribute("src", "img/heart.png");
    wrapCommentImg.setAttribute("alt", "heart");

    wrapCommentA.append(name.text);
    wrapCommentLi.append(wrapCommentA);
    wrapCommentLi.append(commentText[num].value);
    wrapCommentLi.append(wrapCommentImg);

    comment[num].append(wrapCommentLi);
    commentText[num].value = "";
  }
};

for (let i = 0; i < commentButton.length; i++) {
  commentButton[i].addEventListener("click", (e) => {
    commentChange(i);
    e.preventDefault();
  });
}

//enter로 댓글 넣기

for (let i = 0; i < commentText.length; i++) {
  commentText[i].addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (commentText[i].value === "") {
        return;
      } else {
        event.preventDefault();
        commentChange(i);
      }
    }
  });
}

//댓글 3개이상이면 더보기 버튼 생성 및 높이 고정
//const comment = document.getElementsByTagName("ul"); 위에 선언

const commentList = document.getElementsByTagNameNS;

//좋아요 버튼 구현
let isItColor = [];
let isHeartPush = true;
let heartBtn = document.getElementsByClassName("colorHeart");

for (let i = 0; i < heartBtn.length; i++) {
  isItColor[i] = false;
  let value = heartBtn[i];

  value.addEventListener("click", function () {
    let isBigHeart = this.classList.contains("bigHeart");

    if (isBigHeart) {
      let article = this.parentNode.parentNode.parentNode;
      console.log(article);
      let peopleCount = article.getElementsByClassName("peopleCount")[0];
      console.log(peopleCount);

      let newPeopleCount;
      if (!isItColor[i]) {
        newPeopleCount = "외 1,399명";
      } else {
        newPeopleCount = "외 1,398명";
      }
      peopleCount.innerHTML = newPeopleCount;
    }

    if (!isItColor[i]) {
      this.src = "img/redheart.png";
      isItColor[i] = true;
    } else {
      this.src = "img/heart.png";
      isItColor[i] = false;
    }
  });
}

// nav 검색 관련
const searchIcon = document.getElementsByClassName("searchIconBox")[0];
const navText = document.getElementsByClassName("navTextBar")[0];
const searchIconText = document.getElementsByClassName("searchText")[0];

searchIcon.addEventListener("click", () => {
  navText.setAttribute("style", "z-index: 10;");
  navText.focus();
});

navText.addEventListener("focusout", () => {
  navText.setAttribute("style", "z-index: 0;");
  if (navText.value === "") {
    searchIconText.innerHTML = `검색`;
  } else {
    searchIconText.innerHTML = navText.value;
  }
});

// aside bar story 모두보기 구현
let isStoryBtnPush = false;
const storyAllBtn = document.getElementsByClassName("storyAll");
const story = document.getElementsByClassName("storyRecomWrap");

for (let i = 0; i < storyAllBtn.length; i++) {
  storyAllBtn[i].addEventListener("click", () => {
    ClickStoryAll(i);
  });
}

const ClickStoryAll = (num) => {
  if (!isStoryBtnPush) {
    story[num].setAttribute("style", "height: auto;");
    isStoryBtnPush = true;
  } else {
    story[num].setAttribute("style", "height: 225px");
    isStoryBtnPush = false;
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
