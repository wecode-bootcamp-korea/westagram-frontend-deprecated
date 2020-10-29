const commentInputBtn = document.getElementById('comment-input-btn');
const displayComment = document.getElementById('comment-side');
const commentInputSide = document.getElementById('comment-input-side');

function checkComment() {
    commentInputSide.value !== '' ? commentInputBtn.style.color = '#0095f6' : commentInputBtn.style.color = 'rgb(201, 224, 249)'
}

function inputComment(e) {
    checkComment() 

    if ((commentInputSide.value !== '' && e.target == commentInputBtn) || (commentInputSide.value !== '' && e.keyCode === 13)) {

        const commentGroup = document.getElementById('comment-group')
        commentGroup.innerHTML += `
        <div class="user-account-name" id="comment-side">
            <div class="mensions-list">
                <span><b>ryuwisdom</b>
                    &nbsp;${commentInputSide.value}</span>
            </div>
            <div class="mention-like">
                <img src="./image/heart.png" alt="like">
            </div>
        </div>
        `
    }
}

const icons = [
    {iconImage : "home"},
    {iconImage : "direct"},
    {iconImage : "explore"},
    {iconImage : "heart"},
    {iconImage : "profile"}
]

const iconGroup = document.getElementById('icon-group')

icons.map((icon)=> iconGroup.innerHTML += `
    <li class="icon-menu">
    <img src="./image/${icon.iconImage}.png" alt="${icon.iconImage}">
    </li>
`)

commentInputSide.addEventListener('keydown', inputComment);
commentInputBtn.addEventListener('click', inputComment);
