const toggleButtonDisable = () => {
    const iDValue = document.getElementsByClassName('loginIdInput')[0].value;
    const passwordValue = document.getElementsByClassName('loginPasswordInput')[0].value;

    if (iDValue.length > 5 && passwordValue.length > 5) {
        document.getElementsByClassName('loginButton')[0].removeAttribute("disabled");
        //remove the disable button attribute
    } else {
        document.getElementsByClassName('loginButton')[0].setAttribute("disabled",null);
        //add the disable button attribute
    }
}

const registerIdEventListener = () => {
    document.getElementsByClassName('loginIdInput')[0].addEventListener("keyup", toggleButtonDisable);
//     document.getElementsByClassName('loginIdInput')[0].addEventListener("keyup", function(){
//         const iDValue = document.getElementsByClassName('loginIdInput')[0].value;
//         const passwordValue = document.getElementsByClassName('loginPasswordInput')[0].value;

//         if (iDValue.length > 5 && passwordValue.length > 5) {
//             document.getElementsByClassName('loginButton')[0].removeAttribute("disabled");
//             //remove the disable button attribute
//         } else {
//             document.getElementsByClassName('loginButton')[0].setAttribute("disabled", null);
//             //add the disable button attribute
//         }
//     })    
}

const registerPasswordEventListener = () => {
    document.getElementsByClassName('loginPasswordInput')[0].addEventListener("keyup", toggleButtonDisable);
//     document.getElementsByClassName('loginPasswordInput')[0].addEventListener("keyup", function(){
//         const iDValue = document.getElementsByClassName('loginIdInput')[0].value;
//         const passwordValue = document.getElementsByClassName('loginPasswordInput')[0].value;

//         if (iDValue.length > 5 && passwordValue.length > 5) {
//             document.getElementsByClassName('loginButton')[0].removeAttribute("disabled");
//             //remove the disable button attribute
//         } else {
//             document.getElementsByClassName('loginButton')[0].setAttribute("disabled", null);
//             //add the disable button attribute
//         }
//     })    
}

const init = () => {
    registerIdEventListener();
    registerPasswordEventListener();
}
init();