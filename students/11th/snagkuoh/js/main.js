let replyArea = document.querySelector('#reply-area');
let replyBtn = document.querySelector('.reply-btn');

// 댓글 추가 //
const addReply = () => {
    let replyVal = replyArea.value;
    let newDiv = document.createElement('div');
    newDiv.innerText = replyVal;
    let newReply = document.querySelector('.main-text-userReply');
    newReply.appendChild(newDiv);
    replyArea.value="";
}

replyBtn.addEventListener("click", addReply);
replyArea.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        addReply();
    }
})

// 버튼 활성화 //
const btnOn = () => {
    if (replyArea.value) {
        replyBtn.disabled = false;
        replyBtn.classList ='reply-btn-active';
        replyBtn.classList.remove = 'reply-btn-off';
    }
}

// 버튼 비활성화 //
const btnOff = () => {
    if (!replyArea.value) {
        replyBtn.disabled = 'disabled';
        replyBtn.classList = 'reply-btn-off';
        replyBtn.classList.remove = 'reply-btn-active';
    }
}

replyArea.addEventListener('keydown', function(){
    btnOn();
    btnOff();
    }
)
