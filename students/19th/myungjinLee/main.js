let text = document.querySelector(".text");
let comment = document.querySelector(".cmt");
let btn = document.querySelector(".upload");

btn.addEventListener('click',up);

function up () { 
    
    let make = document.createElement('p');
    console.log(comment.value);
    text.appendChild(make);
    make.innerHTML = comment.value;
   
    comment.value = "";
}

function check(){
    console.log('check')
}
