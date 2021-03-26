const Email = document.getElementById("InputEmail");
const Password = document.getElementById("InputPassword");
const ButtonBlue = document.getElementById("BlueButton");

const LoginBlue = () =>{
    if(Email.value !== "" && Password.value !== ""){
        ButtonBlue.style.backgroundColor = "rgb(0,149,247)";
    }
    if(Email.value == "" && Password.value == ""){
        ButtonBlue.style.backgroundColor = "rgba(0, 149, 247, 0.5)";
    }
}

Email.addEventListener("keyup", function(){
    LoginBlue();
})
Password.addEventListener("keyup", function(){
    LoginBlue();
})