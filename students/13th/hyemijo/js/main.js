const comments = document.querySelector(.commentList);
const commentsLi = document.createElement('li');
const commentsButtonBox = document.createElement('div');
//const commentButton = document.createElement('button');
const commentDelButton = document.createElement('button');
const commentInput = document.querySelector(.commentIn);

commentsLi.className = "listBox";
commentsButtonBox.className = "btnBox";
commentButton.className = "btnList";

const comment = commentInput.value;

commentInput.addEventListener('keydown',fuction(add){
    if(add.keyCode == 13){
        commentsLi.innerHTML = `<div class="commentInner">${comment}
         <div>` ; }
        
     comments.appendChild(commentsLi);
     commentsLi.appendChild(commentsButtonBox);
     
});