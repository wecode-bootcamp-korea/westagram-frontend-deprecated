window.onload = function() {  
  const chat = document.getElementById('myComment');
  const button = document.getElementById('enter');
  function changeColor() {
  if ( chat.value.length > 0) {    
    button.classList.add('active');
    }
  }
  chat.addEventListener('keyup',changeColor);
}