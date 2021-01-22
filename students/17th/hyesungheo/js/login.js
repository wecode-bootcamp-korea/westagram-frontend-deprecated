'use strict';

const passwordBox = document.getElementById('login_Pw');
passwordBox.addEventListener('keyup', function (event) {
    const idInputValue = document.getElementById('login_Id').value;
    const pwInputValue = document.getElementById('login_Pw').value;
    const loginBtn = document.getElementById('login_btn');

    const isValidInput = idInputValue && pwInputValue
    loginBtn.style.backgroundColor = isValidInput ? '#0896F7' : '#C0DFFD';
});
