const navLogo = document.querySelector(".nav__logo-img");
const navSearch = document.querySelector(".nav__search");
const navSearchVal = document.querySelector(".nav__search-input");

const feedForms = document.querySelectorAll(".feed__comment");
let feedComments = document.querySelectorAll(".js-feedCommentList");

let feedCommentTxt = document.querySelectorAll(".comment__text");
const feedPostBtns = document.querySelectorAll(".comment__post-btn");

const postTxt = document.querySelectorAll(".statusTxt");
const moreBtn = document.querySelectorAll(".statusTxt__more");

const PAINT_COMMENT = "comment__post-btn-clicked";
const HIDING = "hide";

let comment = [];

function init() {
  //돋보기 아이콘 이동
  navSearch.addEventListener("click", () => {
    const searchIcon = document.querySelector(".nav__search-icon");
    searchIcon.classList.add("move");
  });
  //댓글 기능 활성화
  feedForms.forEach((input, inputIndex) => {
    input.addEventListener("submit", () => {
      feedCommentTxt.forEach((commentPost, commentIndex) => {
        if (inputIndex === commentIndex) {
          if (!commentPost.value) {
            return e.preventDefault();
          }
          const li = document.createElement("li");
          const span = document.createElement("span");
          const delBtn = document.createElement("button");
          delBtn.classList.add("delBtn");
          delBtn.innerText = "X";
          delBtn.addEventListener("click", () => {
            li.parentNode.removeChild(li);
          });
          const newId = comment.length + 1;
          const userId = document.createElement("span");
          userId.classList.add("user__name");
          span.innerText = `${userId.innerText} ${commentPost.value}`;
          userId.innerText = "yooeooe";
          li.appendChild(userId);
          li.appendChild(span);
          li.appendChild(delBtn);
          li.id = newId;
          feedComments.forEach((feedComment, i) => {
            if (commentIndex === i) {
              feedComment.appendChild(li);
              event.preventDefault();
              commentPost.value = "";
            }
          });
        }
      });
    });
    //게시 버튼 색변화
    feedPostBtns.forEach((btns, btnsIndex) => {
      if (inputIndex === btnsIndex) {
        input.addEventListener("keyup", () => {
          btns.classList.add(PAINT_COMMENT);
        });
      }
    });
  });
  //더보기 버튼 활성화
  moreBtn.forEach((btn, newBtnIndex) => {
    btn.addEventListener("click", () => {
      postTxt.forEach((txt, newTxtIndex) => {
        if (newBtnIndex === newTxtIndex) {
          btn.classList.add(HIDING);
          txt.classList.remove("statusTxt");
        }
      });
    });
  });
  navSearch.addEventListener("submit", () => {
    window.open(
      "https://www.instagram.com/explore/tags/" + navSearchVal.value,
      "_blank"
    );
  });
  navLogo.addEventListener("click", () => {
    window.location.reload();
  });
}
init();
