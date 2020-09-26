"use strict";

// 댓글을 붙이는(post)라는 의미로 변수명 변경
const commentPostBtn = document.getElementsByClassName("comment_upload")[0];
// let blackHeartList = document.getElementsByClassName("blackheart")[0];
// let redHeartList = document.getElementsByClassName("redheart")[0];
// let likeBtns;
// let likeBtnsLength;

function commentFun() {
  const commentText = document.querySelector(".comment_input").value;
  if (commentText === "") {
    return;
  }
  const newCommentList = document.createElement("li");
  newCommentList.innerHTML = `<a>heodeok<a/><span> ${commentText}</span>`;
  document.querySelector(".comments_container").appendChild(newCommentList);

  document.getElementsByClassName("comment_input")[0].value = "";
}

commentPostBtn.addEventListener("click", function () {
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
