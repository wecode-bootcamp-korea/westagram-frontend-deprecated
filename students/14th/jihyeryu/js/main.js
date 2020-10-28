const commentInputBtn = document.getElementById('comment-input-btn');
const displayComment = document.getElementById('comment-side');
const commentInputSide = document.getElementById('comment-input-side');



function checkCommnet() {
    if (commentInputSide.value !== '') {
        commentInputBtn.style.color = '#0095f6';
    } else {
        commentInputBtn.style.color = 'rgb(201, 224, 249)';
    }
}



function inputComment(e) {

    if ((commentInputSide.value !== '' && e.target == commentInputBtn) || (commentInputSide.value !== '' && e.keyCode === 13)) {

        const commentGroup = document.getElementById('comment-group')
        const div = document.createElement('div');
        commentGroup.appendChild(div);
        div.classList.add('user-account-name')
        div.innerHTML += `  <div class="mensions-list">
        <span><b>ryuwisdom</b>
            &nbsp;${commentInputSide.value}</span>
    </div>
    <div class="mention-like">
        <img src="./image/heart.png" alt="">
    </div>
        `
        console.log("입력");
    }

}

commentInputSide.addEventListener('keyup', checkCommnet);
commentInputSide.addEventListener('keydown', inputComment);
commentInputBtn.addEventListener('click', inputComment);
