

const input = document.querySelector('.mainFeedCommentBoxInput')
const btn = document.querySelector('.mainFeedBtn')

input.addEventListener('keyup', moreThanOne)

function moreThanOne () {
    const comment = input.value;
   
    if (comment.length >= 1) {
        btn.style.color = "rgb(44, 134, 224)"
    } 
}