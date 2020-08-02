const textarea = document.querySelector("textarea");
textarea.addEventListener('input', changeColor);
function changeColor() {
    const replyUploadBtn = document.querySelector(".replyUploadBtn");
    const textareaVal = textarea.value;
    if(textareaVal) {
        replyUploadBtn.removeAttribute("disabled");
        replyUploadBtn.style.color="rgba(0,149,246,1)";
    } else replyUploadBtn.style.color="rgba(0,149,246,.3)";
}

// const enterBtn = document.querySelector('button.replyUploadBtn');
// enterBtn.addEventListener('click', appendReply);
// function appendReply() {
//     const divList = document.querySelector('div.replyList')
//     const newDiv = document.createElement('div');
//     const newId = document.createElememt('a');
//     const newSpan = document.createElement('span');
//     const newImg = document.createElement('img');
//     const textareaVal = document.querySelector('textarea').value;
//     newDiv.classList.add('reply');
//     newDiv.appendChild(newId);
//     newDiv.appendChild(newSpan);
//     newSpan.textContent = textareaVal;
//     newImg.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
//     newImg.style.width = '12px';
//     newImg.style.height = '12px';
//     newImg.style.position = 'absolute';
//     newImg.style.right = '0';
//     newDiv.appendChild(newImg);
//     divList.appendChild('newDiv');
// }
