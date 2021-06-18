const addClick = document.getElementById('new-comment');
addClick.addEventListener('keyup',function(e){
  if(e.code == 'Enter'){
    submitComment();
  }
})


function submitComment() {
  const newcommentEL = document.getElementById("new-comment");
  const newcomment = newcommentEL.value.trim();

  if(newcomment) {
    const contentEL = document.createElement('div');
    contentEL.classList.add('comment-content');
    contentEL.innerHTML = "Test ID" +" " + newcomment;

    const commentEL = document.createElement('div');
    commentEL.classList.add('comment-row');
    commentEL.appendChild(contentEL);

    document.getElementById('comments').appendChild(commentEL);
    newcommentEL.value = "";
  }
}
