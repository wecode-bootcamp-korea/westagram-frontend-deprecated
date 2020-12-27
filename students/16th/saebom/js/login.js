const btn = document.querySelector('.loginBtn');
const id = document.querySelector('.userId');
const pw = document.querySelector('.userPw');

document.addEventListener('keyup', function(){
  id.value && pw.value 
  ? (btn.classList.add('active')) : (btn.classList.remove('active'))  
}); 
