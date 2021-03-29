const login = document.querySelector('.login');
const inputId = document.querySelector('.inputId');
const inputPw = document.querySelector('.inputPw');


const changeColor = () => {
  const dog = inputId.value;
  const cat = inputPw.value;

  if ((dog.length > 0) && (cat.length > 0)) {
    login.style.backgroundColor = "red";
  } else {
    login.style.backgroundColor = "lightskyblue";
  }
}
// function changeColor() {

// }

inputId.addEventListener('keyup', changeColor);
inputPw.addEventListener('keyup', changeColor);





