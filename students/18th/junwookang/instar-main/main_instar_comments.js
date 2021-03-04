window.onload = function() {
  const button = document.getElementById('enter');
  const chat = document.getElementById('myComment');
  const commentWrap = document.querySelector('.comment-wrap');
 
  const deleteComment = () =>{
    // 댓글 삭제 기능
  }

  const addComment = function(){
    const value = chat.value;
    if(value === '')
      return;
    else{
        const commentList = document.createElement('li');
        commentList.classList.add('comment-list');
        commentList.innerHTML = `
          <img class="user-img" src="./img/wecode.jpg">
          <span class="user-name">JunWoo Kang</span>
          <span class="comment-text">${value}</span>
          <button class="delete-btn">삭제</button>
          <i class="fas fa-ellipsis-h"></i>
        `;
        commentWrap.append(commentList);
        chat.value = '';        
        const deleteBtn = commentList.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteComment);
      }
  }

  button.addEventListener('click', addComment);
}




