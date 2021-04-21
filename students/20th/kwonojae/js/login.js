const loginButton = document.querySelector(".loginBtn");
const inputID = document.querySelector(".inputID");
const inputPW = document.querySelector(".inputPW");

inputID.addEventListener("keydown", function() {
    console.log(inputID)
    if (!inputID.value && !inputPW.value) {
        console.log(inputID)
        loginButton.style.backgroundColor = "red";
    }
});

inputPW.addEventListener("keydown", function() {
    console.log(inputPW.value)
    if (!inputID.value && !inputPW.value) {
        loginButton.style.backgroundColor = "red";
    }
});
 
// inputPW.addEventListener("keyup", function()
// {       
//     const idValue = inputID.value;
//     const pwValue = inputPW.value;
//     // const inputID = document.querySelector(".inputID");
//     // const inputPW = document.querySelector(".inputPW");
//     // const loginButton = document.querySelector(".loginBtn");

//     if (!idValue && !pwValue) {
//         console.log(pwValue);
//         loginButton.style.backgroundColor = 'red';

//     } 
// });