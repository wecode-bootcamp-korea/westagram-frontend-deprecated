window.postComment=function(){
const commentBox=document.getElementById('comments');

commentBox.innerHTML= commentBox.innerHTML + "<br>"
+document.getElementById("commentArea").value;

}

