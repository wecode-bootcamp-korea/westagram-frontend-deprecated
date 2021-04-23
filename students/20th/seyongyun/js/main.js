const replyInput = document.getElementsByClassName("replyInput")[0];
const replyButton = document.getElementsByClassName("replyButton")[0];

replyInput.addEventListener("keyup",function(e) {
    if (e.code === 'Enter') {
        let newReply = replyInput.value;
        let replyLocation = document.getElementsByClassName("replyLocation")[0];
        
        const commentP = document.createElement("p");
        commentP.className="replyStyle"
        commentP.innerHTML=newReply;
        replyLocation.appendChild(commentP);
    }
    return;
})

replyButton.addEventListener("click",function(){
    let newReply = replyInput.value;
    let replyLocation = document.getElementsByClassName("replyLocation")[0];

    const commentP = document.createElement("p")
    commentP.className = "replyStyle"
    commentP.innerHTML = newReply;
    replyLocation.appendChild(commentP);

    return;
})

