const commentBtn = document.querySelectorAll(".commentSubmitButton");
let  commentInput = document.querySelectorAll(".commentInputTextarea");
const plusCommentWrapper = document.querySelectorAll(".plusCommentWrapper");

for (i=0; i<commentInput.length; i++){
    const commentInput2 = commentInput[i]
    const plusCommentWrapper2 = plusCommentWrapper[i]
    
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
let likenum = document.querySelectorAll(".likeNumber");

for(i=0; i< himg.length ; i++){
    let himg = document.querySelectorAll(".heartimg");
    let heartimgself = himg[i];
    let stayNum = likenum[i]
    let changeNum = stayNum.innerText;
    const pushLikeBtn = () =>{
        if (heartimgself.src=== "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"){
            heartimgself.src = "./img/redherat.jpeg"
            stayNum.innerHTML= Number(changeNum);
            }
        else{
            heartimgself.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            stayNum.innerHTML= Number(changeNum)+1;
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
let loveImg = document.querySelectorAll("svg"); 
for(i = 0 ;i<loveImg.length; i++){
    let loveImgPath = document.querySelectorAll("path");
    let loveImgEach = loveImg[i];
    let loveImgPathEach = loveImgPath[i];

    const svgLike = (e) =>{
        if(loveImgEach.attributes[2].nodeValue =="#262626")
        {
            loveImgEach.setAttribute("fill", "#ed4956")
            loveImgPathEach.setAttribute("d","M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z")
            loveImgPathEach.setAttribute("fill","#ed4956")
        }
        else{
            loveImgEach.setAttribute("fill", "#262626")
            loveImgPathEach.setAttribute("d","M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z")
            loveImgPathEach.setAttribute("fill","#262626")
        }
    }
    loveImg[i].addEventListener("click", svgLike)
}


