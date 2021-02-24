let txtwrite = document.getElementsByClassName('login_txt')[0];
let pwdwrite = document.getElementsByClassName('login_pwd')[0];
let btnclick = document.getElementsByClassName('login_btn')[0];

let a = txtwrite.addEventListener('keypress', function() {
    btnclick.style.backgroundColor = 'blue';
});

let b = pwdwrite.addEventListener('keypress', function()  {
    btnclick.style.backgroundColor = 'blue';
});
