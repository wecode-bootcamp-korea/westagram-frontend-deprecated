'use strict';

const id = document.querySelector('.Id');
const password = document.querySelector('.Pw');
const logInButton = document.querySelector('.logInButton');

id.addEventListener('keyup', function() {
    const passId = id.value;
    const passWord = password.value;
    if (passWord.length !== 0 && passId.length !== 0) {
       logInButton.style.backgroundColor = "rgb(3, 149, 246)";
    } else {
       logInButton.style.backgroundColor = "rgb(178, 223, 252)";
}
});

password.addEventListener('keyup', function() {
    const passId = id.value;
    const passWord = password.value;

    if (passWord.length !== 0 && passId.length !== 0) {
       logInButton.style.backgroundColor = "rgb(3, 149, 246)";
    } else {
       logInButton.style.backgroundColor = "rgb(178, 223, 252)";
}
});
