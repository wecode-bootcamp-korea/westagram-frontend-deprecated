// ID / PASSWORD 작성 시 로그인 버튼 활성화
const identify = document.querySelector('input.log');
const passW = document.querySelector('input.pass');

document.addEventListener('keyup', function(e) {
  if (identify.value !== '') {
    if (passW.value !== '') {
      let btnColor = document.querySelector('button.logBtn');
        btnColor.style.backgroundColor = 'blue';
    }
  }
})