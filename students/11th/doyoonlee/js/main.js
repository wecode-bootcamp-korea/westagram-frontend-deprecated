
let input = document.querySelector('.comment_input'); 
let button = document.querySelector('.comment_button');
let ul = document.querySelector('.comments_loaded');

function addComment() {
    let inputValue = input.value;
    let li = document.createElement('li'); 
    li.innerHTML = inputValue;
    li.className = 'comments'; 
    ul.appendChild(li); 
    let delBtn = document.createElement('img');
    delBtn.className = 'delete';
    delBtn.setAttribute('src', './img/close.svg');
    delBtn.setAttribute('onclick', 'rmComment()');
    li.appendChild(delBtn);
    input.value="";
}

button.addEventListener('click', addComment); 

input.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        let inputValue = input.value;
        let li = document.createElement('li'); 
        li.innerHTML = inputValue; 
        li.className = 'comments'; 
        ul.appendChild(li);
        let delBtn = document.createElement('img');
        delBtn.className = 'delete';
        delBtn.setAttribute('src', './img/close.svg');
        delBtn.setAttribute('onclick', 'rmComment()');
        li.appendChild(delBtn);
        input.value="";
    } 
});

function rmComment() {
        let li = document.querySelector('.comments');
        let delBtn = document.querySelector('.delete');
        li.removeChild(delBtn);
}





