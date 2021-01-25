/*
const thisIsPw = document.querySelector('.loginPw');
const thisIsId = document.querySelector('.loginId');
const opacityAlert = document.querySelector('.loginBtn');



function colorChange(event) {
    let idValue = thisIsId.value.indexOf("@");
    console.log (event.target);
    if(idValue !== -1 && thisIsPw.value.length >= 6) {
        opacityAlert.style.opacity = '1';
        return;
    }
    else {
        opacityAlert.style.opacity = '0.3';
    }
}

thisIsId.addEventListener('keyup',colorChange);
thisIsPw.addEventListener('keyup',colorChange);
*/

const thisIsId = document.getElementsByClassName('loginId')[0];
const thisIsPw = document.getElementsByClassName('loginPw')[0];
const opacityAlert = document.querySelector('.loginBtn');

thisIsPw.addEventListener('keyup', function (event) {
    let idValue = thisIsId.value.indexOf("@");
    console.log (event.target);
    if(idValue !== -1 && thisIsPw.value.length >= 6) {
        opacityAlert.style.opacity = '1';
        return;
    }
    else {
        opacityAlert.style.opacity = '0.3';
        return;
    }
});

