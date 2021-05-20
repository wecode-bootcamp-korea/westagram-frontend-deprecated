const inputId = document.getElementById('id');
const inputPw = document.getElementById('password');
const inputItems = document.getElementById('inputContainer')
const logInButton = document.getElementById('logInButton');
const mainATag = document.getElementById(moveMain);
const loginEventTrue = () => {
    logInButton.disabled = false;
    logInButton.style.cursor="pointer";
    logInButton.style.backgroundColor = "#0095f6";
    mainATag.disabled = false;
};
const loginEventFalse = () => {
    logInButton.disabled=true;
    logInButton.style.cursor="default";
    logInButton.style.backgroundColor = "#B9DFFC";
}


inputItems.addEventListener('keyup', (event)=>{
    inputId.value.length >= 1 && inputPw.value.length >= 1 ?
    loginEventTrue():loginEventFalse();
});


document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        document.getElementById("logInbutton").click();
    }
})


