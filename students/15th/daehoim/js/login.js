const getID = document.getElementById('userID')
const getPW = document.getElementById('userPW')
const ableBtn = document.getElementsByClassName('login_btn')[0]

function moveMain() {
    location.href = "main.html";
}

const loginBox = document.querySelector(".login_box"); 
loginBox.addEventListener("keyup", function () {
  const validation = getID.value.includes('@') && getPW.value.length > 5;
  ableBtn.disabled = validation ? false : true;
});