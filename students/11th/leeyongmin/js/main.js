// post comment by click
const postComment = document.getElementsByClassName("first-feeds-postComment");
const commentButton = postComment[0].children[1];
const commentTextarea = postComment[0].children[0];

commentButton.addEventListener("click", () => {
  const commentList = document.getElementsByClassName("first-feeds-comments");

  const commentValue = commentTextarea.value;

  if (commentValue === "") {
    alert("no comment");
    return;
  }

  const listItem = document.createElement("li");
  const likeImg = document.createElement("img");

  likeImg.setAttribute(
    "src",
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
  );
  listItem.innerHTML = `<span>위코드</span>${commentValue}`;
  listItem.appendChild(likeImg);
  commentList[0].appendChild(listItem);
  commentTextarea.value = "";
});

// post comment by enter
commentTextarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const commentList = document.getElementsByClassName("first-feeds-comments");
    const listItem = document.createElement("li");
    const likeImg = document.createElement("img");
    const commentValue = commentTextarea.value;
    if (commentValue.length <= 1) {
      alert("no comment");
      return;
    }
    likeImg.setAttribute(
      "src",
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
    );
    listItem.innerHTML = `<span>위코드</span>${commentValue}`;
    listItem.appendChild(likeImg);
    commentList[0].appendChild(listItem);
    commentTextarea.value = null;
  }
});

// 스토리 모두보기
const storyButton = document.getElementsByClassName(
  "main-right-story-header"
)[0].children[1];

storyButton.addEventListener("click", () => {
  const storyWindow = document.getElementsByClassName("main-right-story")[0];
  if (storyButton.innerHTML === "모두 보기") {
    storyWindow.style.height = "auto";
    storyButton.innerHTML = "접기";
  } else {
    storyWindow.style.height = "300px";
    storyButton.innerHTML = "모두 보기";
  }
});

// 추천 모두보기
const recommendButton = document.getElementsByClassName(
  "main-right-recommend-header"
)[0].children[1];

recommendButton.addEventListener("click", () => {
  const recommendWindow = document.getElementsByClassName(
    "main-right-recommend"
  )[0];
  if (recommendButton.innerHTML === "모두 보기") {
    recommendWindow.style.height = "auto";
    recommendButton.innerHTML = "접기";
  } else {
    recommendWindow.style.height = "300px";
    recommendButton.innerHTML = "모두 보기";
  }
});

// 피드 본문 더보기

const moreButton = document.getElementsByClassName("first-feeds-text")[0]
  .children[2];

moreButton.addEventListener("click", () => {
  const feedsTextparagraph = document.getElementsByClassName(
    "first-feeds-text"
  )[0].children[1];

  if (moreButton.innerHTML === "더 보기") {
    feedsTextparagraph.style.whiteSpace = "normal";
    moreButton.innerHTML = "접기";
  } else {
    feedsTextparagraph.style.whiteSpace = "nowrap";
    moreButton.innerHTML = "더 보기";
  }
});

// feed-like
let feedLikeIcon = document.getElementsByClassName("first-feeds-icons")[0]
  .children[0].children[0];
feedLikeIcon.addEventListener("click", () => {
  let feedLikeIconSrc = document.getElementsByClassName("first-feeds-icons")[0]
    .children[0].children[0].src;

  if (
    feedLikeIconSrc ===
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
  ) {
    feedLikeIcon.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSGKZa2n9ygNuAwW5FRgiDDk6Kt5ymRby_eQ&usqp=CAU"
    );
    const likeNumber = document.getElementsByClassName("first-feeds-likes")[0]
      .children[2];
    likeNumber.innerHTML = "외 11명";
  } else if (
    feedLikeIconSrc ===
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSGKZa2n9ygNuAwW5FRgiDDk6Kt5ymRby_eQ&usqp=CAU"
  ) {
    feedLikeIcon.setAttribute(
      "src",
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
    );
    const likeNumber = document.getElementsByClassName("first-feeds-likes")[0]
      .children[2];
    likeNumber.innerHTML = "외 10명";
  }
});
