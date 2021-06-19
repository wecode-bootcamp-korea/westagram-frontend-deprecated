"use strict";

const postBtn = document.querySelector(".post-btn");
const form = document.querySelector(".comment__form");

function changeImage() {
  const image = document.querySelector(".mini-heart");
  console.log(image);

  if (image.src.includes("heart-red.png")) {
    image.src = "./img/heart.png";
  } else {
    image.src = "./img/heart-red.png";
  }
}

function deleteComment(li) {
  li.remove();
}

function getLikeButton() {
  const button = document.querySelector(".mini-like-btn");
  button.addEventListener("click", changeImage);
}

function getDeleteButton(li) {
  const button = document.querySelector(".delete-btn");
  button.addEventListener("click", () => deleteComment(li));
}

function createComment(value) {
  const ul = document.querySelector(".comment__ul");
  const li = document.createElement("li");
  li.setAttribute("class", "comment");

  const nickname = "silvia.oh";
  const newTags = `<div class="comment__div"><span class="nickname">${nickname}</span><p>${value}</p><button class="more">더 보기</button></div><div class="like-delete"><button class="mini-like-btn"><img alt="Heart" class="mini-heart" src="./img/heart.png" /></button><button class="delete-btn">삭제</button></div>`;

  li.innerHTML = newTags;
  ul.appendChild(li);

  getLikeButton();
  getDeleteButton(li);
}

function getValue() {
  const commentArea = document.querySelector(".comment-area");
  const textValue = commentArea.value; //넘길 값

  createComment(textValue);
}

function eraseContent() {
  form[0].value = "";
}

function checkEnter(e) {
  if (e.code === "Enter") {
    getValue();
    eraseContent();
  }
}

const init = () => {
  postBtn.addEventListener("click", () => {
    getValue();
    eraseContent();
  });
  form.addEventListener("keypress", checkEnter);
};

init();
