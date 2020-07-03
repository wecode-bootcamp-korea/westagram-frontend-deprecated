const inputComment = document.getElementsByClassName("inputComment");
const commentBtn = document.getElementsByClassName("commentBtn");

// ACTIVATE BUTTON

function activateCommentBtn(num) {
    (inputComment[num].value !== "")
    ? (commentBtn[num].style.color= "rgb(38, 167, 218)",
    commentBtn[num].disabled = false)
    : (commentBtn[num].style.color="lightblue",
    commentBtn[num].disabled = true)
}

for(let i = 0; i < inputComment.length; i++){    
    inputComment[i].addEventListener('keyup', () => activateCommentBtn(i)) ; 
}

// ADD COMMENTS
function showComments(comment, j){
    event.preventDefault();
    inputComment[j].value="";
    const commentsFrame = document.getElementsByClassName('commentsFrame')[j];
    let eachComment = document.createElement('li');
    let commentId = document.createElement('strong');
    let commentValue = document.createElement('span');
    let deleteBtn = document.createElement('button');
    deleteBtn.addEventListener("click", function(){
        eachComment.parentElement.removeChild(eachComment);
    })
    eachComment.classList.add('eachComment');
    commentId.classList.add('commentId');
    commentValue.classList.add('commentValue');
    deleteBtn.classList.add('deleteBtn');

    commentId.innerText = "limosum91";
    commentValue.innerText = comment + '\n';
    deleteBtn.innerText = "X";
    commentId.style.flexShrink = '0';
    commentValue.style.flexGrow = '1';
    deleteBtn.style.flexGrow = '1';

    eachComment.appendChild(commentId);
    eachComment.appendChild(commentValue);
    eachComment.appendChild(deleteBtn);
    commentsFrame.appendChild(eachComment);
}

for(let j = 0; j < inputComment.length; j++){    
    commentBtn[j].addEventListener('click', () => showComments(inputComment[j].value, j));
}

const moreBtn =  document.getElementsByClassName('moreBtn');
const paragraph= document.getElementsByClassName("paragraph");

function seeMore(num){
    moreBtn[num].style.display = "none";
    paragraph[num].style.maxWidth= "640px";
    paragraph[num].style.lineHeight= "auto";
    paragraph[num].style.whiteSpace= "normal";
    paragraph[num].style.overflow= "visible";
    
    
}
for(let k = 0; k < paragraph.length; k++){    
    moreBtn[k].addEventListener('click', () => seeMore(k));
}