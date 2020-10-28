// 버튼 활성화 
const idInput = document.querySelector('.id'),
    pwInput = document.querySelector('.pw'),
    loginBtn = document.querySelector('.loginBtn');

//id와 input에 value가 있을 때 loginBtn 활성화
function loginBtnOn() {
if (idInput.value !=='' && pwInput.value !=='') {
    loginBtn.disabled = 'false';
    loginBtn.style.backgroundColor='#469edb';
   } else {
    loginBtn.disabled = 'true';
    loginBtn.style.backgroundColor='#bee1fd'}
   }

function init () {
    loginBtnOn();
    idInput.addEventListener('keyup', loginBtnOn);
    pwInput.addEventListener('keyup', loginBtnOn);
}

init();