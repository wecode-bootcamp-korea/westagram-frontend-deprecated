//댓글 추가
const inputValue = document.getElementsByClassName('add-input')[0]
const clickBtn = document.getElementsByClassName('add-btn')[0]

upLoadComment = (e) => {
    if (inputValue.value.length !==0 && (e.keyCode === 13 || e.type === 'click')) {
        let comment = document.getElementsByClassName('comments')[0]
        
        //태그 생성
        let makeCommentDiv = document.createElement('div')
        let makeDiv = document.createElement('div')
        let makeId = document.createElement('span')
        let makeText = document.createElement('span')
        let makeIconContainer = document.createElement('div')
        
        //클래스명
        makeCommentDiv.className = "comment"
        makeDiv.className = "comment-container"
        makeId.className = "name"
        makeText.className = "comment-text"
        makeIconContainer.className = "comment-icon-container"

        //댓글 전달
        makeText.innerHTML = inputValue.value
        makeId.innerHTML = "h__sick"
        
        //내용 추가
        comment.appendChild(makeCommentDiv)
        makeCommentDiv.appendChild(makeDiv)
        makeDiv.appendChild(makeId)
        makeDiv.appendChild(makeText)

        //댓글 입력 후 input value 없애기
        inputValue.value = ""

        //쓰리닷 입력
        let makeCommentBtn = document.createElement('button')
        makeCommentBtn.className = "dot"
        let makeCommentBtnImg = document.createElement('img')
        makeCommentBtnImg.src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
    
        //하트 입력  
        let makeCommentHeart = document.createElement('img')
        makeCommentHeart.className = "comment-heart"
        makeCommentHeart.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"

        //쓰리닷 & 하트 추가
        let commentsDiv = document.getElementsByClassName('comment')
        for(let i=commentsDiv.length-1; i<commentsDiv.length; i++){
            // commentHeartDiv[i].appendChild(makeCommentHeart)
            commentsDiv[i].appendChild(makeIconContainer)
            makeIconContainer.appendChild(makeCommentBtn)
            makeCommentBtn.appendChild(makeCommentBtnImg)
            makeIconContainer.appendChild(makeCommentHeart)
        }
        
    }
}

inputValue.addEventListener('keyup', upLoadComment)
clickBtn.addEventListener('click', upLoadComment)

//댓글 삭제
// const deleteBtn = document.getElementsByClassName('dot')

// deleteComment = () => {
//     const 
// }



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
