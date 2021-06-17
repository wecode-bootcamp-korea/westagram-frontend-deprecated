"use strict";
// 댓글 인풋 창에 enter 또는 게시 버튼 누르면 댓츨 추가되도록 createElement로 요소 생성, input에 입력한 값이 추가되어야 한다.

// 1. 게시 버튼 태그 받아서 변수에 저장
// 2. 버튼 클릭 또는 엔터 눌렀을 경우 동작하는 addEventListener 추가
// 3. 함수 안에서 textarea 안의 값을 받아서
// 4. ul 태그 밑에 li 태그를 동적으로 생성.
// 5. 닉네임은 따로 지정하자.

const postBtn = document.querySelector(".post-btn");
const form = document.querySelector(".comment__form");

function checkEnter(e) {
  if (e.code === "Enter") {
    getValue();
  }
}

function createComment(value) {
  const ul = document.querySelector(".comment__ul");
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("p");
  const button = document.createElement("button");
  const p = document.createElement("p");

  li.setAttribute("class", "comment");
  div.setAttribute("class", "comment__div");
  span.setAttribute("class", "nickname");
  button.setAttribute("class", "more");

  span.innerHTML = "silvia.oh";
  p.innerHTML = value;
  button.innerHTML = "더 보기";

  ul.appendChild(li);
  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(p);
  div.appendChild(button);
}

function getValue() {
  const commentArea = document.querySelector(".comment-area");
  const textValue = commentArea.value; //넘길 값

  createComment(textValue);
}

postBtn.addEventListener("click", getValue);
form.addEventListener("keypress", checkEnter);
