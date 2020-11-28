"user strict";

const commentList = document.getElementsByClassName("comments");
const cmtLikeBtn = document.getElementsByClassName("comment__like");
const cmtDeleteBtn = document.getElementsByClassName("comment__delete");
let likeCheck = false;

const clickDeleteBtn = (i) => {
  const parent = cmtDeleteBtn[i].parentNode;
  parent.parentNode.removeChild(parent);
};

const clickLikeBtn = (i) => {
  if (likeCheck === false) {
    likeCheck = true;
    cmtLikeBtn[i].childNodes[1].src = "img/heart_fill.png";
  } else {
    likeCheck = false;
    cmtLikeBtn[i].childNodes[1].src = "img/heart.png";
  }
};

const postComment = (i, event) => {
  event.preventDefault();
  let cmtInput = document.getElementsByTagName("img");
  if (cmtInput[i].value === "") {
    return;
  } else {
    let commentString = [
      "<li>",
      "<a>Boris</a>",
      `<span class="comment__text">${cmtInput[i].value}</span>`,
      `<span class="comment__like"><img src="img/heart.png" alt="like icon"/></span>`,
      `</li>`,
    ].join("");
    let domparser = new DOMParser();
    let doc = domparser
      .parseFromString(commentString, "text/html")
      .getElementsByTagName("body")[0].innerHTML;
    commentList[i].insertAdjacentHTML("beforeend", doc);
    cmtInput[i].value = "";
  }
};

const init = () => {
  const cmtBtn = document.getElementsByClassName("comment__btn");
  const cmtInput = document.getElementsByClassName("comment__input");

  for (let i = 0; i < cmtBtn.length; i++) {
    cmtBtn[i].addEventListener("click", (event) => postComment(i, event));
    cmtInput[i].addEventListener("keyup", (event) => {
      if (event.keyCode === 13) postComment(i, event);
    });
  }

  for (let i = 0; i < cmtLikeBtn.length; i++) {
    cmtLikeBtn[i].addEventListener("click", (event) => clickLikeBtn(i));
  }

  for (let i = 0; i < cmtDeleteBtn.length; i++) {
    cmtDeleteBtn[i].addEventListener("click", (event) => clickDeleteBtn(i));
  }
};

init();
