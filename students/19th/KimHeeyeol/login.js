'use strict';

const idForChangeColor = document.body.querySelector(".changeColorId");
const pwForChangeColor = document.body.querySelector(".changeColorPw");

idForChangeColor.addEventListener("keyup", function () {
    const loginButtonOpacity = document.body.querySelector('.logInButton');

    idForChangeColor.value.length !== 0 && pwForChangeColor.value.length !== 0
    ? ( loginButtonOpacity.style.opacity = '1' )
    : ( loginButtonOpacity.style.opacity = '0.3');
});

pwForChangeColor.addEventListener("keyup", function () {
    const loginButtonOpacity = document.body.querySelector('.logInButton');

    idForChangeColor.value.length !== 0 && pwForChangeColor.value.length !== 0
    ? ( loginButtonOpacity.style.opacity = '1' )
    : ( loginButtonOpacity.style.opacity = '0.3');
});
