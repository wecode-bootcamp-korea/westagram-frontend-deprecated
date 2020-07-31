const commentBtn = document.querySelector(".commentSubmitButton");
let  commentInput = document.querySelector(".commentInputTextarea");

const plusComment = ()=>{  
    let feedCommentInput = commentInput.value;
    let feedCommentId = "hun__hoon"
    const commentDiv = document.getElementById("addComment");
    const addDivComment = document.createElement("div");
    const addSpanId = document.createElement("span");
    const addSpanComment = document.createElement("span");

    commentDiv.appendChild(addDivComment);
    addDivComment.appendChild(addSpanId);
    addDivComment.appendChild(addSpanComment);
    addSpanComment.className ="feedAddedComment"
    addSpanId.innerHTML = feedCommentId;
    addSpanComment.innerHTML = feedCommentInput;
    commentInput.value = "";
};

const plusCommentEnter = (e) => {
    if(e.keyCode === 13){
        plusComment();
    };
}

commentInput.addEventListener('keydown', plusCommentEnter);
commentBtn.addEventListener('click', plusComment);

let himg = document.getElementsByClassName("heartimg");

const pushLikeBtn = () =>{
    const heartimg = himg[0];
    if (heartimg.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"){
        heartimg.src = "./img/redherat.jpeg"
        }
    else{
        heartimg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
    }
    
}

himg[0].addEventListener("click",pushLikeBtn)

