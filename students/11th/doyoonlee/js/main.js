
let input = document.querySelector('.comment_input'); 
let button = document.querySelector('.comment_button');
let ul = document.querySelector('.comments_loaded');

function addComment() {
    let inputValue = input.value;
    let li = document.createElement('li'); 
    li.innerHTML = inputValue; 
    ul.appendChild(li); 
    let img = document.createElement('img');
    console.log(img);
    img.setAttribute('src', './img/close.svg');
    img.className = 'delete';
    li.appendChild(img);
    input.value="";
}

button.addEventListener('click', addComment); 

input.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        let inputValue = input.value;
        let ul = document.querySelector('.comments_loaded');
        let li = document.createElement('li'); 
        li.innerHTML = inputValue; 
        ul.appendChild(li);
        let img = document.createElement('img');
        img.setAttribute('src', './img/close.svg');
        img.className = 'delete';
        li.appendChild(img);
        input.value="";
    } 
});

function rmComment() {
        let li = document.getElementsByClassName('li');
        let img = document.getElementsByClassName('img');
        li.removeChild(img);
}


img.addEventListener('click', rmComment);
console.log(img);




