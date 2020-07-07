const clickBtn = document.getElementById("logIn");
const typeId = document.getElementById("userId");
const typePw = document.getElementById("userPw");

typeId.addEventListener('keypress', (event) => {
   
   typePw.addEventListener('keypress', (event) => {

    clickBtn.style.backgroundColor = "blue";
   })
    
});