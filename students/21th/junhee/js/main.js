const listContainer = document.querySelector('.listContainer');
const commentContent = document.querySelector('.commentText');
const uploadButton = document.querySelector('.uploadButton');
const myNameId = document.getElementsByClassName('myNameText');


const addComment = () =>{
    const contentValue = commentContent.value;
    const newComment = document.createElement('li');
    const strongId = document.createElement('a');
    const listBox = document.createElement('div');

    strongId.innerHTML = myNameId[0].innerText;
    strongId.setAttribute("href","#");
    strongId.classList.add("myCommentId");
    newComment.innerHTML = contentValue;
    newComment.classList.add('commentContent');
    listBox.classList.add('myCommentWrapper');
    listBox.appendChild(strongId);
    listBox.appendChild(newComment);
    listContainer.appendChild(listBox);
    commentContent.value = "";
}
 
uploadButton.addEventListener('click',addComment);

const addCommentEnter = (event) => {
    const contentValue = commentContent.value;
    const newComment = document.createElement('li');
    const strongId = document.createElement('a');
    const listBox = document.createElement('div');

    if(event.key==='Enter'){
    strongId.innerHTML = myNameId[0].innerText;
    strongId.setAttribute("href","#");
    strongId.classList.add("myCommentId");
    newComment.innerHTML = contentValue;
    newComment.classList.add('commentContent');
    listBox.classList.add('myCommentWrapper');
    listBox.appendChild(strongId);
    listBox.appendChild(newComment);
    listContainer.appendChild(listBox);
    commentContent.value = "";

    }

}

commentContent.addEventListener('keydown',addCommentEnter);