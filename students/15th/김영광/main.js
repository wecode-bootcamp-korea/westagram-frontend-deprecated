const addForm = document.getElementsByClassName('add-form')[0];
const addInput = document.getElementsByClassName('add_input')[0];
const addComment = document.getElementsByClassName('feed_contents')[0];
const commentLs = 'currentComment'

function saveComment(text) {
    localStorage.setItem(commentLs,text);
}

function loadComment(){
    const currentComment = localStorage.getItem(commentLs)
    if(currentComment !== null) {
        currentComment.forEach((e)=>{
            return currentComment.text;
        })
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const addLi = document.createElement('li');
    addLi.innerHTML = addInput.value;
    addComment.appendChild(addLi);
    addInput.value='';
    saveComment(addLi);
    
}

function init(){
    addForm.addEventListener('submit',handleSubmit);

}

init();


// const addBtn = document.querySelector('.add');
// const addComment = document.getElementsByClassName('feed_contents')[0];
// const addInput = document.getElementsByClassName('add_input')[0];

// addBtn.addEventListener('click',(e)=>{
//     const addLi = document.createElement('li');
//     addLi.innerHTML = addInput.value;
//     addComment.appendChild(addLi);
//     addInput.value = "";
//     })

    