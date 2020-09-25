let user = document.getElementById('user');
let pswd = document.getElementById('pswd');
let bttn = document.getElementById('login');

pswd.addEventListener('input', function(e){
  if(e !== '') {
      bttn.disabled = false;
      bttn.style.opacity = '1';
      bttn.style.cursor = 'pointer';
  };
})