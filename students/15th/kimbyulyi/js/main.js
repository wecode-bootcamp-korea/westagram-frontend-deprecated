"user strict";

const commentList = document.getElementsByClassName("comments")[0];
const searchInput = document.querySelector(".search__input");
const searchList = document.querySelector(".search__result");
let checLikeStatus = false;

const deleteComment = () => {
  const cmtDelList = document.querySelectorAll(".comment__delete");
  cmtDelList.forEach((event) => {
    event.addEventListener("click", () => {
      const parent = event.parentElement;
      parent.remove();
    });
  });
};

const likeComment = () => {
  const cmtLikeList = document.querySelectorAll(".comment__like");
  cmtLikeList.forEach((event) => {
    event.addEventListener("click", () => {
      let likeImg = event.querySelectorAll(".like__img")[0];
  likeImg.src = checkLikeStatus ? "img/heart.png" : "img/heart_fill.png";
  checLikeStatus = !checkLikeStatus
    });
  });
};

const postComment = (event) => {
  event.preventDefault();
  const cmtInput = document.getElementsByClassName("comment__input")[0];
  if (cmtInput.value === "") {
    return;
  } else {
    let commentString = `
      <li>
      <a>Boris</a>
      <span class="comment__text">${cmtInput.value}</span>
      <span class="comment__like"><img src="img/heart.png" alt="like icon" class="like__img"/></span>
      <span class="comment__delete"><img src="img/remove.png" alt="remove icon"/></span>
      </li>
    `;
    const domparser = new DOMParser();
    const document = domparser
      .parseFromString(commentString, "text/html")
      .getElementsByTagName("body")[0].innerHTML;
    commentList.insertAdjacentHTML("beforeend", document);
    cmtInput.value = "";
  }
  likeComment();
  deleteComment();
};

const init = () => {
  const cmtBtn = document.getElementsByClassName("comment__btn")[0];
  const cmtInput = document.getElementsByClassName("comment__input")[0];

  cmtBtn.addEventListener("click", (event) => postComment(event));
  cmtInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) postComment(event);
  });

  likeComment();
  deleteComment();
};

init();
