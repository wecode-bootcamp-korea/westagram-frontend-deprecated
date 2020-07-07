//댓글 추가
const inputValue = document.getElementsByClassName('add-input')
const clickBtn = document.getElementsByClassName('add-btn')

upLoadComment = (e, num) => {
    if (inputValue[num].value.length !==0 && (e.keyCode === 13 || e.type === 'click')) {
        let comments = document.getElementsByClassName('comments')[num]
        let comment = document.getElementsByClassName('comment')

        //태그 생성
        let makeComment = document.createElement('div')
        let makeCommentContainer = document.createElement('div')
        let makeId = document.createElement('span')
        let makeText = document.createElement('span')
        let makeIconContainer = document.createElement('div')
        
        //클래스명
        makeComment.className = "comment"
        makeCommentContainer.className = "comment-container"
        makeId.className = "name"
        makeText.className = "comment-text"
        makeIconContainer.className = "comment-icon-container"

        //댓글 전달
        makeText.innerHTML = inputValue[num].value
        makeId.innerHTML = "h__sick"
        
        //내용 추가
        comments.appendChild(makeComment)
        makeComment.appendChild(makeCommentContainer)
        makeCommentContainer.appendChild(makeId)
        makeCommentContainer.appendChild(makeText)

        //댓글 입력 후 input value 없애기
        inputValue[num].value = ""

        //쓰리닷 입력
        let makeDot = document.createElement('button')
        makeDot.className = "dot"
        let makeDotImg = document.createElement('img')
        makeDotImg.src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
    
        //하트 입력  
        let makeHeartBtn = document.createElement('img')
        makeHeartBtn.className = "comment-heart"
        makeHeartBtn.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"

        //쓰리닷 & 하트 추가
        makeComment.appendChild(makeIconContainer)
        makeIconContainer.appendChild(makeDot)
        makeDot.appendChild(makeDotImg)
        makeIconContainer.appendChild(makeHeartBtn)
         
        //댓글 삭제
        deleteComment = (e) => {
            const deleteBtn = e.target
            const deleteBtnParent = deleteBtn.parentNode
            const btnGrandParent = deleteBtnParent.parentNode
            const grandGrandParent = btnGrandParent.parentNode
            const mostGrandParent = grandGrandParent.parentNode
            mostGrandParent.removeChild(grandGrandParent)
        }
        makeDot.addEventListener('click', deleteComment)
    }
}

for (let i=0; i<inputValue.length; i++) {
    inputValue[i].addEventListener('keyup', (e) => upLoadComment(e, i))
    clickBtn[i].addEventListener('click', (e) => upLoadComment(e, i))
}

//인스타그램 검색 연동
let search = document.getElementById('search-input')
let instaAddress = "https://www.instagram.com/explore/tags/"

searchAtInsta = (e) => {
    if((search.value.length !== 0) && e.keyCode === 13) {
        window.location.assign(instaAddress + search.value)
    }
}
search.addEventListener('keyup', searchAtInsta)

//Search창 placeholder이동
let magnify = document.getElementById('magnify')
moveSearchMagnify = () => {
    magnify.style.left = '5px';
}

search.addEventListener('click', moveSearchMagnify)
search.addEventListener('blur', moveBackSearchMagnify = () => {
    magnify.style.left = '70px';
})

//하트 색상 변경
const heart = document.getElementsByClassName('changeHeart')
const heartBtn = document.getElementsByClassName('heart-button')

changeHeartColor = (i) => {
    if(heart[i].getAttribute('fill') === 'white') {
        heart[i].setAttribute('fill', '#ed4956')
        heart[i].setAttribute('stroke', '0')
        heart[i].setAttribute('stroke-width', '0')
    } else if (heart[i].getAttribute('fill') === '#ed4956') {
        heart[i].setAttribute('fill', 'white')
        heart[i].setAttribute('stroke', '#262626')
        heart[i].setAttribute('stroke-width', '3')
    }
}

for (let i=0; i<heart.length; i++) {
    heartBtn[i].addEventListener('click', () => changeHeartColor(i))
}
