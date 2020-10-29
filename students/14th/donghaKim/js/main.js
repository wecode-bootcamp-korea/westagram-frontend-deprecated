const heartWrap = document.querySelector(".heart-icon")
const navHeartBefore = document.querySelector(".i-default")
const navHeartAfter = document.querySelector(".full")

const feedWrap = document.querySelector(".feed-bottom-icon-wrap")
const feedHeartBefore = document.querySelector(".feed-default")
const feedHearAfter = document.querySelector(".feed-full")

const feedRightWrap = document.querySelector(".feed-right-icon-wrap")
const feedRightBefore = document.querySelector(".feed-right-default")
const feedRightAfter = document.querySelector(".feed-right-full")

const storyAddBtn = document.querySelector(".story-add-btn")
const storyAddDiv = document.querySelector(".story-add-wrap")
const storyAddName = document.querySelector(".story-add-name")
const storyAddImg = document.querySelector(".story-add-img")

const navProfile = document.querySelector(".nav-profile")
const toggledProfile = document.querySelector(".icons-wrap-toggle")
const navLogout = document.querySelector(".logout")

let LOCAL_KEY = "comment-list"
let STORY_KEY = "story-key"
let SEARCH_KEY = "search-key"
let lists = JSON.parse(localStorage.getItem(LOCAL_KEY)) || []
    // let userArr = JSON.parse(localStorage.getItem(STORY_KEY)) || []
let serachArr = JSON.parse(localStorage.getItem(SEARCH_KEY)) || []

let click = false;
let storyClicked = false;

let cnt = 7;
let logutId;

let userArr = [{
    id: new Date().getTime().toString(),
    userId: "ancs",
    bg: "img/main/story_icon.png",
    src: "img/main/avatar/ava1.jpg"
}, {
    id: new Date().getTime().toString() + 1,
    userId: "1231dkj",
    bg: "img/main/story_icon.png",
    src: "img/main/avatar/ava2.jpg"
}, {
    id: new Date().getTime().toString() + 2,
    userId: "test123",
    bg: "img/main/story_icon.png",
    src: "img/main/avatar/ava3.jpg"
}]

function navHeartHandler(e) {
    const heart = e.target
    if (heart.classList.contains("i-default")) {
        navHeartAfter.style.display = "block"
    } else if (heart.classList.contains("full")) {
        navHeartAfter.style.display = "none"
    }
}

function feedHeartHandler(e) {
    const heart = e.target
    if (heart.classList.contains("feed-default")) {
        feedHearAfter.style.display = "block"
        click = true;
        heartCount()

    } else if (heart.classList.contains("feed-full")) {
        feedHearAfter.style.display = "none"
        click = false;
        heartCount()
    }
}

function heartCount() {
    if (click) {
        cnt++
    } else {
        cnt--
    }
    let preHeart = document.querySelector(".feed-like").innerHTML
    preHeart = `${cnt}`
    document.querySelector(".feed-like").innerHTML = preHeart
    console.log(preHeart)
}
heartCount()

function storyAddHandler() {
    storyAddDiv.classList.toggle("show-profile")
}

function navProdilehandler() {
    toggledProfile.classList.toggle("show-profile")
}

function logoutHandler() {
    logutId = setTimeout(function() { window.location = "login.html" }, 1000)
}

function createStoryObj(userId, url) {
    return {
        id: new Date().getTime().toString(),
        userId: userId,
        src: url
    }
}

heartWrap.addEventListener("click", navHeartHandler)
feedWrap.addEventListener("click", feedHeartHandler)
heartWrap.addEventListener("click", storyAddHandler)
storyAddDiv.addEventListener("submit", function(e) {
    e.preventDefault()
    let userId = storyAddName.value
    let userUrl = storyAddImg.value
    storyAddName.value = ""
    storyAddImg.value = ""
    let story = createStoryObj(userId, userUrl)
    userArr.push(story)
    renderStory()
})
navProfile.addEventListener("click", navProdilehandler)
navLogout.addEventListener("click", logoutHandler)


const listsContainer = document.querySelector(".feed-user-comment-list-wrap")
const feedUserForm = document.querySelector(".feed-user-form-js")
const feedUserInput = document.querySelector(".feed-user-comment-input")
const showRefList = document.querySelector(".refList")
const contentMore = document.querySelector(".feed-user-content-more")
const userContent = document.querySelector(".feed-user-content")
const commentList = document.querySelector(".feed-user-comment-count")
const commentCountSpan = document.querySelector(".comment-count")
const commentShowBtn = document.querySelector(".comment-show-btn")
const storyListsWrap = document.querySelector(".story-lists-wrap")
const storyDeleteBtn = document.querySelector(".story-delete")
const storyWrapTarget = document.querySelector(".story-add-wrap")
const searchForm = document.querySelector(".header-search-form")
const formForBorder = document.querySelector(".form-wrap")
const searchUserInput = document.querySelector(".header-search-input")
const card = document.querySelector(".card")
const insertBefore = document.querySelector(".feed-header-wrap")
const insertAfter = document.querySelector(".bottom")
const feedRender = document.querySelector(".feed-render")
const refListWrap = document.querySelector(".refList-wrap")

let tempStr = ""
let submited = false
let showContentFlag = false
let showCommentFlag = true;

