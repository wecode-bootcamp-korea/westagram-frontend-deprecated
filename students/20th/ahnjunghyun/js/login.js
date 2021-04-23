'use strict';

const isIdExist = document.getElementById('loginId');
const isPasswordExist = document.getElementById('loginPassword');
const buttonColorChange = document.getElementById('loginBtn');

function isIdAndPasswordExist() {
  if ((isIdExist.value.length > 0) && (isPasswordExist.value.length > 0)) {
    buttonColorChange.removeAttribute('disabled');
    buttonColorChange.style.backgroundColor = "blue";
    return;
  } else {
    buttonColorChange.setAttribute('disabled', '');
    buttonColorChange.style.backgroundColor = "skyblue";
    return;
  }
};

isIdExist.addEventListener('keyup', isIdAndPasswordExist);
isPasswordExist.addEventListener('keyup', isIdAndPasswordExist);
