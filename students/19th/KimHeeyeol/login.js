const idForChangeColor = document.body.querySelector(".changeColorId");
const pwForChangeColor = document.body.querySelector(".changeColorPw");

const loginButtonActivation = () => {
    const loginButtonOpacity = document.body.querySelector('.logInButton');

    idForChangeColor.value && pwForChangeColor.value
    ? ( loginButtonOpacity.style.opacity = '1')
    : ( loginButtonOpacity.style.opacity = '0.3');
}

/*
idForChangeColor.addEventListener("keyup", function () {
    const loginButtonOpacity = document.body.querySelector('.logInButton');

    idForChangeColor.value && pwForChangeColor.value
    ? ( loginButtonOpacity.style.opacity = '1' )
    : ( loginButtonOpacity.style.opacity = '0.3');
});

pwForChangeColor.addEventListener("keyup", function () {
    const loginButtonOpacity = document.body.querySelector('.logInButton');

    idForChangeColor.value && pwForChangeColor.value
    ? ( loginButtonOpacity.style.opacity = '1' )
    : ( loginButtonOpacity.style.opacity = '0.3');
});*/

idForChangeColor.addEventListener("keyup", loginButtonActivation);
pwForChangeColor.addEventListener("keyup", loginButtonActivation);
