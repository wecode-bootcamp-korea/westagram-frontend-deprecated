"use strict";

const commentInputBtn = document.getElementsByClassName("comment_upload")[0];

function commentFun() {
  const commentText = document.getElementsByClassName("comment_input")[0].value;
  if (commentText === "") {
    return;
  }
  const commentsContainer = document.getElementsByClassName("comments")[0];
  const commentNewListTag = document.createElement("li");
  commentNewListTag.className = "new_comment_list";
  const commentListNewIdTag = document.createElement("a");
  commentListNewIdTag.className = "new_comment_id";
  const commentListNewContentTag = document.createElement("span");
  commentListNewContentTag.className = "new_comment_content";
  const commentsLikeBtn = document.createElement("button");
  commentsLikeBtn.className = "likeBtn";
  const blackBtnImg = document.createElement("img");
  blackBtnImg.className = "blackheart";
  const redBtnImg = document.createElement("img");
  redBtnImg.className = "redheart";

  commentsContainer.appendChild(commentNewListTag);

  let commentNumbers = document.getElementsByClassName("new_comment_list")
    .length;

  document
    .getElementsByClassName("new_comment_list")
    [commentNumbers - 1].appendChild(commentListNewIdTag);
  document
    .getElementsByClassName("new_comment_list")
    [commentNumbers - 1].appendChild(commentListNewContentTag);
  document
    .getElementsByClassName("new_comment_list")
    [commentNumbers - 1].appendChild(commentsLikeBtn);
  //new comment list안에 만드는 것들은 새롭게 만들어지는 것들이라 -1을 빼줘야 순서가 0부터시작
  //btn 안의 것들은 기존것도 포함해서 진행하기에 +1이 필요하다.

  document
    .getElementsByClassName("likeBtn")
    [commentNumbers].appendChild(blackBtnImg);
  document.getElementsByClassName("blackheart")[commentNumbers].src =
    "./deokhyeong/img/blackheart.png";
  document
    .getElementsByClassName("likeBtn")
    [commentNumbers].appendChild(redBtnImg);
  document.getElementsByClassName("redheart")[commentNumbers].src =
    "./deokhyeong/img/redheart.png";

  document.getElementsByClassName("new_comment_id")[
    commentNumbers - 1
  ].innerHTML = "heddeok";
  document.getElementsByClassName("new_comment_content")[
    commentNumbers - 1
  ].innerHTML = ` ${commentText}`;

  document.getElementsByClassName("comment_input")[0].value = "";
}

commentInputBtn.addEventListener("click", function () {
  commentFun();
});

document //흠.... button은 키 다운이 먹지 않는것일까... 사실 input도 필요없고 그냥  submit도 가능)
  .querySelector(".comment_input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      commentFun();
    }
  });

// const changeBtn = () => {
//   const blackHeart = document.getElementsByClassName("blackheart")[0];
//   const redHeart = document.getElementsByClassName("redheart")[0];

//   blackHeart.style.display = "none";
//   redHeart.style.display = "block";
// };

// document.querySelector(".likeBtn").addEventListener("click", () => {
//   changeBtn();
// });

// 여기서부터는 이것저것 실험...

// const navbar = document.querySelector(".navbar");
// const navbarHeight = navbar.getBoundingClientRect().height;

// document.addEventListener("scroll", () => {
//   console.log(window.scrollY); // 스크롤 포지션을 알 수 있는 방법... 0부터 시작한다.
//   console.log(`navbarHeight: ${navbarHeight}`);
//   /* 참고용으로 써 놓는것 --
//   if (window.scrollY > navbarHeight) {
//     navbar.classList.add('navbar--dark');
//   } else {
//     navbar.classList.remove('navbar--dark');
//   } */
// });
