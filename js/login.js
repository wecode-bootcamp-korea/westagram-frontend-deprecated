const userInput = document.getElementsByClassName('user');
const pswd = document.getElementsByClassName('pswd');
const bttn = document.getElementsByClassName('login');

pswd.addEventListener('input', function(e){
  if(e !== '') {
      bttn.disabled = false;
      bttn.style.opacity = '1';
      bttn.style.cursor = 'pointer';
  };
})