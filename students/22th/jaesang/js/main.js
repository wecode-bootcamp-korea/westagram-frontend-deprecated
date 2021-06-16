const commentButton = document.getElementsByClassName('fourth_comment_right')[0]

commentButton.addEventListener('click', function() {

    const ptag = document.createElement('p');
    const comment = document.getElementsByClassName('input_comment')[0].value;
    const article = document.getElementsByTagName('article')[0];

    ptag.className = "insert";

    ptag.style.padding = "0px 52px 0px 52px";
    ptag.style.fontSize = "14px"

    ptag.innerHTML = comment;

    article.appendChild(ptag);
})


const commentInput = document.getElementsByClassName('input_comment')[0]

commentInput.addEventListener('keyup', function(e) {
    const ptag = document.createElement('p');
    const comment = document.getElementsByClassName('input_comment')[0].value;
    const article = document.getElementsByTagName('article')[0];
    const commentButton = document.getElementsByTagName('button')[0];

    if (comment) {
        commentButton.style.color = "#0095f6";
    } else {
        commentButton.style.color = "#c7e3fb";
    }



    if(e.code === 'Enter') {
        ptag.className = "insert";
    
        ptag.style.padding = "0px 52px 0px 52px";
        ptag.style.fontSize = "14px"
    
        ptag.innerHTML = comment;
    
        article.appendChild(ptag);
        return;
    }
})
