const createButton = document.querySelector(".submitButton");
const commentBox = document.querySelector(".commentBox");
const comment = document.querySelector(".inputComment");

let commentList = [];


const createComment = (e) => {
    e.preventDefault();
    
    const div = document.createElement("div");
    const a = document.createElement("a");
    const span = document.createElement("span");
    const commentValue = comment.value;
    const newId = commentList.length + 1;

    div.innerHTML = "";
    a.innerHTML = "안녕";
    span.innerHTML = commentValue;
    

    let text = commentBox.appendChild(div);
    const list = {
        content : text,
        id : newId,
    };
    commentList.push(list);

    commentBox.appendChild(div).appendChild(a);
    commentBox.appendChild(div).appendChild(span);
}


createButton.addEventListener("click", createComment)


