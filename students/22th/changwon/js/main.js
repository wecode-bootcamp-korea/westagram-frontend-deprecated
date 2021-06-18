function submitComment() {
  const newcommentEL = document.getElementById("new-comment");
  const newcomment = newcommentEL.value.trim();

  if(newcomment) {
    // const writeId = document.createElement('p');
    // writeId.classList.add('commentId')
    // writeId.innerText = "test ID";
    // console.log(writeId);
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