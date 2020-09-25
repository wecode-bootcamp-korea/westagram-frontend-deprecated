function makePosting () {
    const postingUserPic = document.getElementById('postingUserPic');
    const postingUserId = document.getElementById('postingUserId');
    const postingImg = document.getElementById('postingImg');
    const span = document.createElement("span");

    postingUserPic.src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/71533411_449636125903525_7464596574253875200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Izru35a3h2sAX8nevRu&oh=758a9402e3a5fc0c94d43472cfe548fb&oe=5F914C5B";
    postingUserId.appendChild(span);
    postingUserId.lastChild.innerHTML = "jennierubyjane";
    postingImg.src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/110273507_905365949964229_8624643048007969742_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=hg_5QTJDAskAX9Cz3T1&_nc_tp=16&oh=644f951f76379c807cad52ce483eff42&oe=5F93D20D"
};

function makeReply(idVal, cmntVal) {
    const ul = document.querySelector("ul");
    let makeLi = document.createElement("li");
    let idSpan = document.createElement("span");
    let cmntSpan = document.createElement("span");

    ul.appendChild(makeLi);
    let lastLi = ul.lastChild;
    lastLi.appendChild(idSpan);
    lastLi.appendChild(cmntSpan);

    lastLi.firstChild.innerHTML = idVal;
    lastLi.firstChild.className = "replyId";
    lastLi.lastChild.innerHTML = cmntVal;
    lastLi.lastChild.className = "replyCont";
};

const postBtn = document.getElementById("post");
const reply = document.querySelector("section input");

function makeNewReply ( ) {
    let replyVal = reply.value;

    if(replyVal.length > 0){
         makeReply("eunsonny", replyVal);
    }
}

const postingByEnter = function(e){
    if(e.keyCode === 13){
        makeNewReply();
    }
};

let btnAct = function ( ) {
    let replyVal = reply.value; 
    let postBtnText = document.querySelector("#post span");

    if(replyVal.length > 0){
       return postBtnText.style.color = "#009DF9";
    } else {
        return postBtnText.style.color = "#B9DFFC";
    }
};

function makeListUser(num, userId, imgSrc) {
    // num = 0은 스토리, num = 1은 추천
    let userList = document.getElementsByClassName('userList')[num];
    let makeLi = document.createElement("li");
    let makeImg = document.createElement('img');
    let makeDiv = document.createElement('div');
    let makeP = document.createElement('p');
    let makeSpan = document.createElement('span');

    userList.appendChild(makeLi);
    let lastUser = userList.lastChild;
    lastUser.className = "user";
    lastUser.appendChild(makeImg);
    lastUser.appendChild(makeDiv);
    lastUser.firstChild.src = imgSrc;
    lastUser.lastChild.className = "userInfo";
        
    let userInfo = lastUser.lastChild;
    userInfo.appendChild(makeP);
    userInfo.appendChild(makeSpan);
    userInfo.firstChild.innerHTML = userId;
    userInfo.lastChild.innerHTML =  "14분 전";

    if(num === 1){
        let makeA = document.createElement('a');
        lastUser.appendChild(makeA);
        lastUser.lastChild.innerHTML = "팔로우";
    }
};

function init () {
   makePosting();
   makeReply("jaelming","Jennie");
   makeReply("keemleem","unni english please");
   makeListUser(0, "ssoheean", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8");
   makeListUser(0, "ssoheean", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8");
   makeListUser(0, "ssoheean", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8");
   makeListUser(0, "ssoheean", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8");
   makeListUser(1, "ssoheean", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8");
   makeListUser(1, "ssoheean", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8");
   makeListUser(1, "ssoheean", "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8");
   reply.addEventListener('keyup', btnAct);
   reply.addEventListener('keydown', postingByEnter);
   postBtn.addEventListener('click', makeNewReply);
};

init();
