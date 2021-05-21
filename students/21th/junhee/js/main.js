const listContainer = document.querySelector('.list-container');
const commentContent = document.querySelector('.commentText');
const uploadButton = document.querySelector('.uploadBtn');


const addComment = () =>{
    const contentValue = commentContent.value;
    const newComment = document.createElement('li');
    newComment.innerHTML = contentValue;
    newComment.classList.add('comment-content')
    listContainer.appendChild(newComment);
    commentContent.value = "";
}
 
uploadButton.addEventListener('click',addComment);

