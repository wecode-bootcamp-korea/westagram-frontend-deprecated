const searchList = document.getElementById('search-list-container') //ul
const searchInput = document.getElementById('nav-search-input')

const moreArticleBtn = document.getElementById('more-article-button')

const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const commentBtn = document.getElementById('comment-btn')
const commentDeleteBtn = document.getElementById('delete-btn')

const viewCommentsBtn = document.getElementById('comment-view-all')
const commentList = document.getElementById('comment-list')
const commentItem = document.getElementsByClassName('comment__content-list')

const openMenuBtn = document.getElementById('openMenuBtn')
const navContainerOutside = document.getElementById('navContainerOutside')

//comments from the local Storage
let comments =
  localStorage.getItem('comments') !== null ? JSON.parse(localStorage.getItem('comments')) : []

//setting new comments in the local storage
const updateLocalStorage = () => { localStorage.setItem('comments', JSON.stringify(comments))
}

//just adding comments array in localstorage with random id
const addCommentsInLocalStorage = () => {
  const generateID = () => Math.floor(Math.random() * 100000000)
  const comment = {
    id: generateID(),
    text: commentInput.value,
  }
  comments.push(comment)
  updateLocalStorage()
}

//add localstorage comments on the html one by one
const addCommentDOM = (comment) => {
  const commentEl = document.createElement('li')
  if (comment.text !== '') {
    viewCommentsBtn.innerText = `View ${comments.length === 1 ? '' : 'all'} ${comments.length} comment${comments.length === 1 ? '' : 's'}`
    commentEl.classList.add('comment__content-list')
    commentEl.innerHTML = ''
    commentEl.innerHTML = `
    <div class="comment__content-box">
      <span class="comment__content"><span class="comment__user user-link">workoutbutlazy</span>${comment.text}</span>
      <i class="comment__content-delete fas fa-times" onclick="removeComment(${comment.id})"></i>
    </div>
    <i class="far fa-heart comment__heart" id="comment-heart"></i>
    `
    commentList.appendChild(commentEl)
  }
}

//making search result DOM
const addSearchResultDOM = (inputText, userInfo) => {
  const searchResultEl = document.createElement('li') //li
  if (inputText !== '') {
    searchResultEl.classList.add('search-list__result')
    searchResultEl.innerHTML = `
    <div class="search-list__user-image-container">
      <img src="${userInfo.userProfile}" alt="User profile" class="search-list__user-image">
    </div>
    <div class="search-list__user-info-container">
      <div class="search-list__user-id user-link">${userInfo.userId}</div>
      <div class="search-list__user-name">${userInfo.userName}</div>
    </div>
    `
    searchList.classList.add('open')
    searchList.appendChild(searchResultEl)
    return searchList
  } else {
    searchList.classList.remove('open')
  }
}

//search users
const renderSearchResult = () => {
  const searchText = searchInput.value
  let filteredUsers = userInfos.filter((userInfo) => {
    if (userInfo.userId.toLowerCase().includes(searchText.toLowerCase())
       || userInfo.userName.toLowerCase().includes(searchText.toLowerCase())) {
      return userInfo
    }
  })
  searchList.innerHTML = ''
  filteredUsers.forEach((filteredUser) => addSearchResultDOM(searchText, filteredUser))
}

//selecting random index without same element
const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = []
  for (i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
    randomNum = Math.floor(Math.random() * totalIndex)
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    } else { //if the randomNum is already in the array retry
      i--
    }
  }
  return randomIndexArray
}

//rendering stories / getting data from user-infos.js
const renderStories = () => {
  const storyContainer = document.getElementById('stories-container')
  const randomIndexArray = selectIndex(24, 15)
  randomIndexArray.map((index) => {
    const story = document.createElement('div')
    story.classList.add('story')
    story.innerHTML = `
    <div class="story__view-button"><img src="${userInfos[index].userProfile}" alt="User image" class="story__user-image"></div>
    <div class="story__user-id">${userInfos[index].userId}</div>
    `
    storyContainer.appendChild(story)
  })
}

//rendering suggestion dom
const renderSuggestion = () => {
  const suggestionContainer = document.getElementById('suggestion-container')
  const randomIndexArray = selectIndex(24, 5)
  randomIndexArray.map((index) => {
    const recommendedUser = document.createElement('li')
    recommendedUser.classList.add('suggestion-user')
    recommendedUser.innerHTML = `
    <div class="suggestion-user-container ${!userInfos[index].newStory ? 'new-story-false' : ''}">
      <img src="${userInfos[index].userProfile}" class="suggestion-user-profile">
    </div>
    <div class="suggestion-user-info">
      <div class="suggestion-user-id user-link">${userInfos[index].userId}</div>
      <div class="suggestion-detail">${userInfos[index].userStatus}</div>
    </div>
    <a href="#" class="follow-btn" id="follow-btn" onclick="followUser()">Follow</a>
    `
    suggestionContainer.appendChild(recommendedUser)
  })
}

//follow button toggle
const followUser = () => {
  console.log('hello')
  const followBtn = document.getElementById('follow-btn')
  if (followBtn.innerText === 'Follow') {
    followBtn.innerText = 'Following'
    followBtn.style.color = '#191919'
  } else {
    followBtn.innerText = 'Follow'
    followBtn.style.color = 'var(--font-color-blue)'
  }
}

//render each comments from localstorage when refreshed
const renderComments = () => {
  comments.forEach((comment) => addCommentDOM(comment))
}

//remove comments by id
const removeComment = (id) => {
  commentList.innerHTML = ''
  comments = comments.filter((comment) => comment.id !== id)
  updateLocalStorage()
  renderComments()
}

//submitting comment and rendering on pages
const submitTextAndRender = (e) => {
  e.preventDefault() //댓 달 때마다 새로고침되는 것 방지
  commentList.innerHTML = '' //DOM 비워주고
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
const toggleViewCommentsBtn = () => {
  commentList.classList.toggle('view')
  if (commentList.classList.contains('view')) {
    viewCommentsBtn.innerText = 'Hide comments'
  } else {
    viewCommentsBtn.innerText = `View ${comments.length === 1 ? '' : 'all'} ${
      comments.length} comment${comments.length === 1 ? '' : 's'}`
  }
}

//opening menu and closing it by clicking outside container
const openAndCloseMenu = (e) => {
  if (e.target === openMenuBtn) {
    navContainerOutside.classList.add('open')
  }
  if (e.target === navContainerOutside) {
    navContainerOutside.classList.remove('open')
  }
}

//activate posting button
const activatePostBtn = () => {
  if (commentInput.value.length > -1) {
    commentBtn.classList.add('active')
  } else {
    commentBtn.classList.remove('active')
  }
}

//window load events
const init = () => {
  renderComments()
  renderStories()
  renderSuggestion()
  searchInput.value = ''
}

//submit event listener
commentForm.addEventListener('submit', submitTextAndRender)

//more button event listener
moreArticleBtn.addEventListener('click', openArticle)

//view all comments button event listener
viewCommentsBtn.addEventListener('click', toggleViewCommentsBtn)

//search user event listener
searchInput.addEventListener('keyup', renderSearchResult)

//posting button event listener
commentForm.addEventListener('keyup', activatePostBtn)

//profile icon click and open menu event listener 
window.addEventListener('click', openAndCloseMenu)

//window load event
window.addEventListener('load', init)