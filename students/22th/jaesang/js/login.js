

const idName = document.getElementsByClassName('log_in')[0]

idName.addEventListener('keyup', function(){
    const idNameValue = document.getElementsByClassName('id_input')[0].value;
    const passWordValue = document.getElementsByClassName('password_input')[0].value;
    const thisIsButton = document.getElementsByTagName('button')[0]

    if (idNameValue && passWordValue) {
        thisIsButton.style.backgroundColor = "#0095f6";
        return;
    }

    if (!idNameValue || !passWordValue) {
        thisIsButton.style.backgroundColor = "#c5e1fc"
        return;
    }

})
