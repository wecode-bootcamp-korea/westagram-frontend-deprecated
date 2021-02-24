/*const westagramLogin = document.getElementById('loginButton');

westagramLogin.addEventListener('keyup', function(){
    const instagramId = document.getElementById('idBox').value;
    const instagramPassword = document.getElementById('passwordBox').value;
    let instagramPasswordLength = instagramPassword.length;

    if(instagramId !== "" && instagramPasswordLength > 5){
        westagramLogin.style.opacity = '1';
    }

}
);
*/
const instagramId = document.getElementById('idBox');
const instagramPassword = document.getElementById('passwordBox');

instagramId.addEventListener('keyup', function(){
    if(instagramId.value !== "" && instagramPassword.value.length > 5){
         document.getElementById('loginButton').style.opacity = '1';
    }
});

instagramPassword.addEventListener('keyup', function(){
    if(instagramId.value !== "" && instagramPassword.value.length > 5){
         document.getElementById('loginButton').style.opacity = '1';
    }
});

