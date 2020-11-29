const thisIsComment = document.querySelector('.article-comment');
const thisIsButton = document.querySelector('.article-comment-button');


thisIsComment.addEventListener("keyup", function(event){

    const thisIsCommentValue = thisIsComment.value;
    console.log(thisIsCommentValue);

    if(!thisIsCommentValue){
        thisIsButton.setAttribute("disabled",true);
        thisIsButton.style.color = '#B3DFFC';
    }else{
        thisIsButton.removeAttribute("disabled");
        thisIsButton.style.color = '#0095f6';
    }

    console.log(event); 

    if(event.keyCode === 13){
        console.log(event.keyCode);
        event.preventDefault;
        thisIsButton.click();
    }
})

thisIsButton.addEventListener('clicked',function(event){
    
} )


