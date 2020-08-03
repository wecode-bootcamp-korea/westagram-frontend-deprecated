const textarea = document.querySelector("textarea");
textarea.addEventListener('input', changeColor);
function changeColor() {
    const replyUploadBtn = document.querySelector(".replyUploadBtn");
    const textareaValue = textarea.value;
    textareaValue && replyUploadBtn.removeAttribute("disabled");
    replyUploadBtn.style.color = textareaValue ? "rgb(0,149,246)" : "rgba(0,149,246,.3)";
}

const enterBtn = document.querySelector('button.replyUploadBtn');
enterBtn.addEventListener('click', e => {e.preventDefault();
    const divList = document.querySelector('div.replyList')
    const newDiv = document.createElement('div');
    const newId = document.createElement('a');
    const newSpan = document.createElement('span');
    const newImg = document.createElement('img');
    const textareaVal = document.querySelector('textarea').value;
    newDiv.classList.add('reply');
    newId.textContent = "seojun.park"
    newId.style.marginRight = '2px';
    newDiv.appendChild(newId);
    newSpan.style.fontSize = '14px';
    newDiv.appendChild(newSpan);
    newSpan.textContent = textareaVal;
    newImg.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
    newImg.style.width = '12px';
    newImg.style.height = '12px';
    newImg.style.position = 'absolute';
    newImg.style.right = '0';
    newDiv.appendChild(newImg);
    divList.appendChild(newDiv);
});

