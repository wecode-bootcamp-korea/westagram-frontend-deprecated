const commentBtn = document.querySelectorAll(".commentSubmitButton");
let  commentInput = document.querySelectorAll(".commentInputTextarea");
const plusCommentWrapper = document.querySelectorAll(".plusCommentWrapper");

for (let i=0; i<commentInput.length; i++){
    const commentInput2 = commentInput[i]
    const plusCommentWrapper2 = plusCommentWrapper[i]
    
    const nickname ='sanghun';
    const plusComment = ()=>{
        console.log(commentInput2.value);
        const commentlist = document.createElement("li");
        commentlist.innerHTML = `
        <div class="plusTypedComment">
            <div><span>${nickname}</span><span class="plusFeedComment">${commentInput2.value}</span></div>
            <div>
                <div class="likeDeleteButton">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                        class="plusCommentLike">
                </div>
                <button class="commentDeleteButton" type="submit">
                    <img class="plusCommentDeleteBtn" src="./img/deletebtn.png">
                </button>
            </div>
        </div>`.trim();
        plusCommentWrapper2.appendChild(commentlist);
        commentInput2.value = "";
    };

    const deletefunction = (commentLine)=>{
        commentLine.remove();
    }

    const plusCommentEnter = (e) => {
        if(e.keyCode === 13){
            plusComment();
        };
    }
    // addDeleteBtn.addEventListener("click", deletefunction);
    commentInput[i].addEventListener('keydown', plusCommentEnter);
    commentBtn[i].addEventListener('click', plusComment);
    plusCommentWrapper2.addEventListener("click", (e) => {
        if(e.target.className === 'plusCommentDeleteBtn') deletefunction(e.target.parentNode.parentNode.parentNode.parentNode);
        if(e.target.className ==='plusCommentLike') (e.target.src = e.target.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" ? "./img/redherat.jpeg" : "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png");
    });

}

const dislikeImg = document.querySelectorAll(".plusCommentLike");
let loveImg = document.querySelectorAll("svg"); 

for(i = 0 ;i<loveImg.length; i++){
    let loveImgPath = document.querySelectorAll("path");
    let loveImgEach = loveImg[i];
    let loveImgPathEach = loveImgPath[i];
    let likeNum = document.querySelectorAll(".likeNumber");
    let stayNum = likeNum[i]
    let changeNum = stayNum.innerText;

    const svgLike = (e) =>{
        if(loveImgEach.attributes[2].nodeValue =="#262626")
        {
            loveImgEach.setAttribute("fill", "#ed4956")
            loveImgPathEach.setAttribute("d","M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z")
            loveImgPathEach.setAttribute("fill","#ed4956")
            stayNum.innerHTML= Number(changeNum)+1;

        }
        else{
            loveImgEach.setAttribute("fill", "#262626")
            loveImgPathEach.setAttribute("d","M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z")
            loveImgPathEach.setAttribute("fill","#262626")
            stayNum.innerHTML= Number(changeNum);

        }
    }
    loveImg[i].addEventListener("click", svgLike)
}
