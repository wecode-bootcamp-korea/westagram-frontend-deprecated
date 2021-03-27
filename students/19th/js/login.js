const Email = document.getElementById("InputEmail");
const Password = document.getElementById("InputPassword");
const ButtonBlue = document.getElementById("BlueButton");

const LoginBlue = () =>{
    if(Email.value !== "" && Password.value !== ""){
        ButtonBlue.style.backgroundColor = "rgb(0,149,247)";
    }
    if(Email.value == "" || Password.value == ""){
        ButtonBlue.style.backgroundColor = "rgba(0, 149, 247, 0.5)";
    }
}
const DisableButton = () =>{
    if(Email.value.indexOf("@") == -1 || Password.ButtonBlue.length < 5){
        ButtonBlue.disabled = true;
        alert("asd");
    }
}
const EnableButton = () =>{
    if(Email.value.indexOf("@") !== -1 && Password.value.length > 5){
        ButtonBlue.disabled = false;
    }
}
Email.addEventListener("keyup", function(){
    LoginBlue();
    EnableButton();
    DisableButton();
})
Password.addEventListener("keyup", function(){
    LoginBlue();
    EnableButton();
    DisableButton();
})