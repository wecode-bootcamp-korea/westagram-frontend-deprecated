const commentForm = document.getElementsByClassName('form')[0];

commentForm.addEventListener('input',()=>{
  const commentInput = document.getElementsByClassName('comment_input_box')[0];
  const commentButton = document.getElementsByClassName('login_btn')[0];
  if(commentInput.value.length != 0){
    commentButton.className = "active_button login_btn";
  } else {
    commentButton.className = "inactive_button login_btn";
  }
})

commentForm.addEventListener('submit',(e) =>{
  const commentInput = document.getElementsByClassName('comment_input_box')[0];
  const commentList = document.getElementsByClassName('comment_list')[0];
  if(commentInput.value.length != 0){
    e.preventDefault();
    const comment = document.createElement("div");
    const span = document.createElement("span");
    const a = document.createElement("a");
    a.innerText = "jiyeon0807";
    span.innerText = commentInput.value;
    comment.appendChild(a);
    comment. appendChild(span);
    commentList.appendChild(comment);
    commentInput.value = '';
  }
})