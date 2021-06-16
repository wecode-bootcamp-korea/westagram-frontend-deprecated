

const idName = document.getElementsByClassName('inputs')[0]

idName.addEventListener('keyup', function(){
    const idNameValue = document.getElementsByClassName('first_input')[0].value;
    const passWordValue = document.getElementsByClassName('second_input')[0].value;
    const thisIsButton = document.getElementsByTagName('button')[0]

    if (idNameValue && passWordValue) {
        thisIsButton.style.backgroundColor = "blue";
        return;
    }

    if (!idNameValue || !passWordValue) {
        thisIsButton.style.backgroundColor = "#c5e1fc"
        return;
    }

})
