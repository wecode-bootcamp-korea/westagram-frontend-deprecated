'use strict'
let idid = document.getElementById("login");
let pwpw = document.getElementById('password');

idid.addEventListener('keyup', hi)
pwpw.addEventListener('keyup', hi) 

function hi(){
    const idValue = idid.value;
    const pwValue = pwpw.value;
    
if (idValue.length !== 0 && pwValue.length !==0){
    document.getElementsByTagName('button')[0].style.backgroundColor = 'yellow'
    }
if (idValue.length === 0 || pwValue.length ===0){
    document.getElementsByTagName('button')[0].style.backgroundColor = '#b8daf9'
    }
}  







// const login = document.querySelector(".inputId");
// const pw = document.querySelector(".inputPw");
// const button = document.querySelector(".loginBtn");



// login.addEventListener("keyup", handleinput);
// pw.addEventListener("keyup", handleinput);

// function handleinput() {

//     const idValue = login.value;
//     const pwValue = pw.value;

//     if (idValue && pwValue) {
//         return button.classList.add("blue")
//     } else {
//         return button.classList.remove("blue");
//     }
// }