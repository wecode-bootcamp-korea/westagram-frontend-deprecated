const   idBox = document.querySelector("#id-input"),
        passwordBox = document.querySelector("#password-input"),
        loginBtn = document.querySelector(".login-button"),
        label = document.getElementsByTagName("label"),
        input = document.getElementsByTagName("input");
const labelMoving = "label-moving";
const inputPadding = "input-padding";

idBox.addEventListener('input', ()=> {
    addClassName(0);
    changeBtnColor();
})

passwordBox.addEventListener('input', ()=> {
    addClassName(1);
    changeBtnColor();
})

function addClassName(i) {
    input[i].className = inputPadding;
    label[i].className = labelMoving;
}

function changeBtnColor() {
    (passwordBox.value.length >= 5 && idBox.value.length >= 1) ?
        loginBtn.style.backgroundColor = "#2f95f6" : 
        loginBtn.style.backgroundColor = "#b2dffb" 
};

// for(let i in input) {
//     input[i].addEventListener('input', () => {
//         for(let i in input) {
//          addClassName(i);
//          changeBtnColor(i);
//          delMovedLabel(i);
//         }
//     })
// }

// function delMovedLabel() {
//     if (passwordBox.value.length == 0 || idBox.value.length == 0) {
//         input[i].classList.remove(inputPadding);
//         label[i].classList.remove(labelMoving);
//     }
// }

