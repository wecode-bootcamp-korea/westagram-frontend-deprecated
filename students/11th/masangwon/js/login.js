const inputUserName = document.querySelector('.inputUserName');
const loginButton = document.querySelector('.loginButton');
const inputPassWord = document.querySelector('.inputPassWord');


inputPassWord.addEventListener('keyup', function () {
    console.log(inputPassWord.value)
    if (inputUserName.value && inputPassWord.value) {
        loginButton.style.backgroundColor = 'rgb(53,149,246)';

    } else {
        loginButton.style.backgroundColor = 'rgb(191, 223, 253)';
    }

})

