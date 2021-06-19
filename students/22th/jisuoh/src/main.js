"use strict";

const postBtn = document.querySelector(".post-btn");
const form = document.querySelector(".comment__form");

function deleteComment(li) {
  li.remove();
}

function createDeleteButton(li) {
  const button = document.createElement("button");
  button.innerHTML = "삭제";
  li.appendChild(button);

  button.addEventListener("click", () => deleteComment(li));
}

function createComment(value) {
  const ul = document.querySelector(".comment__ul");
  const li = document.createElement("li");
  li.setAttribute("class", "comment");

  const nickname = "silvia.oh";
  const newTags = `<div class="comment__div"><span class="nickname">${nickname}</span><p>${value}</p><button class="more">더 보기</button></div>`;

  li.innerHTML = newTags;
  ul.appendChild(li);

  createDeleteButton(li);
}

function getValue() {
  const commentArea = document.querySelector(".comment-area");
  const textValue = commentArea.value; //넘길 값

  createComment(textValue);
}

function eraseContent(e) {
  e.target.value = "";
}

function checkEnter(e) {
  if (e.code === "Enter") {
    getValue();
    eraseContent(e);
  }
}

const init = () => {
  postBtn.addEventListener("click", getValue);
  form.addEventListener("keypress", checkEnter);
};

init();
