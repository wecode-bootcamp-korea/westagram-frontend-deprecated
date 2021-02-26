const logo =document.querySelector('.logo')
const inputName =document.querySelector('.inputName')
const inputPassword =document.querySelector('.inputPassword')
const logInBtn =document.querySelector('.logInBtn')

function changeInputColor(){
if(inputName.value && inputPassword.value){
    logInBtn.style.background="blue"
}
}



function newPage()  {
    window.location.href = 'main.html'
  }

  logInBtn.addEventListener('click', newPage)