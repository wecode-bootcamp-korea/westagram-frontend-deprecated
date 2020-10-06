const blueButton = document.getElementsByTagName("button")[0];
const idInput = document.getElementsByClassName("idInput")[0];
const passInput = document.getElementsByClassName("passInput")[0];



passInput.addEventListener("keyup", function(){

let idInputvalue = idInput.value;
let passInputvalue= passInput.value;

    if(idInputvalue.length >= 4 && passInputvalue.length>= 4) {
    
     blueButton.style.backgroundColor = "#0095f6";
    
     }
});

idInput.addEventListener("keyup", function(){

let idInputvalue = idInput.value;
let passInputvalue= passInput.value;

    if(idInputvalue.length >= 4 && passInputvalue.length>= 4) {
    
     blueButton.style.backgroundColor = "#0095f6";
    
     }
});