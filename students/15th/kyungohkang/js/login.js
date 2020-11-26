let loginbutton = document.querySelector('.loginbtn');

let id = document.getElementsByClassName('txtbox')[0];
let password = document.getElementsByClassName('passbox')[0];
   
(id,password).addEventListener('keyup', function(){
    if(id.value !== null && password.value !== null){
        loginbutton.style.backgroundColor = 'blue';
        return;
    }
})



