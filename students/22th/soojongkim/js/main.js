"use strict";

let inputComment = document.getElementById("input_comment");
let submitBtn = document.getElementById("comment_submit");
let myComment = document.getElementsByClassName("new_comment")[0];

inputComment.addEventListener("keyup", function() {
  if (event.key === "Enter") {
    var newComment = document.createElement("p");
    newComment.innerHTML = "<b>Soox_jk</b> " + "" + this.value;
    myComment.appendChild(newComment);
    inputComment.value = "";
  }
});

submitBtn.addEventListener("click", function() {
  if (inputComment.value) {
    var newComment = document.createElement("p");
    newComment.innerHTML = "<b>Soox_jk</b> " + "" + newComment.value;
    myComment.appendChild(newComment);
    inputComment.value = "";
  }
});
