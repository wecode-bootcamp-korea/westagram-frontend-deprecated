const thisIsButton = document.getElementsByClassName('btn')[0];
// const thisIsPw = document.getElementsByClassName('pwd')[0];
const container = document.getElementsByClassName('container')[0];

container.addEventListener('keyup',function() {
    const identification = document.getElementsByClassName('id')[0].value;
    const password = document.getElementsByClassName('pwd')[0].value;

    if (identification.length !== 0 && password.length !==0 ) {
        thisIsButton.style.backgroundColor = "blue";
    } else {
        thisIsButton.style.backgroundColor = "rgb(178,223,252)";
    }
})