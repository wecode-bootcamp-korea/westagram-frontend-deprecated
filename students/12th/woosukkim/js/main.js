const form = document.querySelector('form');
const typeComment = form.querySelector('.type');
const submitBtn = document.querySelector('.submit');
const displayComment = document.querySelector('.comment');


function handleBtn() {
    const currentValue = typeComment.value;

    if(currentValue.length) {
        submitBtn.style.color = "#0095F6"
        submitBtn.style.fontWeight ="600"
        submitBtn.removeAttribute('disabled');
        submitBtn.style.cursor ='pointer';
    } 
    else { 
        submitBtn.style.color = "#B9E0FC"
        submitBtn.style.fontWeight ="600"
        submitBtn.setAttribute('disabled', "");
        submitBtn.style.cursor ='auto';
    }
}

function handleDisplay(text){
    const li = document.createElement('li');
    const comment = document.createElement('span');
    const name = document.createElement('span');
    name.innerHTML= 'ws_david_kim'
    name.style.fontSize="14px"
    name.style.fontWeight="600"
    comment.innerHTML= ` ${text}`
    comment.style.fontSize= "14px"
    li.appendChild(name);
    li.appendChild(comment);
    displayComment.appendChild(li);
}

function handleClick(event){
    event.preventDefault()
    const currentValue = typeComment.value;
    handleDisplay(currentValue);
    typeComment.value= "";
    submitBtn.style.color = "#B9E0FC"
    submitBtn.style.fontWeight ="600"
    submitBtn.setAttribute('disabled', "");
    submitBtn.style.cursor ='auto';
}

function handleSubmit(event) {
    event.preventDefault()
    const currentValue = typeComment.value;
    handleDisplay(currentValue);
    typeComment.value ="";
}

function init() {
    form.addEventListener('keyup',handleBtn);
    form.addEventListener('submit', handleSubmit);
    submitBtn.addEventListener('click', handleClick);
    }

init()





