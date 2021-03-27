const inputComment = document.getElementsByClassName('comment_input')[0];
const commentBtn = document.getElementsByClassName("comment_btn")[0];

const str1 = inputComment.value;

function addPtag(){
    const pTag = document.createElement('p');
    const comment = document.querySelector('.comment');
    comment.appendChild(pTag);
}

inputComment.addEventListener('keyup',function(e){

    if(e.keyCode === 13){
        addPtag();
        pTag.innerHTML=str1;
    };
    
});