const input_id = document.querySelector('.input_id');
const input_password = document.querySelector('.password');
const btn = document.querySelector('.loginBtn');

[input_id,input_password].map(item =>{
    item.addEventListener("keyup", function(){
        let checkString ="";
        let input_id_length = input_id.value.length;
        let input_password_length = input_password.value.length;

        checkString += input_id.value;
        input_id_length>=1 && checkString.includes('@') && input_password_length>=5 ?(
            btn.style.backgroundColor="blue", btn.setAttribute('disabled','false')
        ) : (
            btn.style.backgroundColor="rgba(0,149,246,.3)"
        );
    });
})