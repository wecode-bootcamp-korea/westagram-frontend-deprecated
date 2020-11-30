let postbtn = document.getElementsByClassName('post')[0];
let replinput = document.getElementsByClassName('repl')[0];
let commentbox = document.getElementsByClassName('commentsbox')[0];

postbtn.addEventListener('click', function(){

    let comments = document.createElement("p");
    comments.innerHTML = replinput.value;
    if(comments===null){
        document.removeChild(comments);
    }
    else{
    commentbox.appendChild(comments);
    }
    return;
    
})