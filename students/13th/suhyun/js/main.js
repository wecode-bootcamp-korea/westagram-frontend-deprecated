const innerContents = document.getElementsByClassName('contents')[0];
const clickBtn = document.getElementsByClassName('commentEnter')[0];
const board = document.getElementsByClassName('commentsBoard')[0];

function plusComments(event) {
    if (event.type === "click" || event.keyCode === 13) { 

        let makeLi = document.createElement('li')
        let makeUser = document.createElement('span');
        let makeMsg = document.createElement('span');
        let makeBtn = document.createElement('BUTTON');

        makeLi.className = "commentLi"
        makeUser.className = "commentUser"
        makeMsg.className = "commentMsg"
        makeBtn.className = "commentBtn"

        makeMsg.innerHTML = innerContents.value;
        makeUser.innerHTML = "haegoal_Lovers";
        makeBtn.innerHTML = "삭제";

        board.appendChild(makeLi);
        makeLi.appendChild(makeUser);
        makeLi.appendChild(makeMsg);
        makeLi.appendChild(makeBtn);

        innerContents.value = ""
    }
}

clickBtn.addEventListener('click', plusComments);
innerContents.addEventListener('keydown', plusComments);