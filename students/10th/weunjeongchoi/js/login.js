let loginName = document.getElementById('id');
let loginPw = document.getElementById('pw');
let loginBtn = document.getElementById('btn');
let showPw = document.getElementsByClassName('showPw');

// activate login button
let activateBtn = function () {
    if (loginName.value.length !== 0 && loginPw.value.length !== 0) {
        loginBtn.style.backgroundColor = '#055cb1';
    } else {
        loginBtn.style.backgroundColor = '#c0dffd';
    }
};
[loginName, loginPw].forEach(function(el) {
    el.addEventListener('keyup', activateBtn)
});

// show password in text type
showPw[0].addEventListener('click', function (){
    if(loginPw.type === 'password') {
        loginPw.type = 'text';
    } else {
        loginPw.type = 'password';
    }
});

