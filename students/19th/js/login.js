const Email = document.getElementById("InputEmail");
const Password = document.getElementById("InputPassword");
const ButtonBlue = document.getElementById("BlueButton");

const LoginBlue = () =>{
    if(Email.value && Password.value ){
        ButtonBlue.style.backgroundColor = "rgb(0,149,247)";
    }
    if(!Email.value || !Password.value){
        ButtonBlue.style.backgroundColor = "rgba(0, 149, 247, 0.5)";
    }
}
const DisableButton = () =>{
    if(Email.value.indexOf("@") == -1 || Password.ButtonBlue.length < 5){
        ButtonBlue.disabled = true;
    }
}
const EnableButton = () =>{
    if(Email.value.indexOf("@") !== -1 && Password.value.length > 5){
        ButtonBlue.disabled = false;
    }
}
Email.addEventListener("input", function(){
    LoginBlue();
    EnableButton();
    DisableButton();
})
Password.addEventListener("input", function(){
    LoginBlue();
    EnableButton();
    DisableButton();
})