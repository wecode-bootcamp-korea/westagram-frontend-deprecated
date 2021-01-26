let id =document.getElementById("input1");
let psword =document.getElementById("input2");
let button = document.getElementsByClassName('btn')[0];
function activateButton(){
    let idValue = id.value;
    let pwValue = psword.value;
    if(idValue && pwValue) {
        button.style.backgroundColor ="blue"; 
    }
}

 id.addEventListener("keyup", activateButton);
 psword.addEventListener("keyup", activateButton);

 

