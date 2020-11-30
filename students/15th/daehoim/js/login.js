const getID = document.getElementById('userID')
const getPW = document.getElementById('userPW')
const loginBtn = document.getElementsByClassName('login_btn')[0]

function moveMain() {
    location.href = "main.html";
}

const loginBox = document.querySelector(".login_box"); 
loginBox.addEventListener("keyup", function () {
  const validation = getID.value.includes('@') && getPW.value.length >= 5;
  loginBtn.disabled = validation ? false : true;
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    loginBtn.click();
  }
})