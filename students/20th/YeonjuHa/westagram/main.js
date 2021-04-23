
const commentTextarea = document.querySelector (".feeds_upload_wright textarea")
const commentInputButton  = document.querySelector(".feeds_upload_wright button")
const conmmentBox = document.querySelector(".feeds_upload_comments")

console.log(commentTextarea)


const buttonActivation = () => {
    if(commentTextarea.value) {
        commentInputButton.removeAttribute("disabled", "");
        commentInputButton.style.color ="blue"
    } else {
        commentInputButton.setAttribute("disabled","");
        commentInputButton.style.color ="skyblue"
    }
}

commentTextarea.addEventListener("input",buttonActivation)

const addComment = () => {
    if(commentTextarea.value) {
        const newTag_Of_AddComment = document.createElement('li');
        newTag_Of_AddComment.innerHTML = commentTextarea.value;
        conmmentBox.appendChild(newTag_Of_AddComment);
    } 
}

commentInputButton.addEventListener("click", addComment)









