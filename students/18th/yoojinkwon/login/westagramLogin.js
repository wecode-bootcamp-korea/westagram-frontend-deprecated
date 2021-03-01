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

