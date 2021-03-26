let input = document.querySelector("input");
let id = document.getElementsByClassName("id")[0];
let password = document.querySelector(".passward");
let color = document.querySelector('button');

id.addEventListener('keyup',button);
password.addEventListener('keydown',button);

function button() {
   return (id.value.length!=0 || password.value.length!=0 ? color.style.backgroundColor="blue"
    :color.style.backgroundColor="rgb(196, 224, 251)")

}

