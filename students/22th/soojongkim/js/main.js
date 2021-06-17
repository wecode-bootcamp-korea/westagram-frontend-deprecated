"use strict";

let inputComment = document.getElementById("input_comment");
let commentSubmit = document.getElementById("comment_submit");
let commentTime = document.getElementsByClassName("comment_time")[0]

inputComment.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {
        let newComment = document.createElement('li')

        newComment.innerHTML = inputComment.value;
        commentTime.appendChild(newComment)

    }

});