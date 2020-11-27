const searchList = document.getElementById('search-list-container')
const searchInput = document.getElementById('nav-search-input')

const moreArticleBtn = document.getElementById('more-article-button')

const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const commentBtn = document.getElementById('comment-btn')
const commentDeleteBtn = document.getElementById('delete-btn')

const viewCommentsBtn = document.getElementById('comment-view-all')
const commentList = document.getElementById('comment-list')
const commentItem = document.getElementsByClassName('comment__content-list')

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
const addCommentDOM = (comment) => {
  const commentEl = document.createElement('li')
  if (comment.text !== '') {
    viewCommentsBtn.innerText = `View ${comments.length === 1 ? '' : 'all'} ${comments.length} comment${comments.length === 1 ? '' : 's'}`

    commentEl.classList.add('comment__content-list')
    commentEl.innerHTML =''
    commentEl.innerHTML = `
    <div class="comment__content-box">
      <span class="comment__content"><span class="comment__user user-link">workoutbutlazy</span>${comment.text}</span>
      <i class="comment__content-delete fas fa-times" id="delete-btn" onclick="removeComment(${comment.id})"></i>
    </div>
    <img src="../images/heart.png" alt="Comment heart" class="comment__heart"></img>
    `
    commentList.appendChild(commentEl)
  }
}

//search users 
const searchUser = (e) => {
  const searchInput = e.target.value
  let filteredUsers = userInfos.filter((userInfo) => {
    return userInfo.userId.toLowerCase().includes(searchInput.toLowerCase())
        || userInfo.userName.toLowerCase().includes(searchInput.toLowerCase())
  })

  const searchResultEl = document.createElement('li')
  filteredUsers.forEach((filteredUser) => {
    if (searchInput.value !== '') {
      searchResultEl.classList.add('search-list__result')
      searchResultEl.innerHTML = ''
      searchResultEl.innerHTML = `
      <div class="search-list__user-image-container">
        <img src="${filteredUser.userProfile}" alt="User profile" class="search-list__user-image">
      </div>
      <div class="search-list__user-info-container">
        <div class="search-list__user-id user-link">${filteredUser.userId}</div>
        <div class="search-list__user-name">${filteredUser.userName}</div>
      </div>
      `
    }
  })
  searchList.appendChild(searchResultEl)
  console.log(filteredUsers)
}


//search user event listener
// searchInput.addEventListener('input', searchUser)
searchInput.addEventListener('keydown', searchUser)

//remove comments by id
const removeComment = (id) => {
  commentList.innerHTML='' 
  comments = comments.filter((comment) => comment.id !== id)
  localStorage.setItem('comments', JSON.stringify(comments))
  renderComments()
}

//render each comments from localstorage when refreshed
const renderComments = () => { 
  comments.forEach(comment => addCommentDOM(comment))
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
  searchInput.value = '' //폼은 비워준다.
}

//opening an article with more button
const openArticle = () => {
  const article = document.getElementById('article')
  article.classList.add('open')
  moreArticleBtn.classList.add('open')
}

//view all comments with button
const viewAllComments = () => {
  commentList.classList.add('view')
}

//submit event listener
commentForm.addEventListener('submit', submitTextAndRender)

//input box event listener
commentForm.addEventListener('keyup', activateLoginBtn) 

//window load event
window.addEventListener('load', renderComments)

//more button event listener
moreArticleBtn.addEventListener('click', openArticle)

//view all comments button event listener 
viewCommentsBtn.addEventListener('click', viewAllComments)