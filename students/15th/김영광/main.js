const addBtn = document.querySelector('.add');
const addComment = document.getElementsByClassName('feed_contents')[0];
const addInput = document.getElementsByClassName('add_input')[0];

addBtn.addEventListener('click',(e)=>{
    const addLi = document.createElement('li');
    addLi.innerHTML = addInput.value;
    addComment.appendChild(addLi);
    addInput.value = "";
})