const commentList = document.querySelector('.commentList');
const commentHandler = document.querySelector('.commentHandler');
const commentInput = document.querySelector('.commentInput').children[0];
const commentBtn = document.querySelector('.commentBtn').children[0];

commentHandler.addEventListener('keyup', handleCommentBtn);
commentBtn.addEventListener('click', writeComment);


function handleCommentBtn() {
    let isValid = commentInput.value;

    if (isValid) {
        activeCommentBtn();
    } else {
        inactiveCommentBtn();
    }
}

function activeCommentBtn() {
    commentBtn.removeAttribute("disabled");
    commentBtn.style.color = "#0095F6";
    commentBtn.style.cursor = "pointer";
}

function inactiveCommentBtn() {
    commentBtn.setAttribute("disabled","");
    commentBtn.style.color = "#BEE2FD";
    commentBtn.style.cursor = "default";
}

function writeComment() {
    const createLi = document.createElement('li');
    const commentNumber = commentList.children.length;
    let isValid = commentInput.value;

    if (commentNumber > 2) {
        commentList.style.height = "auto";        
    }

    createLi.innerHTML = `<div class="commentInfo">
                            <span class="userId">92moon_sh</span>
                            <span class="userComment">${isValid}</span>
                          </div>
                          <div class="btnGroup">
                            <span class="delBtn">
                                <button>❌</button>
                            </span>
                            <span class="likeBtn">
                                <img alt="likeBtn" src="img/heart.png">
                            </span>
                         </div>`

    commentList.appendChild(createLi);
    commentInput.value = ""; //isValid를 넣으면 안먹힘. 왜때문이죠??
    inactiveCommentBtn();
}