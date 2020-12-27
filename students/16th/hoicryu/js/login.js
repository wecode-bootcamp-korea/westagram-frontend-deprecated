const loginButton = document.getElementsByClassName('bt')[0];
const button = document.querySelector('.bt')

loginButton.addEventListener('keyup', function() {
  const id = document.getElementById('id').Value;
  const pw = document.getElementById('pw').Value;

  if (id.length >= 1 && pw.length >= 1){
  button.style.opacity = "1"
} else{
  button.style.opacity = "0.2"
}
});