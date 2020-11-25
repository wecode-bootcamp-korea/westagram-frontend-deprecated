
//id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요. 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!

const inputId = document.querySelector('.loginIdInput')
const inputPassword = document.querySelector('.loginPasswordInput')
const btn = document.querySelector('.btn')

inputPassword.addEventListener('keyup', moreThanOne)

function moreThanOne () {
    const id = inputId.value;
    const password = inputPassword.value;
   
    if ((id.length >= 1) && (password.length >= 1)) {
        btn.style.backgroundColor = "rgb(44, 134, 224)"
    } 
}
