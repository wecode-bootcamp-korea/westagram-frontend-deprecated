const itsMyId = document.querySelector(".myId").textContent;
let itsReplyInput = document.getElementsByClassName('replyInput');
let itsReplyBox = document.getElementsByTagName("ul");

for (let i = 0; i < itsReplyInput.length; i++) {
    itsReplyInput[i].addEventListener('keydown', function (e) {

        if (e.keyCode === 13) {
            const liTag = document.createElement('li');
            const idSpan = document.createElement('span');
            const replySpan = document.createElement('span');
            idSpan.className = "userId";
            idSpan.innerHTML = itsMyId;
            replySpan.innerHTML = itsReplyInput[i].value;
            liTag.appendChild(idSpan);
            liTag.appendChild(replySpan)
            itsReplyBox[i].appendChild(liTag);
            itsReplyInput[i].value = "";
        }
    })
}