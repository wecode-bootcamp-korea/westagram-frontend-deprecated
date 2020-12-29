const inputId = document.getElementsByClassName('id_input')[0];
const inputPw = document.getElementsByClassName('pw_input')[0];
const loginBtn = document.getElementsByClassName('login_btn')[0];

document.addEventListener('keyup', function(){
    const ID = inputId.value;
    const PW = inputPw.value;
    (!ID&&!PW) 
    ? (loginBtn.style.backgroundColor = "#C0DFFD") 
    : (loginBtn.style.backgroundColor = "#0e70d1");
}); 
