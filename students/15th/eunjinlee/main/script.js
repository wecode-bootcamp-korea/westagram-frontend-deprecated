const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const commentBtn = document.getElementById('comment-btn')

const renderComment = (e) => {
  e.preventDefault()
  if (commentInput.value !== '') {
    
  }
}

const activateLoginBtn = () => {
  if (commentInput.value.length > -1) {
    commentBtn.classList.add('active')
  }
}

commentForm.addEventListener('submit', renderComment)
commentForm.addEventListener('keyup', activateLoginBtn) 