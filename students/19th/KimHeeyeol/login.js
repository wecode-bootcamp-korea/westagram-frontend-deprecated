'use strict';

const changeLoginButtonColor = () => {
    let idForChangeColor = document.getElementsByClassName('changeColorId').value;
    let pwForChangeColor = document.getElementsByClassName('changeColorPw').value;

    // let loginButtonOpacity = document.getElementsByClassName('logInButton');

    idForChangeColor !== "" && pwForChangeColor !== ""
    ? ( document.getElementsByClassName('logInButton').style.opacity = '1' )
    : ( document.getElementsByClassName('logInButton').style.opacity = '0.3');

}


console.log(changeLoginButtonColor());