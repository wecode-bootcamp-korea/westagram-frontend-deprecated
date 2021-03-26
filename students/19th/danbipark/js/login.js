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
    (passwordBox.value.length >= 5 && idBox.value.includes('@')) ?
        loginBtn.style.backgroundColor = "#2f95f6" : 
        loginBtn.style.backgroundColor = "#b2dffb" 
};

