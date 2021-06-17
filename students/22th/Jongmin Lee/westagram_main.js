const summit = document.getElementsByClassName('summit')[0];
const reply =  document.getElementsByClassName('write')[0];

function changeColor() {

    if(reply.value) {
        summit.style.color = '#0095f6';
    } else {
        summit.style.color = 'rgba(0,149,246,.3)';
    }
}

function changeHeart() {

    const notlike = document.getElementsByClassName('blackHeart')[0];
    const like = document.getElementsByClassName('redHeart')[0];
        
        like.style.display = 'flex';
        notlike.style.display = 'none';
}

function returnHeart() {
    const notlike = document.getElementsByClassName('blackHeart')[0];
    const like = document.getElementsByClassName('redHeart')[0];
        
        notlike.style.display = 'flex';
        like.style.display = 'none';
}


function summitComment() {
    let comments = document.getElementsByClassName('commentArea')[0];
    let makeDiv = document.createElement('div');
    makeDiv.className = 'talking';

    comments.appendChild(makeDiv)

    let makeUser = document.createElement('span');
    let makeMsg = document.createElement('span');
    let makeBtn = document.createElement('button');

    makeUser.className = "commentUserId";
    makeMsg.className = "mentionUserComment";
    makeBtn.className = "deleteReply"; 

    makeMsg.innerHTML = reply.value;
    makeUser.innerHTML = "jongmin_8910";
    makeBtn.innerHTML = "삭제";

    var element = document.getElementsByClassName('talking');

    for (i=0; i < element.length; i++) {
        element?.[i]?.appendChild(makeUser)
        element?.[i]?.appendChild(makeMsg)
        element?.[i]?.appendChild(makeBtn)
    }


    makeBtn.addEventListener("click", (event) => {
       
        const btn = event.target;
        console.log(btn);
        
        const deleteAll = btn.parentNode;
        
        comments.removeChild(deleteAll); 
    })

    reply.value="";
    summit.style.color = 'rgba(0,149,246,.3)';
}

function uploadComment(e) {
    if(e.keyCode === 13) {
        summitComment()
    }
}


reply.addEventListener('keyup',changeColor);
reply.addEventListener('keyup',uploadComment);