function renderlists() {
    clearEelmenet(listsContainer)
    hideContent()
    hideComment()
    lists.forEach(comment => {
        const list = document.createElement("li")
        console.log(comment)
        list.classList.add("feed-user-comment-list")
        list.dataset.listId = comment.id
        list.innerHTML += ` <div class="feed-user-comment-list-left">
                             <span class="feed-user-comment-list-id">${comment.userId}</span>
                             <span class="feed-user-comment-list-ref"></span>
                             <span class="feed-user-comment-list-content">${comment.comment}</span>
                            </div>
                           <div class="feed-user-comment-list-right">
                            <div class="feed-right-icon-wrap">
                            <i class="far fa-trash-alt"></i>
                           </div>
                          </div>
                        </li>`
        listsContainer.appendChild(list)
    })
    saveLists()
}

function renderStory() {
    clearEelmenet(storyListsWrap)
    userArr.forEach(story => {
        const storyElement = document.createElement("li")
        storyElement.classList.add("feed-user-comment-list")
        storyElement.dataset.listId = story.id
        storyElement.innerHTML += ` <img src="${story.bg}" alt="" class="circle">
                                    <img src="${story.src}" alt="" class="ciicle-avatar">
                                    <span class="avatar-name">${story.userId}</span>
                                 </li>`
        storyListsWrap.appendChild(storyElement)
    })
    saveLists()
}

function showList(userInputCommment, submited) {
    if (userInputCommment[1]) {
        if (!submited) {
            let targetedUser = []
            for (let i = 0; i < userArr[0].userId.length; i++) {
                let targetUserId = userArr[i].userId
                let newInput = userInputCommment.slice(1, userInputCommment.length)
                if (targetUserId.indexOf(newInput) > -1) {
                    targetedUser.push(userArr[i])
                }
            }
            targetedUser.forEach(user => {
                const div = document.createElement("div")
                div.classList.add("refList-wrap")
                div.innerHTML += `             
                                  <div class="refList-avatar">
                                      <img src="img/main/story_icon.png" alt="" class="refList-bg">
                                      <img src=${user.src} alt="" class="refList-img">
                                       </div>
                                        <div class="ref-name">
                                           <span class="ref-id-span">${user.userId}</span>
                                   </div>
                             </div >
                        `
                showRefList.appendChild(div)
            })
        }
    }
}

function hideContent() {
    let maxLength = 5
    let contentText = userContent.innerText
    tempStr = contentText
    let copiedStr = ""
    let contentLength = contentText.length
    if (!showContentFlag) {
        if (contentLength > maxLength) {
            copiedStr = contentText.slice(0, 5) + "....."
        }
    }
    userContent.innerText = copiedStr
}


function hideComment() {
    let listsLength = lists.length
    if (showCommentFlag) {
        commentList.style.display = "none"
        if (listsLength > 4) {
            commentList.style.display = ""
            commentCountSpan.innerHTML = `${listsLength}`
            listsContainer.style.display = "none"
        }
    }
}

function showComment() {
    showCommentFlag = false;
    listsContainer.style.display = ""
}

function showMoreContent() {
    showContentFlag = true
    let contentText = tempStr
    if (showContentFlag) {
        userContent.innerText = contentText
    }
}
searchForm.addEventListener("keyup", function(e) {
    searchUserInput.classList.add("typed")
})

searchForm.addEventListener("submit", function(e) {
    e.preventDefault()
    let userInput = searchUserInput.value
    let fomattedInput = createInput(userInput)
    serachArr.push(fomattedInput)
    searchUserInput.value = ""
    saveLists()
})

feedUserForm.addEventListener("keyup", function(e) {
    const userInputCommment = feedUserInput.value
    const submitBtn = document.querySelector(".feed-user-comment-submit")
    userInputCommment.length > 1 ? submitBtn.style.color = "#4e5dfc" : submitBtn.style.color = ""
    if (feedUserInput.value[0] === "@") {
        showList(userInputCommment, submited)
    }
})


feedUserForm.addEventListener("submit", function(e) {
    e.preventDefault()
    submited = true;
    const userInputCommment = feedUserInput.value
    if (userInputCommment === "" || userInputCommment === null) return
    showList(userInputCommment, submited)
    const comment = createList(userInputCommment)
    lists.push(comment)
    feedUserInput.value = ""
    renderlists()
    saveLists()
})


contentMore.addEventListener("click", showMoreContent)
commentShowBtn.addEventListener("click", showComment)

function createInput(url) {
    return {
        src: url
    }
}

function createList(comment) {
    return {
        id: new Date().getTime().toString(),
        userId: "immerferenweh_",
        comment
    }
}

listsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("far")) {
        let targetedList = e.target.parentElement.parentElement.parentElement
        console.log(targetedList)
        let targetedListId = targetedList.getAttribute("data-list-id")
        lists = lists.filter(list => list.id !== targetedListId)
        renderlists()
        commentCountSpan.innerHTML = lists.length
        saveLists()
    }
})

storyWrapTarget.addEventListener("click", function(e) {
    console.log(e)
    if (e.target.classList.contains("story-delete")) {
        userArr.splice(userArr.length - 1, 1)
        renderStory()
        saveLists()
    }
})

function saveLists() {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(lists))
    localStorage.setItem(STORY_KEY, JSON.stringify(userArr))
    localStorage.setItem(SEARCH_KEY, JSON.stringify(serachArr))
}


function clearEelmenet(container) {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild)
    }
}

function render() {
    renderStory()
    renderlists()

}
render()