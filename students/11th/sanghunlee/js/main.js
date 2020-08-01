const commentBtn = document.querySelectorAll(".commentSubmitButton");
let  commentInput = document.querySelectorAll(".commentInputTextarea");
const plusCommentWrapper = document.querySelectorAll(".plusCommentWrapper");


for (i=0; i<commentInput.length; i++){

    const commentInput2 = commentInput[i]
    const plusCommentWrapper2 = plusCommentWrapper[i]
    const commentlist = document.createElement("li");

    const plusComment = ()=>{  
        let feedCommentInput = commentInput2.value;
        let feedCommentId = "hun__hoon"
        const commentlist = document.createElement("li");
        const addDivComment = document.createElement("div");
        const addSpanId = document.createElement("span");
        const addSpanComment = document.createElement("span");
        const commentNameDiv = document.createElement("div");
        const commentLikeDiv = document.createElement("div");
        const addLikeImg = document.createElement("img");
        const addLikeBtn = document.createElement("div");
        const addDeleteImg = document.createElement("img");
        const addDeleteBtn = document.createElement("button");

        plusCommentWrapper2.appendChild(commentlist)
        commentlist.className ="forTest"
        commentlist.appendChild(addDivComment);
        addDivComment.className = "plusTypedComment"
        addDivComment.appendChild(commentNameDiv);
        addDivComment.appendChild(commentLikeDiv);    
        commentNameDiv.appendChild(addSpanId);
        commentNameDiv.appendChild(addSpanComment);
        commentLikeDiv.appendChild(addLikeBtn);
        addLikeBtn.appendChild(addLikeImg);
        addLikeBtn.className = "likeDeleteButton"
        addLikeBtn.type = "submit"
        commentLikeDiv.appendChild(addDeleteBtn);
        addDeleteBtn.appendChild(addDeleteImg);
        addDeleteBtn.className ="commentDeleteButton"
        addDeleteBtn.type = "submit"
        addDeleteImg.src = "./img/deletebtn.png"
        addDeleteImg.className = "plusCommentDeleteBtn"
        addLikeImg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        addLikeImg.className ="plusCommentLike"
        addLikeImg.addEventListener('click', (e) => {
            e.target.src = e.target.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" ? "./img/redherat.jpeg" : "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
        })
        addSpanComment.className ="plusFeedComment"
        addSpanId.innerHTML = feedCommentId;
        addSpanComment.innerHTML = feedCommentInput;
        commentInput2.value = "";
        

        const deletefunction = ()=>{
            commentlist.remove();
        }
    
        addDeleteBtn.addEventListener("click", deletefunction);
    };
    const plusCommentEnter = (e) => {
        if(e.keyCode === 13){
            plusComment();
        };
    }
    commentInput[i].addEventListener('keydown', plusCommentEnter);
    commentBtn[i].addEventListener('click', plusComment);
}


let himg = document.querySelectorAll(".heartimg");
let d = himg.src;

for(i=0; i< himg.length ; i++){
    let himg = document.querySelectorAll(".heartimg");
    let d = himg[i];
    const pushLikeBtn = () =>{
        let himg = document.querySelectorAll(".heartimg");

        if (d.src=== "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"){
            d.src = "./img/redherat.jpeg"
            }
        else{
            d.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        }
        
    }
    himg[i].addEventListener("click",pushLikeBtn)
}

const deltete = document.querySelectorAll(".commentDeleteButton");

for(i = 0; i < deltete.length; i++){
    const delbttn = deltete[i];
    const parent1 = delbttn.parentNode;
    const parent2 = parent1.parentNode;
    
    const delbtn = (e)=>{
        parent2.remove();
    }
    delbttn.addEventListener("click",delbtn);
}


const dislikeImg = document.querySelectorAll(".plusCommentLike");


// 왜 안되는지 뜯어보자
// for(i=0; i < dislikeImg.length; i++){
//     const dislikeImgs = dislikeImg[i];
   

//     dislikeImgs.addEventListener("click",(e)=>{
//         console.log(dislikeImg);
//     if (e.target.src === "./img/redherat.jpeg"){
//         e.target.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
//         }
//     else{
//         e.target.src = "./img/redherat.jpeg"
//     }
    
//     })
    
//     // const dislikefunction= (e)=>{
//     //     console.log(dislikeImg);
//     // if (e.target.src === "./img/redherat.jpeg"){
//     //     e.target.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
//     //     }
//     // else{
//     //     e.target.src = "./img/redherat.jpeg"
//     // }

// }

