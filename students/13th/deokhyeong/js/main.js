"use strict";

const commentInputBtn = document.getElementsByClassName("comment_upload")[0];
// let blackHeartList = document.getElementsByClassName("blackheart")[0];
// let redHeartList = document.getElementsByClassName("redheart")[0];
// let likeBtns;
// let likeBtnsLength;

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
  // const commentsLikeBtn = document.createElement("button");
  // commentsLikeBtn.className = "likeBtn";
  // const blackBtnImg = document.createElement("img");
  // blackBtnImg.className = "blackheart";
  // const redBtnImg = document.createElement("img");
  // redBtnImg.className = "redheart";

  commentsContainer.appendChild(commentNewListTag);

  let commentNumbers = document.getElementsByClassName("new_comment_list")
    .length;

  document
    .getElementsByClassName("new_comment_list")
    [commentNumbers - 1].appendChild(commentListNewIdTag);
  document
    .getElementsByClassName("new_comment_list")
    [commentNumbers - 1].appendChild(commentListNewContentTag);
  // document
  //   .getElementsByClassName("new_comment_list")
  //   [commentNumbers - 1].appendChild(commentsLikeBtn);

  // document
  //   .getElementsByClassName("likeBtn")
  //   [commentNumbers - 1].appendChild(blackBtnImg);
  // document.getElementsByClassName("blackheart")[commentNumbers - 1].src =
  //   "./deokhyeong/img/blackheart.png";
  // document
  //   .getElementsByClassName("likeBtn")
  //   [commentNumbers - 1].appendChild(redBtnImg);
  // document.getElementsByClassName("redheart")[commentNumbers - 1].src =
  //   "./deokhyeong/img/redheart.png";

  document.getElementsByClassName("new_comment_id")[
    commentNumbers - 1
  ].innerHTML = "heddeok";
  document.getElementsByClassName("new_comment_content")[
    commentNumbers - 1
  ].innerHTML = ` ${commentText}`;

  // likeBtns = document.querySelectorAll(".likeBtn");
  // blackHeartList = document.getElementsByClassName("blackheart");
  // redHeartList = document.getElementsByClassName("redheart");
  // likeBtnsLength = likeBtns.length;
  document.getElementsByClassName("comment_input")[0].value = "";
  // play();
}

commentInputBtn.addEventListener("click", function () {
  commentFun();
});

document
  .querySelector(".comment_input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      commentFun();
    }
  });

// function play() {
//   for (let i = 0; i < likeBtnsLength; i++) {
//     likeBtns[i].addEventListener("click", () => {
//       let blackHeart = blackHeartList[i];
//       let redHeart = redHeartList[i];
//       console.log(blackHeart.style.display);
//       console.log(redHeart.style.display);
//       if (blackHeart.style.display === "") {
//         blackHeart.style.display = "none";
//         redHeart.style.display = "block";
//       } else if (blackHeart.style.display === "none") {
//         blackHeart.style.display = "";
//         redHeart.style.display = "none";
//       }
//     });
//   }
// }
// for (let i = 0; i < likeBtnsLength; i++) {
//   likeBtns[i].addEventListener("click", () => {
//     const blackHeart = document.getElementsByClassName("blackheart")[i];
//     const redHeart = document.getElementsByClassName("redheart")[i];

//     console.log("aaa");

//     if (blackHeart.style.display === "block") {
//       blackHeart.style.display = "none";
//       redHeart.style.display = "block";
//     }
//     if (redHeart.style.display === "block") {
//       blackHeart.style.display = "block";
//       redHeart.style.display = "none";
//     }
//   });
// }

// const changeBtn = () => {
//    const blackHeart = document.getElementsByClassName("blackheart")[0];
//   const redHeart = document.getElementsByClassName("redheart")[0];

//   blackHeart.style.display = "none";
//   redHeart.style.display = "block";
// };

// document.querySelector(".likeBtn").addEventListener("click", () => {
//   changeBtn();
// });
