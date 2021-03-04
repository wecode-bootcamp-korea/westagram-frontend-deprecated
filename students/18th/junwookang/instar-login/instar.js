window.onload = function() {
  const id = document.getElementById('log-id');
  const password = document.getElementById('log-pass');
  const button = document.getElementById('login');
  function changeColor() {
  if ( id.value.length > 0 && password.value.length >=6 ) {    
    button.classList.add('active');
    }
  }
  password.addEventListener('keyup',changeColor);
  id.addEventListener('keyup',changeColor);

}  