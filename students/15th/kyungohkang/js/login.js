
let loginButton = document. getElementsByClassName('.loginbtn')[0];

input.addEventListener('keypress', function(){

    let idbox = document.getElementsByClassName('.txtbox')[0].value;
    let passwordbox = document.getElementsByClassName('.passbox')[0].value;
    
    if(idbox!==null && passwordbox!==null){
        loginButton.style.backgroundColor = 'blue';
        return loginButton;
    }

let test = document.getElementsByTagName('header');
test.innerHTML = 'adfddafsd';
let par = document.getElementsByClassName('loginpage');
par.appendChild(test);
})