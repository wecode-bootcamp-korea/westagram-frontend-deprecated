"use strict";

let inputComment = document.getElementById("input_comment");
let submitBtn = document.getElementById("comment_submit");
let myComment = document.getElementsByClassName("new_comment")[0];

inputComment.addEventListener("keyup", () => {
  if (event.key === "Enter") {
    var newComment = document.createElement("p");
    newComment.innerHTML = "<b>Soox_jk</b> " + inputComment.value;
    myComment.appendChild(newComment);
    inputComment.value = "";
  }
});

submitBtn.addEventListener("click", () => {
  if (inputComment.value) {
    var newComment = document.createElement("p");
    newComment.innerHTML = "<b>Soox_jk</b> " + inputComment.value;
    myComment.appendChild(newComment);
    inputComment.value = "";
  }
});