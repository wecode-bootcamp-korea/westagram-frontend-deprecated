const input_id = document.querySelector('.input_id');
const input_password = document.querySelector('.input_password');
const btn = document.querySelector('.loginBtn');

[input_id,input_password].forEach(item =>{
    item.addEventListener("keyup", function(){
        let input_id_length = input_id.value.length;
        let input_password_length = input_password.value.length;

        if(input_id_length>=1 && input_password_length>=1){
            btn.style.backgroundColor="blue";
            btn.setAttribute('disabled','false');
        }else
            btn.style.backgroundColor="rgba(0,149,246,.3)";
        
    });
})






