'use strict';

const addText = document.querySelector('.addReply');
const postBtn = document.querySelector('.postBtn');


const turnOnBtn= () => {
    let postBtnOn = addText.value; 

    if(postBtnOn.length !== 0){
        postBtn.style. color = "rgb(3, 149, 246)";     
    } else{
        postBtn.style.color = "rgb(178, 223, 252)";
    }
}

addText.addEventListener('keyup', turnOnBtn);


const postIt = () => {
    let postComment = addText.value;

    if (postComment.trim() !== '') {
        const userName = document.createElement('div');
        userName.classList.add('userName');

        const userSentence = document.createElement('div');
        userSentence.classList.add('userSentence')
        userSentence.innerHTML = postComment;

        const likeHeart = document.createElement('div');
        likeHeart.classList.add('likeHeart');
        const heartIcon = document.createElement('i');
        heartIcon.classList.add('fa-heart');
        likeHeart.appendChild(heartIcon);
      

        const reply = document.createElement('li');
        reply.classList.add('reply');

        reply.appendChild(userName);
        reply.appendChild(userSentence);
        reply.appendChild(likeHeart);

        const comment = document.querySelector('.replies');
        comment.appendChild(reply);


    }  else {
       warnEmpty();
    }
}


postBtn.addEventListener('click', postIt);

const enter = e => {
    if(e.keyCode === 13){
       return postIt();
    }
}