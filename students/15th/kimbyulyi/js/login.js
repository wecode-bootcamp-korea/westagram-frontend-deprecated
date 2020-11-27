"use strict";

const userId = document.querySelector(".user__id");
const userPw = document.querySelector(".user__pw");
const loginBtn = document.querySelector(".login__btn");
const login__form = document.querySelector(".login__form");

const chnageBtn = () => {
  const currentBtn = userId.value && userPw.value;
  loginBtn.disabled = currentBtn ? false : true;
};

userId.addEventListener("keyup", chnageBtn);
userPw.addEventListener("keyup", chnageBtn);
loginBtn.disabled = true;
