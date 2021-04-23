const loginButton = document.getElementsByTagName('button')[0];
const idInput = document.querySelector('.idInput');
const pwInput = document.querySelector('.pwInput');

function active(){
  if(idInput.value && pwInput.value) {
    loginButton.removeAttribute("disabled","");
    loginButton.style.backgroundColor = "#5586EB";
  } else {
    loginButton.setAttribute("disabled","");
    loginButton.style.backgroundColor = "#c4e1fb";
  }
}

idInput.addEventListener('keyup', active);
pwInput.addEventListener('keyup', active);



