'use strict';

const newComment = document.querySelector('.commentInput');
//const clickHeart = document.querySelector('.commentHeart');

function createNewComment (event) {

    if (event.keyCode === 13) {

        const commentContainer = document.querySelector('.replierMentionContainer');
        const makeDiv = document.createElement('div');
        const makeUserName = document.createElement('span');
        const makeComment = document.createElement('span');
        //let makeHeart = document.createElement('div');

        makeDiv.className = "replierMentionContainer"
        makeUserName.className = "replierMentionName"
        makeComment.className = "replierMentionComment"
        //makeHeart.className = "commentHeart"

        makeComment.innerHTML= newComment.value;
        makeUserName.innerText = "hereizhere";
        //makeHeart.innerHTML = clickHeart;
        
        commentContainer.appendChild(makeDiv);
        makeDiv.appendChild(makeUserName);
        makeDiv.appendChild(makeComment);
        //makeDiv.appendChild(makeHeart);
    }
}

newComment.addEventListener('keyup', createNewComment);