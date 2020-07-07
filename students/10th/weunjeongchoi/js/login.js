let loginName = document.getElementById('id');
let loginPw = document.getElementById('pw');
let loginBtn = document.getElementById('btn');
let showPw = document.getElementsByClassName('showPw')[0];

// activate login button
function activateBtn() {
    loginBtn.style.backgroundColor = ((loginName.value.length !== 0 && loginPw.value.length !== 0) ? '#055cb1' : '#c0dffd');
}
[loginName, loginPw].forEach(function(el){
    el.addEventListener('keyup', activateBtn);
})

// show password in text type
showPw.addEventListener('click', function () {
    loginPw.type = ((loginPw.type === 'password')? 'text':'password');
});


