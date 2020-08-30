const idInput = document.getElementsByClassName('loginIdInput')[0];
const passwordInput =  document.getElementsByClassName('loginPasswordInput')[0];

const toggleButtonDisable = () => {
    const iDValue = idInput.value;
    const passwordValue = passwordInput.value;

    if (iDValue.length > 5 && passwordValue.length > 5) {
        document.getElementsByClassName('loginButton')[0].removeAttribute("disabled");
        //remove the disable button attribute
    } else {
        document.getElementsByClassName('loginButton')[0].setAttribute("disabled",true);
        //add the disable button attribute
    }
}

const registerIdEventListener = () => {
    idInput.addEventListener("keyup", toggleButtonDisable);

}

const registerPasswordEventListener = () => {
    passwordInput.addEventListener("keyup", toggleButtonDisable);
  
}

const init = () => {
    registerIdEventListener();
    registerPasswordEventListener();
}
init();