"use strict";

const userId = document.querySelector(".userId");
const userPw = document.querySelector(".userPw");
const loginBtn = document.querySelector(".loginBtn");
const login__form = document.querySelector(".login__form");

loginBtn.disabled = true;

const chnageBtn = () => {
  const currentBtn = userId.value && userPw.value;
  loginBtn.disabled = currentBtn ? false : true;
};

userId.addEventListener("keyup", chnageBtn);
userPw.addEventListener("keyup", chnageBtn);

// image slide :: 추가 기능
