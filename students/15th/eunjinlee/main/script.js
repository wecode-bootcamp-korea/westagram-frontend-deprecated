const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const commentBtn = document.getElementById('comment-btn')

const commentList = document.getElementById('comment__list')

//comments from the local Storage
let comments = localStorage.getItem('comments') !== null ? JSON.parse(localStorage.getItem('comments')) : []

//setting new comments in the local storage
const updateLocalStorage = () => {
  localStorage.setItem('comments', JSON.stringify(comments))
}

//just adding comments array in localstorage with random id
const addCommentsInLocalStorage = () => {
  const generateID = () => Math.floor(Math.random() * 100000000)
  const comment = {
    id: generateID(),
    text: commentInput.value,
  }
  comments.push(comment)
  localStorage.setItem('comments', JSON.stringify(comments))
}

//add localstorage comments on the html one by one
const addCommentDOM = (input) => {
  const commentEl = document.createElement('li')
  if (input.value !== '') {
    commentEl.classList.add('comment__content-list')
    commentEl.innerHTML =''
    commentEl.innerHTML = `
    <div class="comment__content-box">
      <p class="comment__user user-link">workoutbutlazy</p>
      <p class="comment__content">${input}</p>
    </div>
    <img src="../images/heart.png" alt="Comment heart" class="comment__heart"></img>
    `
    commentList.appendChild(commentEl)
  }
}

//remove comments by id
const removeComment = (id) => {
  comments = comments.filter((comment) => comment.id !== id)
  renderComments()
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

//render each comments from localstorage when refreshed
const renderComments = () => { 
  comments.forEach(comment => addCommentDOM(comment.text))
}

//activating login button
const activateLoginBtn = () => {
  if (commentInput.value.length > -1) {
    commentBtn.classList.add('active')
  }
}

//submitting comment and rendering on pages
const submitTextAndRender = (e) => {
  e.preventDefault() //댓 달 때마다 새로고침되는 것 방지
  commentList.innerHTML='' //DOM 비워주고
  addCommentsInLocalStorage() //로컬스토리지 저장하고
  renderComments() //로컬스토리지 값들 다 DOM에 출력
  commentInput.value = '' //폼은 비워준다.
}

//submit event listener
commentForm.addEventListener('submit', submitTextAndRender)

//input box event listener
commentForm.addEventListener('keyup', activateLoginBtn) 

//window load event
window.addEventListener('load', renderComments)