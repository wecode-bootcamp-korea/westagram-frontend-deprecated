let loginbutton = document.querySelector('.loginbtn');
let id = document.getElementsByClassName('txtbox')[0];
let password = document.getElementsByClassName('passbox')[0];
   
(id,password).addEventListener('keyup', function(){


   return id.value&&password.value !== null ? loginbutton.style.backgroundColor='blue' : loginbutton.style.backgroundColor ='lightblue'

  /* if(id.value&&password.value!==null){
       loginbutton.style.backgroundColor='blue';
       return;
   }
   else{
       loginbutton.style.backgroundColor='lightblue';
       return;
    } */
})



