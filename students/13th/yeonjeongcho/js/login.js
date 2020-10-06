const id = document.querySelector(".login-id");
const pw = document.querySelector(".password");
const btn = document.querySelector(".btn");
const form = document.querySelector(".login-form");
const alert = document.querySelector(".alert");
  
function turnBlue() {
  if (id.value.length >= 1 && pw.value.length >= 1 ) {
    btn.style.backgroundColor = '#0096F6';
  }else {
    btn.style.backgroundColor =  '#BDDCFA';
  }
}

function validate() {
  form.addEventListener('submit', handleSubmit);
  btn.addEventListener('click', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  
  if (id.value.indexOf('@') === -1) {
    alert.innerHTML = "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.";
  } 
  else if(pw.value.length < 5) {
    alert.innerHTML = "잘못된 비밀번호입니다. 다시 확인하세요";
  }
  else if(pw.value.length > 4) {
    alert.innerHTML = "";
  }
  else if(id.value.indexOf('@') !== -1){
    alert.innerHTML = "";
  } 
  
  // if(!id.value.includes('@')){
  //   alert.innerHTML = "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.";
  // }
  // else if(id.value.includes('@')){
  //   alert.innerHTML = "";
  // }

  // if(pw.value.length < 5){
  //   alert.innerHTML = "잘못된 비밀번호입니다. 다시 확인하세요";
  // }
  // else if(pw.value.length > 4){
  //   alert.innerHTML = "";
  // }


}



validate();

