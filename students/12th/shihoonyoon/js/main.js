const postComment = () => {
   //Creating element "div" which includes container, userID, comment, and heart emoji

    const container=document.createElement("div");
    const userId=document.createElement("div");
    const comment=document.createElement("div");
    const heart=document.createElement("img");
    console.log(heart, 'this is heart');

    //Defining values that will be inserted in the created div element above 
    userId.innerHTML="shihoonyoon";
    const commentValue=document.querySelector(".leaveCommentBox").value;
    console.log(commentValue);
    comment.innerHTML=commentValue;
    heart.src="../shihoonyoon/img/heart.png";

    //Adding class to userID, comment, and heart in order to change style
    container.classList.add("newContainer");
    userId.classList.add("newUserId");
    comment.classList.add("newComment");
    heart.classList.add("heart");

    //Adding userID, comment, and heart emoji value to container div
    container.appendChild(userId);
    container.appendChild(comment);
    container.appendChild(heart);

    //Find theh element by the classname 'addedComment' then to that element we are appending the container 
    const added=document.querySelector(".addedComment");
    added.appendChild(container);
    console.log(added);
}