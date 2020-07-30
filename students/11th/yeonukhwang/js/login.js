const button = document.getElementsByClassName('loginBtn')[0];
const id = document.getElementById('id');
const pw = document.getElementById('password');
const input = document.getElementsByClassName('rightLogin')[0];

const changeBtnStatus = () => {
  const idV = id.value;
  const pwV = pw.value;
  if(idV.length&&pwV.length){
    button.setAttribute('class','loginBtn-active')
    button.disabled = false;
  }else{
    button.setAttribute('class','loginBtn');
    button.disabled = true;
  }
}

input.addEventListener('keyup',changeBtnStatus);



