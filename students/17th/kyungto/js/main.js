"use strict";

const memo = document.querySelector(".comments");
const comBtn = document.querySelector(".commentsBtn");

memo.addEventListener("keydown", function (event) {
  if (memo.value.length > 0) {
    comBtn.removeAttribute("disabled");
    comBtn.classList.add("commentsStart");
  } else {
    comBtn.classList.remove("commentsStart");
  }
});
