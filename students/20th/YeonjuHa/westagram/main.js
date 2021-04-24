
const commentTextarea = document.querySelector (".feeds_upload_wright textarea")
const commentInputButton  = document.querySelector(".feeds_upload_wright button")
const conmmentBox = document.querySelector(".feeds_upload_comments")

console.log(commentTextarea)

const buttonActivation = () => {
    if(commentTextarea.value) {
        commentInputButton.removeAttribute("disabled","");
        commentInputButton.style.color ="#1993A8";
        commentInputButton.style.fontWeight = "900";
    } else {
        commentInputButton.setAttribute("disabled","");
        commentInputButton.style.color ="#B2EBF4";
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









