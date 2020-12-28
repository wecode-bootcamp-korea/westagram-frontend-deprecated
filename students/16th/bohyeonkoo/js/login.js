const thisIsButton = document.getElementsByClassName('btn')[0];

thisIsButton.addEventListener('click', function() {
  const userId = document.getElementById('loginId').value;
  const password = document.getElementById('password').value;
  
  if (!userId) {
    alert('전화번호, 사용자 이름 또는 이메일 형식을 확인해주세요!');
    return;
  }
  
  if (!password) {
    alert('비밀번호를 입력해주세요!');
    return;
  }
  
  alert('로그인 성공!!');
});


const checkPw = document.getElementById('password');

checkPw.addEventListener('keyup', function(event) {
  let btnChange = document.getElementsByClassName('btn')[0];

  if(password) {
    btnChange.style.opacity = '1.0';
  }

})