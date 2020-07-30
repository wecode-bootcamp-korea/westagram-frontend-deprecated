const button = document.getElementsByClassName('login-button')[0];
const id = document.getElementById('id');
const pw = document.getElementById('password');

const changeBtnOpacity = () => {
  const idV = id.value;
  const pwV = pw.value;
  if(idV.length > 0 && pwV.length > 0){
    button.setAttribute('style','opacity:1')
  }else{
    button.setAttribute('style','opacity:0.3')
  }
}

id.addEventListener('keyup',changeBtnOpacity)
pw.addEventListener('keyup',changeBtnOpacity)