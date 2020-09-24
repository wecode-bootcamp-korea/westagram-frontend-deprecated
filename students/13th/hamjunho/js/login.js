
const inputWrap = document.querySelector('.input_btn_warp')
const inputLabel = document.querySelector('.input_label');
const id = document.querySelector('.id_label input');
const password = document.querySelector('.password_label input');
const loginButton = document.querySelector('.login_btn');
const loginAction = document.querySelector('.login_action');

function focusLabel(value) {
  value.addEventListener('focus', () => { // 인풋창 포커스
    value.parentElement.classList.add('focus_color')
      value.parentElement.children[0].classList.remove('focus_border')
  })
  value.addEventListener('blur', () => { // 인풋창 포커스 아웃
    value.parentElement.classList.remove('focus_color')
    if(!value.value.length > 0) {
      value.parentElement.children[0].classList.add('focus_border')
    }
  })
  value.addEventListener('keyup', () => {
    // key up시 input의 각 길이값을 비교해서 이벤트 실행
     if(id.value.length > 0 && password.value.length > 4) {
    loginButton.removeAttribute('disabled')
    return;
  } 
    loginButton.setAttribute('disabled', null)
  })
}

focusLabel(id)
focusLabel(password)

inputWrap.addEventListener('submit', (e) => {
  // 로그인 버튼 클릭 & Enter 클릭시 이벤트 발생
  e.preventDefault()
 if(id.value.includes('@')){
   location.href="main.html"
 } else {
   alert('이메일 양식을 지켜 작성해주세요')
   id.value = ''
   password.value = ''
 }
})


