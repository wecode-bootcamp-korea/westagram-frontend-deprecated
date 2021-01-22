'use strict'
let idid = document.getElementById("login");
let pwpw = document.getElementById('password');

idid.addEventListener('keyup', function(){
const idValue = idid.value;
const pwValue = pwpw.value;


if (idValue.length !== 0 && pwValue.length !== 0){
document.getElementsByTagName('button')[0].style.backgroundColor = 'yellow'
} if (idValue.length === 0 || pwValue.length ===0){
    document.getElementsByTagName('button')[0].style.backgroundColor = '#b8daf9'
} 

} 
)

pwpw.addEventListener('keyup', function(){
    const idValue = idid.value;
    const pwValue = pwpw.value;
    
    
    if (idValue.length !== 0 && pwValue.length !==0){
    document.getElementsByTagName('button')[0].style.backgroundColor = 'yellow'}
     if (idValue.length === 0 || pwValue.length ===0){
        document.getElementsByTagName('button')[0].style.backgroundColor = '#b8daf9'
     }
    }  
    )