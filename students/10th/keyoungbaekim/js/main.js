writingComment = () => {
  let commentInput = document.getElementsByClassName("commentInput")[0];

  const commentDivTags = document.createElement("div");
  const commentPTags = document.createElement("p");
  const commentText = document.createTextNode(commentInput.value);
  const commentStrongTags = document.createElement("strong");
  const commentNickname = document.createTextNode("rudqo_723");

  commentPTags.appendChild(commentText);
  commentStrongTags.appendChild(commentNickname);

  const myCommentList = document.getElementsByClassName("myCommentList")[0];

  myCommentList.appendChild(commentDivTags).appendChild(commentStrongTags);
  myCommentList.appendChild(commentDivTags).appendChild(commentPTags);

  commentInput.value = null;
};

let commentInput = document.getElementsByClassName("commentInput")[0];
const commentBtn = document.getElementsByClassName("commentBtn")[0];

commentBtn.addEventListener("click", addList);

function addList() {
  if (commentInput.value !== "") {
    writingComment();
  }
}

commentInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && commentInput.value !== "") {
    writingComment();
  }

  let commentBtnStyle = document.getElementsByClassName("commentBtn")[0].style;

  commentInput.value !== ""
    ? (commentBtnStyle.color = "#0095f6")
    : (commentBtnStyle.color = "#B2DFFC");
});

const commentIconBtn = document.querySelector(".commentIconBtn");
const heartImg =
  "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";

commentIconBtn.addEventListener("click", () => {
  let heartImg = document.getElementById("heartImg");

  heartImg.src ===
  "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
    ? (heartImg.src = "../img/heart.png")
    : (heartImg.src =
        "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png");
});

const searchInput = document.getElementsByClassName("fas searchInput")[0];
const iconAddSearch = document.getElementsByClassName("searchIconContainer")[0];

focusNavSearch = () => {
  searchInput.placeholder = "검색";

  const searchIcon = document.createElement("i");

  iconAddSearch.appendChild(searchIcon).classList.add("fas", "fa-search");
};

searchInput.addEventListener("blur", () => {
  searchInput.placeholder = " 검색";

  document.getElementsByClassName("fas", "fa-search")[0].remove();
});
